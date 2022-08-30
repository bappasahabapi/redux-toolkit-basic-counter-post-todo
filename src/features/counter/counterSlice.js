const { createSlice } = require("@reduxjs/toolkit");

export  const counterSlice= createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        increment:(state)=>{
            state.count +=1;
        },
        decrement:(state)=>{
            if(state.count===0) {
                return state
            }
            else{
                state.count -=1;
            }
           
        },
        reset:(state)=>{
            
            state.count =0;
        }
    },
});

export default counterSlice.reducer;
export const {increment,decrement,reset}=counterSlice.actions;
