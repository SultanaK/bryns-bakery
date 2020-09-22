import config from '../config/config'

const AuthService = {
    postLogin(credentials) {
        const url = config.API_ENDPOINT + '/login'
        const options = {  
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        }

        return fetch(url, options)
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
  
}

export default AuthService