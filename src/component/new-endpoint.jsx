import EndpointService from "../services/endpoint";
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
  return <button onClick={handleNewEndpoint}>New Endpoint</button>;
}

export default NewEndpointBtn;
