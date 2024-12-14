import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the User type
interface User {
  id: string;
  Name: string;
  Email: string;
  Role: string;
  YearJoined: string;
  Status: "Active" | "Inactive";
}

// Initial state
interface UserState {
  users: User[];
  activeCount: number;
  inactiveCount: number;
  roleCounts:{[key:string]:number}
}

const initialState: UserState = {
  users: [
    // Your data here (import if needed)
  ],
  activeCount: 0,
  inactiveCount: 0,
  roleCounts:{}
};

// Slice definition
const analyticSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    calculateUserCounts: (state) => {
      state.activeCount = state.users.filter((user) => user.Status === "Active").length;
      state.inactiveCount = state.users.filter((user) => user.Status === "Inactive").length;
    },
    initializeUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },

    calculateRoleCounts:(state)=>{
        const counts:{[key:string]:number}={};
        state.users.forEach(user=>{
            counts[user.Role]=(counts[user.Role] || 0)+1;
        });
        state.roleCounts=counts;
    },
    resetAnalytics:()=>initialState,
  },
});

export const { calculateUserCounts, initializeUsers,calculateRoleCounts,resetAnalytics } = analyticSlice.actions;
export default analyticSlice.reducer;