function PayloadHeaders({ headers }) {
  return (
    <>
      <div className="flex-wrap bg-gray-700 border border-gray-500 p-2 mb-4 shadow-xl">
        <dl className="w-1/2">
          {headers.map((header) => {
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
      </div>
    </>
  );
}

export default PayloadHeaders;
