/* eslint-disable no-sparse-arrays */
import { IntervalCreator } from '../group-into-intervals/src/IntervalCreator'
import { ColorSelector } from '../group-into-intervals/src/ColorSelector'
import { IntervalAndColorMatcher } from '../group-into-intervals/src/IntervalAndColorMatcher'

const colorSchemeId = 1
const inputArray = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3]
const sparseArray = [1, 3, -5, , , 8, 4, 12, 3]

const outputObject = [
  { lowerBoundary: -5, upperBoundary: -1, data: [-5, -2], color: { hexValue: '#be2020', rgbValue: 'rgb(190, 32, 32)' } },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4, 4], color: { hexValue: '#9a2964', rgbValue: 'rgb(154, 41, 100)' } },
  { lowerBoundary: 5, upperBoundary: 9, data: [5, 7, 8], color: { hexValue: '#7532a8', rgbValue: 'rgb(117, 50, 168)' } },
  { lowerBoundary: 10, upperBoundary: 14, data: [12], color: { hexValue: '#481acc', rgbValue: 'rgb(72, 26, 204)' } },
  { lowerBoundary: 15, upperBoundary: 19, data: [17], color: { hexValue: '#1a02f0', rgbValue: 'rgb(26, 2, 240)' } }
]
const outputObjectSparseArray = [
  { lowerBoundary: -5, upperBoundary: -1, data: [-5], color: { hexValue: '#be2020', rgbValue: 'rgb(190, 32, 32)' } },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4], color: { hexValue: '#9a2964', rgbValue: 'rgb(154, 41, 100)' } },
  { lowerBoundary: 5, upperBoundary: 9, data: [8], color: { hexValue: '#7532a8', rgbValue: 'rgb(117, 50, 168)' } },
  { lowerBoundary: 10, upperBoundary: 14, data: [12], color: { hexValue: '#481acc', rgbValue: 'rgb(72, 26, 204)' } }
]

const outputObjectGreenColors = [
  { lowerBoundary: -5, upperBoundary: -1, data: [-5, -2], color: { hexValue: '#ffffff', rgbValue: 'rgb(255, 255, 255)' } },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4, 4], color: { hexValue: '#afe09c', rgbValue: 'rgb(175, 224, 156)' } },
  { lowerBoundary: 5, upperBoundary: 9, data: [5, 7, 8], color: { hexValue: '#5ec138', rgbValue: 'rgb(94, 193, 56)' } },
  { lowerBoundary: 10, upperBoundary: 14, data: [12], color: { hexValue: '#4c972f', rgbValue: 'rgb(76, 151, 47)' } },
  { lowerBoundary: 15, upperBoundary: 19, data: [17], color: { hexValue: '#3a6d25', rgbValue: 'rgb(58, 109, 37)' } }
]

describe('Group input data into intervals with colors', () => {
  test('should return correct intervals with colors', () => {
    const intervalCreator = new IntervalCreator(inputArray)
    const intervals = intervalCreator.getIntervals()
    const numberOfIntervals = intervalCreator.getIntervalMetadata().numberOfIntervals
    const colorMatcher = new IntervalAndColorMatcher(colorSchemeId, intervals, numberOfIntervals)
    expect(colorMatcher.addColorToIntervals()).toStrictEqual(outputObject)
  })

  test('should return correct intervals with colors for sparse array with uneven number of intervals', () => {
    const intervalCreator = new IntervalCreator(sparseArray)
    const intervals = intervalCreator.getIntervals()
    const numberOfIntervals = intervalCreator.getIntervalMetadata().numberOfIntervals
    const colorMatcher = new IntervalAndColorMatcher(colorSchemeId, intervals, numberOfIntervals)
    expect(colorMatcher.addColorToIntervals()).toStrictEqual(outputObjectSparseArray)
  })

  test('should use correct color scheme for intervals', () => {
    const intervalCreator = new IntervalCreator(inputArray)
    const intervals = intervalCreator.getIntervals()
    const numberOfIntervals = intervalCreator.getIntervalMetadata().numberOfIntervals
    const colorMatcher = new IntervalAndColorMatcher(colorSchemeId, intervals, numberOfIntervals)
    expect(colorMatcher.addColorToIntervals()).not.toStrictEqual(outputObjectGreenColors)
  })
})
