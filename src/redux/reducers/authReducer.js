const initialState = {
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "userIn":
      return {
        ...state,
        user: action.payload,
      };
    case "userOut":
      return {
        user: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default authReducer;
