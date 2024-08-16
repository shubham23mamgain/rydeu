import axios from "axios";

export const baseURL = "https://new-api-staging.rydeu.com/";

const client = axios.create({ baseURL });

export default client;
