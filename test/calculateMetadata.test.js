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
    expect(intervalCreator.getIntervalMetadata().range).toBe(22)
  })

  test('number of intervals corresponds to number of data points', () => {
    expect(intervalCreator.getIntervalMetadata().numberOfIntervals).toBe(4)
  })

  test('interval width corresponds to range and number of intervals', () => {
    expect(intervalCreator.getIntervalMetadata().intervalWidth).toBe(6)
  })
})
