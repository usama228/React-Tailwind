import {createSlice} from '@reduxjs/toolkit';
const initialState =
{
    users : [],
};
const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers :
        {
            addUser : (state,action)=> {
                state.users.push(action.payload)
            },
            updateUser: (state, action) => {
  const index = state.users.findIndex(user => user.email === action.payload.oldEmail);
  if (index !== -1) {
    state.users[index] = {
      name: action.payload.name,
      email: action.payload.email,
    };
  }
}
,
            deleteUser : (state,action)=>
            {
                const index=state.users.findIndex(user=>user.name===action.payload.name);
                if(index!==-1)
                {
                    state.users.splice(index,1);
                }
            }
        }
    }

)
export const {addUser,updateUser,deleteUser}=userSlice.actions;
export default userSlice.reducer;