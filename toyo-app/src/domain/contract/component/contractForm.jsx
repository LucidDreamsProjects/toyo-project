import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { Tile, ConstrainedTile } from "../../../views/secretPanel/styles";
import { createContract } from "../services/createContract";

export const ContractForm = () => {
  const initialValues = {
    name: "",
    description: "",
    chain: "",
    symbol: "",
    image: "",
    externalUrl: "",
    media: [],
  };

  return (
    <div className="form-contract">
      <h1>CREATE CONTRACT</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          const contract = {
            name: values.name,
            description: values.description,
            chain: values.chain,
            symbol: values.symbol,
            image: values.image,
            externalUrl: values.externalUrl,
            media: values.media,
          };

          console.log(JSON.stringify(contract));

          try {
            await createContract(contract);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ values }) => (
          <Form>
            <Tile className="tile">
              <label htmlFor="name">NOME</label>
              <Field id="name" name="name" placeholder="name" />
            </Tile>
            <Tile className="tile">
              <label htmlFor="description">DESCRIPTION</label>
              <Field
                id="description"
                name="description"
                placeholder="description"
              />
            </Tile>
            <Tile className="tile">
              <label htmlFor="chain">CHAIN ("MATIC")</label>
              <Field id="chain" name="chain" placeholder="chain" />
            </Tile>
            <Tile className="tile">
              <label htmlFor="symbol">SYMBOL</label>
              <Field id="symbol" name="symbol" placeholder="symbol" />
            </Tile>
            <Tile className="tile">
              <label htmlFor="image">IMAGE</label>
              <Field id="image" name="image" placeholder="image" />
            </Tile>
            <Tile className="tile">
              <label htmlFor="externalUrl">EXTERNAL URL</label>
              <Field
                id="externalUrl"
                name="externalUrl"
                placeholder="external url"
              />
            </Tile>
            <ConstrainedTile className="tile">
              <label htmlFor="media">MEDIA</label>
              <FieldArray name="media">
                {({ insert, remove, push }) => (
                  <div id="field-array">
                    {values.media.length > 0 &&
                      values.media.map((media, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`media.${index}.type`}>Type</label>
                            <Field
                              name={`media.${index}.type`}
                              placeholder="video"
                              type="text"
                            />
                            <ErrorMessage
                              name={`media.${index}.type`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`media.${index}.value`}>
                              Value
                            </label>
                            <Field
                              name={`media.${index}.value`}
                              placeholder="http://img.arkane.network/chuck_soundtrack.mp3"
                              type="text"
                            />
                            <ErrorMessage
                              name={`media.${index}.value`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      id="btn-add"
                      type="button"
                      className="secondary"
                      onClick={() => push({ type: "", value: "" })}
                    >
                      Add Media
                    </button>
                  </div>
                )}
              </FieldArray>
            </ConstrainedTile>
            <button id="btn-submit" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
