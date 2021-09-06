const TemplateForm = () => {
  const initialValues = {
    name: "",
    description: "",
    image: "",
    externalUrls: "",
    backgroundColor: "",
    fungible: false,
    maxSupply: 0,
    burnable: true,
    animationUrls: [],
    attributes: [],
  };

  return (
    <div class="form-template">
      <h1>CREATE NFT TEMPLATES</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          const template = {
            name: values.name,
            description: values.description,
            image: values.image,
            externalUrls: values.externalUrls,
            backgroundColor: values.backgroundColor,
            fungible: values.fungible,
            maxSupply: values.maxSupply,
            burnable: values.burnable,
            animationUrls: values.animationUrls,
            attributes: values.attributes,
          };

          // console.log(JSON.stringify(template));

          try {
            await createTemplate(template);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ values }) => (
          <Form>
            <Tile class="tile">
              <label htmlFor="name">NOME</label>
              <Field id="name" name="name" placeholder="name" />
            </Tile>
            <Tile class="tile">
              <label htmlFor="description">DESCRIPTION</label>
              <Field
                id="description"
                name="description"
                placeholder="description"
              />
            </Tile>
            <Tile class="tile">
              <label htmlFor="image">IMAGE</label>
              <Field id="image" name="image" placeholder="image" />
            </Tile>
            <Tile class="tile">
              <label htmlFor="externalUrl">EXTERNAL URL</label>
              <Field
                id="externalUrl"
                name="externalUrls"
                placeholder="external url"
              />
            </Tile>
            <Tile class="tile">
              <label htmlFor="backgroundColor">BACKGROUND COLOR</label>
              <Field
                id="backgroundColor"
                name="backgroundColor"
                placeholder="background color"
              />
            </Tile>
            <Tile class="tile col">
              <label htmlFor="fungible">FUNGIBLE</label>
              <div>YES</div>
              <Field id="fungible" name="fungible" type="radio" value="true" />
              <div>NO</div>
              <Field id="fungible" name="fungible" type="radio" value="false" />
            </Tile>
            <Tile class="tile">
              <label htmlFor="maxSupply">MAX SUPPLY</label>
              <Field
                id="maxSupply"
                name="maxSupply"
                type="number"
                placeholder="max supply"
              />
            </Tile>
            <Tile class="tile">
              <label htmlFor="burnable">BURNABLE</label>
              <div>YES</div>
              <Field id="burnable" name="burnable" type="radio" value="true" />
              <div>NO</div>
              <Field id="burnable" name="burnable" type="radio" value="false" />
            </Tile>
            <ConstrainedTile class="tile">
              <label htmlFor="animationUrls">ANIMATION URL</label>
              <FieldArray id="field-array" name="animationUrls">
                {({ insert, remove, push }) => (
                  <div>
                    {values.animationUrls.length > 0 &&
                      values.animationUrls.map((animationUrls, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`animationUrls.${index}.type`}>
                              Type
                            </label>
                            <Field
                              name={`animationUrls.${index}.type`}
                              placeholder="video"
                              type="text"
                            />
                            <ErrorMessage
                              name={`animationUrls.${index}.type`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`animationUrls.${index}.value`}>
                              Value
                            </label>
                            <Field
                              name={`animationUrls.${index}.value`}
                              placeholder="http://img.arkane.network/chuck_soundtrack.mp3"
                              type="text"
                            />
                            <ErrorMessage
                              name={`animationUrls.${index}.value`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <button type="button" onClick={() => remove(index)}>
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      onClick={() => push({ type: "", value: "" })}
                    >
                      Add Animation Url
                    </button>
                  </div>
                )}
              </FieldArray>
            </ConstrainedTile>
            <ConstrainedTile class="tile">
              <label htmlFor="attributes">ATTRIBUTES</label>
              <FieldArray id="field-array" name="attributes">
                {({ insert, remove, push }) => (
                  <div>
                    {values.attributes.length > 0 &&
                      values.attributes.map((attributes, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`attributes.${index}.type`}>
                              Type
                            </label>
                            <Field
                              name={`attributes.${index}.type`}
                              placeholder="property"
                              type="text"
                            />
                            <ErrorMessage
                              name={`attributes.${index}.type`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`attributes.${index}.name`}>
                              Name
                            </label>
                            <Field
                              name={`attributes.${index}.name`}
                              placeholder="Generic"
                              type="text"
                            />
                            <ErrorMessage
                              name={`attributes.${index}.name`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`attributes.${index}.value`}>
                              Value
                            </label>
                            <Field
                              name={`attributes.${index}.value`}
                              placeholder="Token"
                              type="text"
                            />
                            <ErrorMessage
                              name={`attributes.${index}.value`}
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
                      type="button"
                      className="secondary"
                      onClick={() => push({ type: "", name: "", value: "" })}
                    >
                      Add Attribute
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
