import Obniz from 'obniz'

var obniz = new Obniz('6201-0563')
obniz.onconnect = async function() {
  // var led = obniz.wired('LED', { anode: 0, cathode: 1 })

  obniz.display.clear()
  obniz.display.print('Hello World')
}
