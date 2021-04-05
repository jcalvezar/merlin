import { SET_DATA } from "./actionTypes";

const initialState = {
  data: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA: {
      const { data } = action.payload;
      return { data: [...data] };
    }
    default:
      return state;
  }
}
