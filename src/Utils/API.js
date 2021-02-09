import axios from "axios";
const BASEURL = "http://localhost:3000/movies";

export default {
  search: async function(query) {
    return await axios.get(BASEURL).then(data => { return data});
  }
};
