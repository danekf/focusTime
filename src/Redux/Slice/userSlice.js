import  {createSlice} from '@reduxjs/toolkit';

const initialState = {
    state: {
        isFetching: false,
    },
    userInfo :{
      spotifyToken: ''
    }
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching : (state) => {
      state.state.isFetching = true;
    },
    setUser : (state, userInfo) => {
      state.userInfo = {...userInfo};
    },
    logout : (state) => {
      state.userInfo = {
        spotifyToken: ''
      }
    },
  }  
});

export const {
      setIsFetching,
      setUser,
      logout,
    } = userSlice.actions;


export default userSlice.reducer;