import axios from "axios";

const PATH = "/api/req";

async function getAll(endpointHash) {
  const result = await axios.get(PATH + "/" + endpointHash);
  return result.data;
}

export default {
  getAll,
};
