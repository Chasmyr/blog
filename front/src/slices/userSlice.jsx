import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userInfo: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo: (state,action) => {
            return {
                ...state,
                userInfo: 
                    action.payload
            }
        }
    }
})

export const {actions, reducer} = userSlice

export const {setUserInfo} = actions