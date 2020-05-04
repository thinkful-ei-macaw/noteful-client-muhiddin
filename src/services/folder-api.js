import config from '../config';

const FolderApiService = {
  getFolders() {
    return fetch(`${config.API_ENDPOINT}/folders`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getFolder(folder_id) {
    return fetch(`${config.API_ENDPOINT}/folders/${folder_id}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }, 

  postFolder(name) {
    return fetch(`${config.API_ENDPOINT}/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default FolderApiService;