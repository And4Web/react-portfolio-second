const initialState = {
  dropdownIsActive: false,
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case "TOGGLE-BUTTON":
      return {
        ...state,
        dropdownIsActive: !state.dropdownIsActive
      };
    default:
      return state;    
  }
}

export default reducer;