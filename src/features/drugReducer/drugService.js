import axios from "axios";

const API_URL = "https://sore-lime-goat-tam.cyclic.app/api/drugs";

// get all drugs
const getDrugs = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

//get one drug
const getOneDrug = async (_id) => {
  const response = await axios.get(`${API_URL}/${_id}`);

  return response.data;
};

const drugService = {
  getDrugs,
  getOneDrug,
};

export default drugService;
