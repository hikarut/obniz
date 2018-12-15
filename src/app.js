/* @flow */

import Obniz from 'obniz'
import Firebase from './firebase'

var obniz = new Obniz('6201-0563')
obniz.onconnect = async function() {
  // var led = obniz.wired('LED', { anode: 0, cathode: 1 })

  obniz.display.clear()
  obniz.display.print('Hello World')

  // firebaseにデータを登録
  const fb = new Firebase()
  fb.update(5)
}
