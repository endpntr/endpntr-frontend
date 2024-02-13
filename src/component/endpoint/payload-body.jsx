import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/acai.css";

function PayloadBody({ body }) {
  return (
    <>
      <h2 className="pb-3 text-l">Request Body:</h2>
      <div id="body" className="border border-gray-500 rounded-md shadow-2xl">
        <JSONPretty
          id="Json-pretty"
          data={body}
          mainStyle="background:rgb(17, 24, 39); padding:1rem; border-radius: 0.5rem"
          keyStyle="color:rgb(192, 132, 252)"
          valueStyle="color:rgb(200, 200, 200)"
          booleanStyle="color:rgb(100, 150, 150)"
        ></JSONPretty>
      </div>
    </>
  );
}

export default PayloadBody;
