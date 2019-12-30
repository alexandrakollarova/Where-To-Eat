import TokenService from './token-service';
import config from '../config';

const AuthApiService = {
    postUser(user) { 
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(user)
        })
        .then(res =>  
            (!res.ok) 
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(res => {          
          // whenever a login is performed save the token in local storage
          TokenService.saveAuthToken(res.authToken)
          return res
        })
    },

    postLogin(credentials) { 
        return fetch(`${config.API_ENDPOINT}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials)
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))  
              : res.json()
          )
           .then(res => {       
            // whenever a login is performed save the token in local storage
            TokenService.saveAuthToken(res.authToken)
            return res
          })
      },
}
    
export default AuthApiService
