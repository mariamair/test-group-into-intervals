/* eslint-disable no-sparse-arrays */
import { IntervalCreator } from '../group-into-intervals/src/IntervalCreator'

const inputArray = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3]
const sparseArray = [1, 3, -5, , , 8, 4, 12, 3]
const outputObject = [
  { lowerBoundary: -5, upperBoundary: -1, data: [-5, -2] },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4, 4] },
  { lowerBoundary: 5, upperBoundary: 9, data: [5, 7, 8] },
  { lowerBoundary: 10, upperBoundary: 14, data: [12] },
  { lowerBoundary: 15, upperBoundary: 19, data: [17] }
]
const outputObjectSparseArray = [
  { lowerBoundary: -5, upperBoundary: -1, data: [-5] },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4] },
  { lowerBoundary: 5, upperBoundary: 9, data: [8] },
  { lowerBoundary: 10, upperBoundary: 14, data: [12] }
]

describe('Group input data into intervals', () => {
  test('should return correct intervals', () => {
    const intervalCreator = new IntervalCreator(inputArray)
    expect(intervalCreator.getIntervals()).toEqual(outputObject)
  })

  test('should return correct intervals for sparse array', () => {
    const intervalCreator = new IntervalCreator(sparseArray)
    expect(intervalCreator.getIntervals()).toEqual(outputObjectSparseArray)
  })

  test('interval width is adjusted to range', () => {
    const intervalCreator = new IntervalCreator(inputArray)
    const range = intervalCreator.getIntervalMetadata().range
    const numberOfIntervals = intervalCreator.getIntervalMetadata().numberOfIntervals
    const intervalWidth = intervalCreator.getIntervalMetadata().intervalWidth
    expect(numberOfIntervals * intervalWidth).toBeGreaterThan(range)
  })
})
