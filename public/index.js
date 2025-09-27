/**
 * The starting point of the front-end application.
 *
 * @author Maria Mair <mm225mz@stundent.lnu.se>
 * @version 0.0.1
 */

import { groupIntoIntervalsWithColorsAscending, groupIntoIntervalsWithColorsDescending } from '../group-into-intervals/src/index.js'

// Variant 1
const colorSchemeId = 1
const input = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3]
const intervals = JSON.parse(groupIntoIntervalsWithColorsDescending(input, colorSchemeId))
displayInputData(input)
createHistogram(intervals)
displayIntervals(intervals)

// Variant 2
const colorSchemeIdVariant2 = 3
const inputVariant2 = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3, 22, 27]
const intervalsVariant2 = JSON.parse(groupIntoIntervalsWithColorsAscending(inputVariant2, colorSchemeIdVariant2))
displayInputData(inputVariant2)
displayIntervals(intervalsVariant2)
createHistogram(intervalsVariant2)

function displayInputData (input) {
  const text = 'Input data'
  displayHeading(text)

  const inputElement = document.createElement('p')
  inputElement.textContent = convertDataPoints(input)
  document.querySelector('#container').appendChild(inputElement)
}

function displayIntervals (intervals) {
  const text = 'Output as intervals'
  displayHeading(text)

  let intervalClone
  const intervalTemplate = document.querySelector('#interval')

  for (const interval of intervals) {
    intervalClone = intervalTemplate.content.cloneNode(true)

    displayColorSwatches(intervalClone, interval)

    displayBoundaries(intervalClone, interval)

    displayDataPoints(intervalClone, interval)

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
