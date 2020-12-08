import { GET_TPS, GET_SUARA, GET_TOTAL_SUARA } from "../actions";

const initialState = {
  tps: 0,
  suara: null,
  total: null,
};

const Tabulasi = (state = initialState, action) => {
  switch (action.type) {
    case GET_TPS: {
      return {
        ...state,
        tps: action.data,
      };
    }

    case GET_SUARA: {
      return {
        ...state,
        suara: action.data,
      };
    }

    case GET_TOTAL_SUARA: {
      return {
        ...state,
        total: action.data,
      };
    }

    default:
      return state;
  }
};

export default Tabulasi;
