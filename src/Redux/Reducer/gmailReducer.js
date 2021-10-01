import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as React from 'react';
import axios from 'axios';

//----------- get Gmail--------------------------
export const GetGmailApi = createAsyncThunk('gmail/GetGmailApi', async () => {
  const res = await axios
    .get(`http://localhost:3001/User`)
    .then((res) => {
      console.log('.then ~ res Gmail', res);
      return res;
    })
    .catch((err) => {
      console.log('err', err);
    });
  return res.data;
});
//--------------Post Gmail ---------------------
export const PostGmailApi = createAsyncThunk('gmail/PostGmailApi', async (payload) => {
  await axios
    .post(`http://localhost:3001/User`, {
      email: payload.email,
      familyName: payload.familyName,
      givenName: payload.givenName,
      googleId: payload.googleId,
      imageUrl: payload.imageUrl,
      name: payload.name,
    })
    .then((res) => {
      console.log('.then ~ res post Gmail', res);
      return res;
    })
    .catch((err) => {
      console.log('err', err);
    });
});

export const gmailReducer = createSlice({
  name: 'gmail',
  initialState: {
    listUser: [],
  },
  reducers: {
    setListUser: async (state, action) => {
      state.listUser = action.payload;
    },
    addNewUser: (state, action) => {
      console.log('state, action', state, action);
      state.listUser.push(action.payload);
    },
    reset: (state) => {
      state.listUser = [];
    },
  },
  extraReducers: {
    [GetGmailApi.pending]: (state, action) => {},
    [GetGmailApi.fulfilled]: (state, action) => {
      state.listUser = action.payload;
    },
    [GetGmailApi.rejected]: (state, action) => {},


    [PostGmailApi.pending]: (state, action) => {
      console.log('PostGmailApi , pending',state, action )
    },
    [PostGmailApi.fulfilled]: (state, action) => {
      console.log('PostGmailApi , fulfilled',state, action )
    },
    [PostGmailApi.rejected]: (state, action) => {
      console.log('PostGmailApi , rejected',state, action )
    },
  },
});

export const {setListUser} =  gmailReducer.actions;

export default gmailReducer.reducer;
