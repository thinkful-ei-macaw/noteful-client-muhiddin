import config from '../config'

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
  },
  getFolderNotes(folder_id) {
    return fetch(`${config.API_ENDPOINT}/folders/${folder_id}/notes`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  addNote(name, modified, folder_id, content) {
    return fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        modified,
        folder_id,
        content
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