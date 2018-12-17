/* @flow */

/**
 * 圧力から重さへの変換
 *
 * @param {number} press 圧力
 * @return {number} weight 重さ
 */
export function press2weight(press: number): number {
  const defaultPress = 0
  // const area = 18.5955
  const area = 8.834
  const gravity = 9.8
  return ((press - defaultPress) * area) / gravity
}

/**
 * 重さから割合の変換
 *
 * @param {number} weight 重さ
 * @return {number} percent 割合
 */
export function weight2percent(weight: number): number {
  const fullWeight = 480
  return Math.round((weight / fullWeight) * 100)
}
