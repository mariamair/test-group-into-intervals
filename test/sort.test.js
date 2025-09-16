/* eslint-disable no-sparse-arrays */
import { IntervalCreator } from '../group-into-intervals/src/IntervalCreator'

const shortArray = [1, 3, -5, 17, 3]
const sparseArray = [1, 3, -5, , , 8, 4, 12, 3]

describe('Sort input array', () => {
  test('sort short array ascending when ascending true', () => {
    const intervalCreator = new IntervalCreator(shortArray)
    expect(intervalCreator.getSortedArray()).toStrictEqual([-5, 1, 3, 3, 17])
  })

  test('sort sparse array ascending and remove empty slots when ascending true', () => {
    const intervalCreator = new IntervalCreator(sparseArray)
    expect(intervalCreator.getSortedArray()).toStrictEqual([-5, 1, 3, 3, 4, 8, 12])
  })

  test('sort short array descending when ascending false', () => {
    const intervalCreator = new IntervalCreator(shortArray, false)
    expect(intervalCreator.getSortedArray()).toStrictEqual([17, 3, 3, 1, -5])
  })

  test('sort sparse array descending and remove empty slots when ascending false', () => {
    const intervalCreator = new IntervalCreator(sparseArray, false)
    expect(intervalCreator.getSortedArray()).toStrictEqual([12, 8, 4, 3, 3, 1, -5])
  })
})
