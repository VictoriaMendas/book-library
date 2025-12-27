// src/redux/operations.js

export const addBook = createAsyncThunk(
  "books/addBook",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/books", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
