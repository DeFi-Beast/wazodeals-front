export const rootReducer = (state = [], action) => {
  // When the app loads this would check for the state, which is undefined, so set it to null in the argument.
  switch (action.type) {
    case "REDIRECT":
      return [
        ...state,
        {
          email:action.payload
        }
      ];
    
    default:
      return state;
  }
}
