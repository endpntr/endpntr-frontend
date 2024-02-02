import { useParams } from "react-router-dom";

function PayloadPlaceholder() {
  const { endpointHash } = useParams();
  return (
    <div className="text-left text-l m-3">
      <pre className="text-gray-500">
        {JSON.stringify(
          {
            example: {
              headers: { "Content-Type": "application/json" },
              body: { stuff: "stuff" },
            },
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
}

export default PayloadPlaceholder;
