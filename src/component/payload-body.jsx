function PayloadBody({ body }) {
  return (
    <div id="body">
      <code>{JSON.stringify(body)}</code>
    </div>
  );
}

export default PayloadBody;
