import {} from "../actions";

const initialState = {
  tps: 0,
  suara: [
    {
      nama_paslon: "Tonny - Darityatno",
      no_urut: 1,
      gambar: "tabulasi_no_1.png",
      warna: "red",
      suara: "468",
    },
    {
      nama_paslon: "Nelson - Hendra",
      no_urut: 2,
      gambar: "tabulasi_no_2.png",
      warna: "green",
      suara: "5530",
    },
    {
      nama_paslon: "Hamdi - Tommy",
      no_urut: 3,
      gambar: "tabulasi_no_3.png",
      warna: "orange",
      suara: "542",
    },
    {
      nama_paslon: "Rustam - Diky",
      no_urut: 4,
      gambar: "tabulasi_no_4.png",
      warna: "navy",
      suara: "602",
    },
  ],
};

const Tabulasi = (state = initialState, action) => {
  switch (action.type) {
    // case CHECK_LOAD: {
    //   return {
    //     ...state,
    //   };
    // }

    default:
      return state;
  }
};

export default Tabulasi;
