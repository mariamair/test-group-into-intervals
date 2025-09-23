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

function displayInputData(input) {
  const heading = document.createElement('h2')
  heading.textContent = 'Input data'
  document.querySelector('#container').appendChild(heading)

  const inputElement = document.createElement('p')
  inputElement.textContent = displayDataPoints(input)
  document.querySelector('#container').appendChild(inputElement)
}

function displayIntervals(intervals) {
  const heading = document.createElement('h2')
  heading.textContent = 'Output as intervals'
  document.querySelector('#container').appendChild(heading)

  let intervalClone
  const intervalTemplate = document.querySelector('#interval')

  for (const interval of intervals) {
    intervalClone = intervalTemplate.content.cloneNode(true)
    const swatch = intervalClone.querySelector('.interval-swatch')
    swatch.style.backgroundColor = interval.color.hexValue

    const boundaries = intervalClone.querySelector('.interval-boundaries')
    boundaries.textContent = interval.lowerBoundary + ' - ' + interval.upperBoundary

    const dataPoints = intervalClone.querySelector('.interval-datapoints')
    dataPoints.textContent = 'Data point(s): ' + displayDataPoints(interval.data)

    document.querySelector('#container').appendChild(intervalClone)
  }
}

function createHistogram(intervals) {
  const heading = document.createElement('h2')
  heading.textContent = 'Output as histogram'
  document.querySelector('#container').appendChild(heading)

  let histogramClone
  const histogramTemplate = document.querySelector('#histogram')
  for (const interval of intervals) {
    histogramClone = histogramTemplate.content.cloneNode(true)
    const swatch = histogramClone.querySelector('.interval-swatch')
    swatch.style.backgroundColor = interval.color.hexValue
    swatch.style.width = 50 * getNumberOfDataPoints(interval.data) + 'px'

    const boundaries = histogramClone.querySelector('.interval-boundaries')
    boundaries.textContent = interval.lowerBoundary + ' - ' + interval.upperBoundary

    document.querySelector('#container').appendChild(histogramClone)
  }
}

// Converts the data points to a text string
function displayDataPoints (dataPoints) {
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
