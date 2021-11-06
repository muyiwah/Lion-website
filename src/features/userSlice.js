import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: null,
    userEmail: null,
    firstName: null,
    lastName: null,
}



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        setUserLogout: (state) => {
            state.userName = null;
            state.userEmail = null;
            state.firstName =null;
            state.lastName = null;
        },

    }
});

export const {setActiveUser, setUserLogout} = userSlice.actions;

export const selectUserName = state => state.user.userName;
export const selectUserEmail = state => state.user.userEmail;
export const selectFirstName = state => state.user.firstName;
export const selectLastName = state => state.user.lastName;

export default userSlice.reducer;