export const addUser = (state = {}, action) => {
    switch (action.type) {
      case "ADD_USER_SUCCESS": {
        return { ...state, values: action.payload }
      }
      case "SIGNUP_WITH_JWT":
        return {
          ...state,
          values: action.payload
        }
      default: {
        return state
      }
    }
  }