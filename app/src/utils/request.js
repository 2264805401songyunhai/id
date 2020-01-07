import axios from 'axios'



export function post(url, payload = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: payload
    })
      .then(response => {
        const data = response.data
        if (data.code === 200) {
          resolve(data)

        } else {
          reject(data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function get(url, payload = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      params: payload
    })
      .then(response => {
        const data = response.data
        if (data.code === 200) {
          resolve(data.data)

        } else {
          // reject(data) 
        }
      })
      .catch(err => {
        // reject(err)
      })
  })
}