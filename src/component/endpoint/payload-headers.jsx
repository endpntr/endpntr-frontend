import { useState } from "react";

function PayloadHeaders({ headers }) {
  const headersPreview = headers.slice(0, 3);
  const [currHeaders, setHeaders] = useState(headersPreview);

  const toggleHeaders = () => {
    const result = currHeaders === headers ? headersPreview : headers;
    setHeaders(() => result);
  };

  return (
    <>
      <h2 className="text-l mb-3">Request Headers:</h2>
      <div className="flex-wrap bg-gray-700 border border-gray-500 p-2 mb-4 shadow-xl">
        <dl className="w-1/2 my-1">
          {currHeaders.map((header) => {
            return (
              <fieldset
                className="flex flex-1 gap-10 border-b border-gray-500 py-2"
                key={header[0]}
              >
                <dt className="header-label w-32">{header[0]}</dt>
                <dd>{header[1]}</dd>
              </fieldset>
            );
          })}
        </dl>
        <button
          className="focus:outline-none p-1 rounded-md text-gray-500 transition ease-in delay-50 hover:text-white"
          onClick={toggleHeaders}
        >
          {headers === currHeaders ? "Collapse" : "Expand"}
        </button>
      </div>
    </>
  );
}

export default PayloadHeaders;
