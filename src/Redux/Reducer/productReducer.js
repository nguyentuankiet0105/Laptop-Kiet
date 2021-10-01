import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as React from "react";
import axios from "axios";

//------ API Laptop data-----
export const getApiDataLaptop = createAsyncThunk(
  "product/getApiDataLaptop",
  async () => {
    const res = await axios
      .get(`http://localhost:3001/Laptop`)
      .then((res) => {
        console.log(".then ~ res Laptop", res);
        return res;
      })
      .catch((err) => {
        console.log("err", err);
      });
    return res.data;
  }
);

//------ API CPU data-----
export const getApiDataCPU = createAsyncThunk(
  "product/getApiDataCPU",
  async () => {
    const res = await axios
      .get(`http://localhost:3001/CPU`)
      .then((res) => {
        console.log(".then ~ res CPU", res);
        return res;
      })
      .catch((err) => {
        console.log("err", err);
      });
    return res.data;
  }
);

//------ API Screens data-----
export const getApiDataScreen = createAsyncThunk(
  "product/getApiDataScreen",
  async () => {
    const res = await axios
      .get(`http://localhost:3001/Screens`)
      .then((res) => {
        console.log(".then ~ res Screen", res);
        return res;
      })
      .catch((err) => {
        console.log("err", err);
      });
    return res.data;
  }
);

export const productReducer = createSlice({
  name: "product",
  initialState: {
    listProductLaptop: [],
    listProductCPU: [],
    listProductScreen: [],
  },
  reducers: {
    setListProductLaptop: async (state, action) => {
      state.listProductLaptop = action.payload;
    },
    setListProductCPU: async (state, action) => {
      state.listProductCPU = action.payload;
    },
    setListProductScreen: async (state, action) => {
      state.listProductScreen = action.payload;
    },
  },
  extraReducers: {
    [getApiDataLaptop.pending]: (state, action) => {},
    [getApiDataLaptop.fulfilled]: (state, action) => {
      state.listProductLaptop = action.payload;
    },
    [getApiDataLaptop.rejected]: (state, action) => {},

    [getApiDataCPU.pending]: (state, action) => {},
    [getApiDataCPU.fulfilled]: (state, action) => {
      state.listProductCPU = action.payload;
    },
    [getApiDataCPU.rejected]: (state, action) => {},

    [getApiDataScreen.pending]: (state, action) => {},
    [getApiDataScreen.fulfilled]: (state, action) => {
      state.listProductScreen = action.payload;
    },
    [getApiDataScreen.rejected]: (state, action) => {},
  },
});

export const { setListProductLaptop, setListProductCPU, setListProductScreen } =  productReducer.actions;

export default productReducer.reducer;
