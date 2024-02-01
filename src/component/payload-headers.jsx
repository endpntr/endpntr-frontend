function PayloadHeaders({ headers }) {
  return (
    <>
      <div id="headers">
        <dl>
          {headers.map((header) => {
            return (
              <fieldset key={header[0]}>
                <dt>{header[0]}</dt>
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
