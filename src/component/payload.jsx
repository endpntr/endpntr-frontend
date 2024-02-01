import PayloadBody from "./payload-body";
import PayloadHeaders from "./payload-headers";

function Payload({ payload }) {
  if (!payload.body || !payload.headers) {
    return null;
  }

  const headers = Object.entries(payload.headers);

  return (
    <>
      <PayloadHeaders headers={headers} />
      <PayloadBody body={payload.body} />
    </>
  );
}

export default Payload;
