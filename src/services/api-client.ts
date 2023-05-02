import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ccddd8eccb34499d894002aa68a7e033'
  }
})