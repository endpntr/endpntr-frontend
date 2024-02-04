import axios from "axios";
const PATH = "/api";

async function get(endpointHash, requestHash) {
  const response = await axios.get(`${PATH}/${endpointHash}/${requestHash}`);
  return response.data;
}

export default { get };
