import {createSlice}from '@reduxjs/toolkit'

const initialState={
    todo:[],
}

const TodoSlice=createSlice({
    name:"Todolist",
    initialState:initialState,
    reducers:{
        Addlist:(state,action)=>{
            state.todo.push(action.payload)
        },
        Delete:(state,action)=>{
            const Del =state.todo.filter((item,index)=>{
                return index !== action.payload
            })
            state.todo=Del
        },
        Removeall:(state,action)=>{
           
            const Del1 =state.todo.filter((item,index)=>{
                return index === action.payload
            })
            state.todo=Del1
        }

        }
    
})
export const {Addlist,Delete,Removeall}=TodoSlice.actions;

export default TodoSlice.reducer