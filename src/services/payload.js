import axios from "axios";
const PATH = "/req";

async function get(documentId) {
  const response = await axios.get(PATH + "/" + documentId);
  return response;
}

export default { get };
