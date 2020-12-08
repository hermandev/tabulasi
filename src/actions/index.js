import axios from "axios";
export const GET_TPS = "GET_TPS";
export const GET_SUARA = "GET_SUARA";
export const GET_TOTAL_SUARA = "GET_TOTAL_SUARA";

export const getTps = () => (dispatch) => {
  axios
    .get("http://35.225.229.8:3000/api/v1/app/tps")
    .then((res) => {
      dispatch({ type: GET_TPS, data: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSuara = () => (dispatch) => {
  axios
    .get("http://35.225.229.8:3000/api/v1/app/suara")
    .then((res) => {
      dispatch({ type: GET_SUARA, data: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTotalSuara = () => (dispatch) => {
  axios
    .get("http://35.225.229.8:3000/api/v1/app/totalsuara")
    .then((res) => {
      dispatch({type:GET_TOTAL_SUARA, data: res.data.suara})
    })
    .catch((err) => {
      console.log(err);
    });
};
