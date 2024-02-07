import NewEndpointBtn from "../general/new-endpoint";

function Toolbar({ endpointHash }) {
  const { hostname, protocol, port } = window.location;
  const endpointURL = `${protocol}//${hostname}${port ? `:${port}` : ""}/api/req/${endpointHash}`;

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${text} copied to clipboard`);
    } catch (error) {
      alert("Error: Could not copy to clipboard");
    }
  };

  return (
    <div className="flex justify-end gap-5 flex-col md:flex-row py-5 px-8 border-0 border-gray-200 dark:border-gray-800">
      <div>
        <div
          className="p-2 bg-gray-500 inline-block rounded-l-lg cursor-pointer hover:bg-gray-700"
          onClick={() => copyToClipboard(endpointURL)}
        >
          Copy
        </div>
        <span className="inline-block bg-white text-gray-900 p-2 md:w-fit w-4/5">
          {endpointURL}
        </span>
      </div>
      <NewEndpointBtn />
    </div>
  );
}

export default Toolbar;
