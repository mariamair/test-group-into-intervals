import { IntervalCreator } from '../group-into-intervals/src/IntervalCreator'

const inputArray = [1, 3, -5, 7, 8, 4, 17, 12, 3]

const intervalCreator = new IntervalCreator(inputArray)

describe('Calculate interval metadata', () => {
  test('calculate minimum value for ascending array', () => {
    expect(intervalCreator.getIntervalMetadata().minValue).toBe(-5)
  })

  test('calculate maximum value for ascending array', () => {
    expect(intervalCreator.getIntervalMetadata().maxValue).toBe(17)
  })

  test('calculate minimum value for descending array', () => {
    const intervalCreator = new IntervalCreator(inputArray, false)
    expect(intervalCreator.getIntervalMetadata().minValue).toBe(-5)
  })

  test('calculate maximum value for descending array', () => {
    const intervalCreator = new IntervalCreator(inputArray, false)
    expect(intervalCreator.getIntervalMetadata().maxValue).toBe(17)
  })

  test('calculate range', () => {
    const range = intervalCreator.getIntervalMetadata().range
    expect(range).toBe(22)
  })

  test('number of intervals corresponds to number of data points', () => {
    const numberOfIntervals = intervalCreator.getIntervalMetadata().numberOfIntervals
    expect(numberOfIntervals).toBe(4)
  })

  test('interval width corresponds to range and number of intervals', () => {
    const intervalWidth = intervalCreator.getIntervalMetadata().intervalWidth
    expect(intervalWidth).toBe(6)
  })
})
