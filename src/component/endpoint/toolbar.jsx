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
    <div className="flex lg:flex-row flex-col gap-5 justify-between py-5 w-full">
      <h2 className="place-self-center text-xl">Dashboard</h2>
      <div className="flex justify-end gap-5 flex-col md:flex-row border-0 border-gray-200 dark:border-gray-800">
        <div>
          <div
            className="p-2 bg-gray-500 inline-block rounded-l-lg cursor-pointer hover:bg-gray-700"
            onClick={() => copyToClipboard(endpointURL)}
          >
            <button className="focus:outline-none">Copy</button>
          </div>
          <span className="inline-block bg-white text-gray-900 p-2 md:w-fit w-4/5">
            {endpointURL}
          </span>
        </div>
        <NewEndpointBtn />
      </div>
    </div>
  );
}

export default Toolbar;
