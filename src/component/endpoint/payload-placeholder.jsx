function PayloadPlaceholder() {
  return (
    <div className="text-left text-l m-3">
      <pre className="text-gray-500">
        {JSON.stringify(
          {
            payload: {
              headers: { "Content-Type": "application/json" },
              body: { desc: "Will be rendered here!" },
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
