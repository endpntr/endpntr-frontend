import EndpointService from "../../services/endpoint";
import { useNavigate } from "react-router-dom";

function NewEndpointBtn() {
  const navigate = useNavigate();
  const handleNewEndpoint = async () => {
    try {
      const endpointHash = await EndpointService.create();
      if (!endpointHash) new Error("Could not create endpoint");
      navigate(`/${endpointHash}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      className="rounded-md w-fit border border-transparent p-2 text-base font-semibold bg-gray-800 cursor-pointer transition duration-250 hover:border-gray-500 hover:bg-gray-900"
      onClick={handleNewEndpoint}
    >
      New Endpoint
    </button>
  );
}

export default NewEndpointBtn;
