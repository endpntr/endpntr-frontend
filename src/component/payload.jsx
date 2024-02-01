import PayloadBody from "./payload-body";
import PayloadHeaders from "./payload-headers";

function Payload() {
  const payload = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YourAccessToken",
      "User-Agent": "MockUserAgent",
    },
    body: {
      event: "mock_event",
      data: {
        key1: "value1",
        key2: "value2",
        key3: "value3",
      },
    },
  };

  const headers = Object.entries(payload.headers);

  return (
    <>
      <PayloadHeaders headers={headers} />
      <PayloadBody body={payload.body} />
    </>
  );
}

export default Payload;
