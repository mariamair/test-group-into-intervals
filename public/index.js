/* eslint-disable jsdoc/require-jsdoc */
/**
 * The starting point of the front-end application.
 *
 * @author Maria Mair <mm225mz@stundent.lnu.se>
 * @version 0.0.1
 */

import { getAscendingIntervalsWithColors, getDescendingIntervalsWithColors } from '../group-into-intervals/src/index.js'

displayVariant1()
displayVariant2()
displayVariant3()
displayVariant4()
displayVariant5()

// Variant 1
function displayVariant1 () {
  const colorSchemeId = 4
  const input = [1, 3, 5]
  // const input = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3]
  const intervals = JSON.parse(getDescendingIntervalsWithColors(input, colorSchemeId))
  displayHeading('Variant 1')
  displayInputData(input)
  displayIntervals(intervals)
}

// Variant 2
function displayVariant2 () {
  const colorSchemeId = 3
  const inputVariant2 = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27]
  const intervalsVariant2 = JSON.parse(getAscendingIntervalsWithColors(inputVariant2, colorSchemeId))
  displayHeading('Variant 2')
  displayInputData(inputVariant2)
  displayIntervals(intervalsVariant2)
  createHistogram(intervalsVariant2)
}

// Variant 3
function displayVariant3 () {
  const colorSchemeId = 4
  const input64 = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 17, 12, 22, 27]
  const intervals = JSON.parse(getAscendingIntervalsWithColors(input64, colorSchemeId))
  displayHeading('Variant 3')
  displayHeading('Datamängd: ' + input64.length)
  displayInputData(input64)
  displayIntervals(intervals)
  // createHistogram(intervals)
}

// Variant 4
function displayVariant4 () {
  const colorSchemeId = 4
  const input255 = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 25, 23, 7, 8, 9, 2, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12]
  const intervals = JSON.parse(getAscendingIntervalsWithColors(input255, colorSchemeId))
  displayHeading('Variant 4')
  displayHeading('Datamängd: ' + input255.length)
  displayInputData(input255)
  displayIntervals(intervals)
  createHistogram(intervals)
}

// Variant 5, Long array
function displayVariant5 () {
  const colorSchemeId = 3
  const longArray = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 25, 23, 7, 8, 9, 2, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 25, 23, 7, 8, 9, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 25, 23, 7, 8, 9, 2, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 25, 23, 7, 8, 9, 2, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 25, 23, 7, 8, 9, 2, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 25, 23, 7, 8, 9, 2, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 25, 23, 7, 8, 9, 2, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5,8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 25, 23, 7, 8, 9, 2, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 25, 23, 7, 8, 9, 2, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27, 1, 3, -5, 8]
  const intervals = JSON.parse(getAscendingIntervalsWithColors(longArray, colorSchemeId))
  displayHeading('Variant 5')
  displayInputData(longArray)
  displayHeading('Datamängd: ' + longArray.length)
  displayIntervals(intervals, false)
}

function displayInputData (input) {
  const text = 'Input data'
  displayHeading(text)

  const inputElement = document.createElement('p')
  inputElement.textContent = convertDataPoints(input)
  document.querySelector('#container').appendChild(inputElement)
}

function displayIntervals (intervals, shouldDisplayDataPoints = true) {
  const text = 'Output as intervals'
  displayHeading(text)

  let intervalClone
  const intervalTemplate = document.querySelector('#interval')

  for (const interval of intervals) {
    intervalClone = intervalTemplate.content.cloneNode(true)

    displayColorSwatches(intervalClone, interval)

    displayBoundaries(intervalClone, interval)

    if (shouldDisplayDataPoints) {
      displayDataPoints(intervalClone, interval)
    }

    document.querySelector('#container').appendChild(intervalClone)
  }
}

function createHistogram (intervals) {
  const text = 'Output as histogram'
  displayHeading(text)

  let histogramClone
  const histogramTemplate = document.querySelector('#histogram')

  for (const interval of intervals) {
    histogramClone = histogramTemplate.content.cloneNode(true)

    displayHistogram(histogramClone, interval)

    displayBoundaries(histogramClone, interval)

    document.querySelector('#container').appendChild(histogramClone)
  }
}

function displayHistogram(clone, interval) {
  const swatch = clone.querySelector('.interval-swatch')
  swatch.style.backgroundColor = interval.color.hexValue
  swatch.style.width = 50 * getNumberOfDataPoints(interval.data) + 'px'
}

function displayHeading(text) {
  const heading = document.createElement('h2')
  heading.textContent = text
  document.querySelector('#container').appendChild(heading)
}

function displayColorSwatches(clone, interval) {
  const swatch = clone.querySelector('.interval-swatch')
  swatch.style.backgroundColor = interval.color.hexValue
}

function displayBoundaries (clone, interval) {
  const boundaries = clone.querySelector('.interval-boundaries')
  boundaries.textContent = interval.lowerBoundary + ' - ' + interval.upperBoundary
}

function displayDataPoints(clone, interval) {
  const dataPoints = clone.querySelector('.interval-datapoints')
  dataPoints.textContent = 'Data point(s): ' + convertDataPoints(interval.data)
}

// Converts the data points to a text string
function convertDataPoints (dataPoints) {
  let text = ''
  for (const [index, value] of dataPoints.entries()) {
    text += value
    if (index < dataPoints.length - 1) {
      text += ', '
    }
  }
  return text
}

function getNumberOfDataPoints (dataPoints) {
  return dataPoints.length
}
