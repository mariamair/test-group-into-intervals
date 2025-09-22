/* eslint-disable no-sparse-arrays */
import { groupIntoIntervalsAscending, groupIntoIntervalsDescending, groupIntoIntervalsWithColorsAscending, groupIntoIntervalsWithColorsDescending, getIntervalMetadata } from '../group-into-intervals/src/index.js'

const colorSchemeId = 1

const inputArray = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3]
const outputObject = [
  { lowerBoundary: -5, upperBoundary: -1, data: [-5, -2] },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4, 4] },
  { lowerBoundary: 5, upperBoundary: 9, data: [5, 7, 8] },
  { lowerBoundary: 10, upperBoundary: 14, data: [12] },
  { lowerBoundary: 15, upperBoundary: 19, data: [17] }
]
const outputObjectWithColors = [
  { lowerBoundary: -5, upperBoundary: -1, data: [-5, -2], color: { hexValue: '#be2020', rgbValue: 'rgb(190, 32, 32)' } },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4, 4], color: { hexValue: '#9a2964', rgbValue: 'rgb(154, 41, 100)' } },
  { lowerBoundary: 5, upperBoundary: 9, data: [5, 7, 8], color: { hexValue: '#7532a8', rgbValue: 'rgb(117, 50, 168)' } },
  { lowerBoundary: 10, upperBoundary: 14, data: [12], color: { hexValue: '#481acc', rgbValue: 'rgb(72, 26, 204)' } },
  { lowerBoundary: 15, upperBoundary: 19, data: [17], color: { hexValue: '#1a02f0', rgbValue: 'rgb(26, 2, 240)' } }
]
const outputObjectDescending = [
  { upperBoundary: 17, lowerBoundary: 13, data: [17] },
  { upperBoundary: 12, lowerBoundary: 8, data: [12, 8] },
  { upperBoundary: 7, lowerBoundary: 3, data: [7, 5, 4, 4, 3, 3] },
  { upperBoundary: 2, lowerBoundary: -2, data: [1, -2] },
  { upperBoundary: -3, lowerBoundary: -7, data: [-5] }
]
const outputObjectDescendingWithColors = [
  { upperBoundary: 17, lowerBoundary: 13, data: [17], color: { hexValue: '#be2020', rgbValue: 'rgb(190, 32, 32)' } },
  { upperBoundary: 12, lowerBoundary: 8, data: [12, 8], color: { hexValue: '#9a2964', rgbValue: 'rgb(154, 41, 100)' } },
  { upperBoundary: 7, lowerBoundary: 3, data: [7, 5, 4, 4, 3, 3], color: { hexValue: '#7532a8', rgbValue: 'rgb(117, 50, 168)' } },
  { upperBoundary: 2, lowerBoundary: -2, data: [1, -2], color: { hexValue: '#481acc', rgbValue: 'rgb(72, 26, 204)' } },
  { upperBoundary: -3, lowerBoundary: -7, data: [-5], color: { hexValue: '#1a02f0', rgbValue: 'rgb(26, 2, 240)' } }
]

const outputObjectGreenColors = [
  { lowerBoundary: -5, upperBoundary: -1, data: [-5, -2], color: { hexValue: '#ffffff', rgbValue: 'rgb(255, 255, 255)' } },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4, 4], color: { hexValue: '#afe09c', rgbValue: 'rgb(175, 224, 156)' } },
  { lowerBoundary: 5, upperBoundary: 9, data: [5, 7, 8], color: { hexValue: '#5ec138', rgbValue: 'rgb(94, 193, 56)' } },
  { lowerBoundary: 10, upperBoundary: 14, data: [12], color: { hexValue: '#4c972f', rgbValue: 'rgb(76, 151, 47)' } },
  { lowerBoundary: 15, upperBoundary: 19, data: [17], color: { hexValue: '#3a6d25', rgbValue: 'rgb(58, 109, 37)' } }
]

const metadataOutput = { minValue: -5, maxValue: 17, range: 22, numberOfIntervals: 5, intervalWidth: 5 }

const sparseArray = [1, 3, -5, , , 8, 4, 12, 3]
const outputObjectSparseArray = [
  { lowerBoundary: -5, upperBoundary: -1, data: [-5] },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4] },
  { lowerBoundary: 5, upperBoundary: 9, data: [8] },
  { lowerBoundary: 10, upperBoundary: 14, data: [12] }
]
const outputObjectWithColorsSparseArray = [
  { lowerBoundary: -5, upperBoundary: -1, data: [-5], color: { hexValue: '#be2020', rgbValue: 'rgb(190, 32, 32)' } },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4], color: { hexValue: '#9a2964', rgbValue: 'rgb(154, 41, 100)' } },
  { lowerBoundary: 5, upperBoundary: 9, data: [8], color: { hexValue: '#7532a8', rgbValue: 'rgb(117, 50, 168)' } },
  { lowerBoundary: 10, upperBoundary: 14, data: [12], color: { hexValue: '#481acc', rgbValue: 'rgb(72, 26, 204)' } }
]

describe('Group input data into intervals', () => {
  test('should return ascending intervals', () => {
    expect(groupIntoIntervalsAscending(inputArray)).toStrictEqual(outputObject)
  })

  test('should return ascending intervals without empty slots for sparse array', () => {
    expect(groupIntoIntervalsAscending(sparseArray)).toStrictEqual(outputObjectSparseArray)
  })

  test('should return descending intervals', () => {
    expect(groupIntoIntervalsDescending(inputArray, false)).toStrictEqual(outputObjectDescending)
  })
})

describe('Group input data into intervals with colors', () => {
  test('should return correct intervals with colors', () => {
    expect(groupIntoIntervalsWithColorsAscending(inputArray, colorSchemeId)).toStrictEqual(outputObjectWithColors)
  })

  test('should return correct intervals with colors for sparse array with uneven number of intervals', () => {
    expect(groupIntoIntervalsWithColorsAscending(sparseArray, colorSchemeId)).toStrictEqual(outputObjectWithColorsSparseArray)
  })

  test('should return correct descending intervals with colors', () => {
    expect(groupIntoIntervalsWithColorsDescending(inputArray, colorSchemeId)).toStrictEqual(outputObjectDescendingWithColors)
  })

  test('should use correct color scheme for intervals', () => {
    expect(groupIntoIntervalsWithColorsAscending(inputArray, colorSchemeId)).not.toStrictEqual(outputObjectGreenColors)
  })

  test('should return error message for incorrect color scheme id', () => {
    expect(groupIntoIntervalsWithColorsAscending(inputArray, 2345)).toEqual(JSON.stringify('Not a valid color scheme'))
  })

  test('should return correct metadata', () => {
    expect(getIntervalMetadata(inputArray, false)).toEqual(metadataOutput)
  })
})
