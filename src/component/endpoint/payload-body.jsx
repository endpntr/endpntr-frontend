import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/acai.css";

function PayloadBody({ body }) {
  return (
    <div id="body">
      <JSONPretty id="Json-pretty" data={body}></JSONPretty>
    </div>
  );
}

export default PayloadBody;
