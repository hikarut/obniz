/* @flow */

import * as admin from 'firebase-admin'
import firebase from 'firebase'
import serviceAccount from '../config/private.json'

const database = 'hackday2018-4f9ca'
// const database = 'hackday2018-35675'
const key = 'hackday'

class Firebase {
  /**
   * コンストラクタ
   */
  constructor() {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://${database}.firebaseio.com`
      })
      const config = {
        // apiKey: '<API_KEY>',
        // authDomain: '<PROJECT_ID>.firebaseapp.com',
        // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
        databaseURL: `https://${database}.firebaseio.com`
        // storageBucket: '<BUCKET>.appspot.com'
      }
      firebase.initializeApp(config)
    } catch (e) {
      console.log(e.message)
    }
  }

  /**
   * データの更新
   * @param {number} value 重さ
   */
  update(weight: number, percent: number) {
    const db = admin.database()
    const ref = db.ref(key)
    try {
      // 重さと割合を登録
      const json = {
        device100: {
          // name: 'hikaru',
          ratio: percent,
          weight: weight
        }
      }

      ref.update(json)
    } catch (e) {
      console.log(e.message)
    }
  }
}

export default Firebase
