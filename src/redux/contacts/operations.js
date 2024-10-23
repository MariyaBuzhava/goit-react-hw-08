import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      toast.success("Contact added successfully");
      return response.data;
    } catch (e) {
      toast.error("Failed to add contact");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      toast.success("Contact deleted successfully");
      return response.data;
    } catch (e) {
      toast.error("Failed to delete contact");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, updates }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, updates);
      toast.success("Contact updated successfully");
      return data;
    } catch (error) {
      toast.error("Failed to update contact");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
