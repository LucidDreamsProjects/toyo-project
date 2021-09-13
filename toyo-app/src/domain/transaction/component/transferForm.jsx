import { Formik, Form, Field } from "formik";
import { transferToken } from "../../token/services/transferToken";
import { Tile } from "../../../views/secretPanel/styles";

export const TransferForm = (props) => {
  const secretType = "MATIC";

  const initialValues = {
    walletId: "",
    to: "",
    tokenAddress: "",
    tokenId: "",
    secretType: "",
    value: "",
  };

  return (
    <div className="form-transfer">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          const dto = {
            walletId: values.walletId,
            to: values.to,
            tokenAddress: values.tokenAddress,
            tokenId: values.tokenId,
            secretType: "MATIC",
            value: 0.0000000001,
          };

          console.log(dto);

          try {
            await transferToken(props.arkaneConnect, dto);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ values }) => (
          <Form>
            <Tile className="tile">
              <label htmlFor="walletId">FROM</label>
              <Field id="walletId" name="walletId" placeholder="from" />
            </Tile>
            <Tile className="tile">
              <label htmlFor="to">TO</label>
              <Field id="to" name="to" placeholder="to" />
            </Tile>
            <Tile className="tile">
              <label htmlFor="tokenAddress">TOKEN ADDRESS</label>
              <Field
                id="tokenAddress"
                name="tokenAddress"
                placeholder="token address"
              />
            </Tile>
            <Tile className="tile">
              <label htmlFor="tokenId">TOKEN ID</label>
              <Field id="tokenId" name="tokenId" placeholder="token Id" />
            </Tile>
            <button id="btn-submit" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
