import { dataConstants } from "../constants/data_constants";

const { GET_DATA } = dataConstants;

export const dataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, finalData: action.payload };
    default:
      return state;
  }
};

export const initialData = {
  finalData: {},
};
