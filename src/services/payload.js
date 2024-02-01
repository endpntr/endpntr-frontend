import axios from "axios";
const PATH = "/req";

async function get(endpointHash, requestHash) {
  const response = await axios.get(`${PATH}/${endpointHash}/${requestHash}`);
  return response.data;
}

export default { get };
