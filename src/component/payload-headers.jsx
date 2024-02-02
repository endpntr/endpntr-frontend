function PayloadHeaders({ headers }) {
  return (
    <>
      <div id="headers flex-wrap">
        <dl className="pb-5">
          {headers.map((header) => {
            return (
              <fieldset className="flex flex-1 gap-10" key={header[0]}>
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
