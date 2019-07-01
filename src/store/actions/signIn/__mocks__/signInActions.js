let fakeData = [
    {
      "id": 1,
      "email": "sergio4156@gmail.com",
      "password": "12345"
    }
]

export const signInApiCallToAuth = () => {
    return (dispatch, getState) => {
        return new Promise.resolve(fakeData)
    }
}