export const postAddUser = (userData) => {
    return dispatch => {
        fetch("/api/adduser", {
            method: 'post',
            body: userData
        })
          .then(response => {
            if (response.StatusText === 'SUCCESS') {
              dispatch({
                type: "ADD_USER_SUCCESS",
                payload: response.Data
              })
            }
          })
          .catch(err => console.log(err))
      }
  }