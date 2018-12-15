/* @flow */

import Obniz from 'obniz'
import Firebase from './firebase'
// import { press2weight } from './weight'
import * as calculation from './calculation'

const obniz = new Obniz('6201-0563')
const fb = new Firebase()

// 起動
obniz.connect()
obniz.onconnect = async () => {
  // obniz.onconnect = async function() {
  // obniz.display.clear()
  // obniz.display.print('Hello World')

  // 圧力センサー
  // https://obniz.io/sdk/parts/FSR-40X/README.md?iframe=false
  const pressure = obniz.wired('FSR40X', { pin0: 0, pin1: 11 })
  // const pressure = obniz.wired('FSR40X', { pin0: 0, pin1: 11, gnd: 11 })

  // 圧力センサの値を一度だけ取得
  const measure = async () => {
    var press = await pressure.getWait()
    obniz.display.clear()
    obniz.display.print(`press:${press}`)
    console.log(`press:${press}`)

    // 体重
    const weight = calculation.press2weight(press)
    console.log(`weight:${weight}`)

    // 割合
    const percent = calculation.weight2percent(weight)
    console.log(`percent:${percent}`)
    console.log('--------')

    // firebaseにデータを登録
    fb.update(weight, percent)
    press = 0
  }
  setInterval(measure, 5000)

  // 圧力センサの値に変化があった場合
  // pressure.onchange = press => {
  //   console.log(press)
  // }
}
