import { DataProcessingService } from '../group-into-intervals/src/DataProcessingService.js'

const shortArray = [1, 3, -5, 17, 3]
const dataProcessor = new DataProcessingService(shortArray)

test('array is sorted ascending', () => {
  expect(dataProcessor.sortDataAscending(shortArray)).toStrictEqual([-5, 1, 3, 3, 17])
})

test('array is sorted descending', () => {
  expect(dataProcessor.sortDataDescending(shortArray)).toStrictEqual([17, 3, 3, 1, -5])
})
