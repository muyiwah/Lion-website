import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: null,
    email: null,
    firstName: null,
    lastName: null,
}



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUsers: (state, action) => {
            state.userName = action.payload.userName;
            state.email = action.payload.userEmail;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        setUserLogout: (state) => {
            state.userName = null;
            state.email = null;
            state.firstName =null;
            state.lastName = null;
        },

    }
});

export const {setActiveUsers, setUserLogout} = userSlice.actions;

export const selectUserName = state => state.user.userName;
export const selectUserEmail = state => state.user.email;
export const selectFirstName = state => state.user.firstName;
export const selectLastName = state => state.user.lastName;

export default userSlice.reducer;