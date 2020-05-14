import config from '../config';



const NoteApiService = {
  getNotes() {
    return fetch(`${config.API_ENDPOINT}/notes`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getNote(note_id) {
    return fetch(`${config.API_ENDPOINT}/notes/${note_id}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  deleteNote(note_id) {
    return fetch(`${config.API_ENDPOINT}/notes/${note_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .catch((err) => {
        console.log('error:', err);
      })
  },
  getFolderNotes(folder_id) {
    return fetch(`${config.API_ENDPOINT}/folders/${folder_id}/notes`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postNote(note_name, content, folder_id) {
    return fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        note_name,
        content,
        folder_id
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default NoteApiService;