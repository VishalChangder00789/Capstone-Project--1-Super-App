import { createSlice } from "@reduxjs/toolkit";

const InputSlice = createSlice({
  name: "inputs",
  initialState: {
    name: "Bishal ",
    username: "bishal",
    email: "123123213",
    mobile: "123123132",
  },

  reducers: {
    addData(state, action) {
      let newObj = {
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
        mobile: action.payload.phone,
      };

      Object.assign(state, newObj);
    },

    removeData() {},

    getData() {},
  },
});

export default InputSlice;
export const { addData, removeData, getData } = InputSlice.actions;
