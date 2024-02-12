import { ScaleLoader } from "react-spinners";
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
      <div className="flex gap-3 xl:place-self-end place-self-center place-items-center text-xl">
        <h2>Listening</h2>
        <ScaleLoader color="white" height={20} width={2} className="self-end" />
      </div>
      <div className="flex justify-end gap-5 flex-col md:flex-row border-0 border-gray-200 dark:border-gray-800">
        <div>
          <div
            className="p-2 bg-gray-500 inline-block rounded-l-lg cursor-pointer transition ease-out delay-50 hover:bg-gray-700"
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
