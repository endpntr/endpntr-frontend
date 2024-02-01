import axios from "axios";
const PATH = "/api/createEndpoint";

async function create() {
  const response = await axios.post(PATH);
  return response.data;
}

export default { create };
