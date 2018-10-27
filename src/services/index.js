const scheme = 'https://reqres.in/api/';

const _101 = 'Unable to get current user!'
const _102 = 'Unable to get access token!'
const _103 = 'Unable to fetch users!'

export const NetworkService = {
  signup (payload) {
    return new Promise((resolve, reject) => {
      let url = scheme + 'register'
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': access_token,
        }
      })
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        resolve(responseJson)
      })
      .catch (error => {
        console.log('Error in accounts search:', error)
        reject(_105)
      });
    })
  },
  getUsersList (payload) {
    return new Promise((resolve, reject) => {
      let url = scheme + 'users'
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        resolve(responseJson.data)
      })
      .catch (error => {
        console.log('Error in fetch users:', error)
        reject(_103)
      });
    })
  }
}
