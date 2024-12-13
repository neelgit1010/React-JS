import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    pastes: localStorage.getItem('pastes') 
    ? JSON.parse(localStorage.getItem('pastes')) 
    : []
}

export const pasteReducer = createSlice({
    name: 'paste',
    initialState,
    reducers:{
        addPaste: (state, action) => {
           const paste = action.payload
           paste.title = paste.title.trim()
           paste.textContent = paste.textContent.trim()
           state.pastes.push(paste)
           localStorage.setItem('pastes', JSON.stringify(state.pastes))
        },
        deletePaste: (state, action) => {        
            const idToDelete = action.payload;
            state.pastes = state.pastes.filter(paste => paste._id !== idToDelete);
            localStorage.setItem('pastes', JSON.stringify(state.pastes));
            toast.success('Paste deleted successfully!')
        },
        
        updatePaste: (state, action) => {
            const paste = action.payload
            paste.title = paste.title.trim()
            paste.textContent = paste.textContent.trim()
            const index = state.pastes.findIndex(p => p._id === paste._id)
            state.pastes[index] = paste
            localStorage.setItem('pastes', JSON.stringify(state.pastes))
        },
        deleteAllPastes: (state) => {
            state.pastes = []
            localStorage.removeItem('pastes')
        }
    }
})

export const { addPaste, deletePaste, updatePaste } = pasteReducer.actions
export default pasteReducer.reducer