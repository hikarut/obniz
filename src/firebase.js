/* @flow */

// import firebase from 'firebase'
import * as admin from 'firebase-admin'
import serviceAccount from '../config/private.json'

const database = 'hackday2018-35675'
const key = 'weight'

class Firebase {
  constructor() {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://${database}.firebaseio.com`
      })
      console.log(admin)
      console.log(admin.name)
    } catch (e) {
      console.log(e.message)
    }
  }

  update(value: number) {
    const db = admin.database()
    const ref = db.ref(key)
    try {
      ref.update({ value: value, ration: 50 })
    } catch (e) {
      console.log(e.message)
    }
  }
}

export default Firebase
