import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product : [],
  cart : [],
  order : [],
  useremail : '',
  userpwd : '',
  auth : false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add : (state, item) => {    
      state.product.push(item.payload)
    },
    addcart : (state,item)=>{
        state.cart.push(item.payload)
    },
    addorder : (state,item)=>{
        state.order.push(item.payload)
    },
    removeorder : (state)=>{
        state.order.splice(0, state.order.length)
    },
    setuser : (state , user )=>{
      state.useremail = user.payload[0]
      state.userpwd = user.payload[1]
    },
    setauth : (state,auth) =>{
       state.auth = auth.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { add , addcart , addorder , removeorder , setuser , setauth } = counterSlice.actions

export default counterSlice.reducer