import { ColorCreator } from '../group-into-intervals/src/ColorCreator'

const colors = [[190, 32, 32], [117, 50, 168], [26, 2, 240]]
const colorPair = [[190, 32, 32], [117, 50, 168]]
const numberOfIntervals = 5

const colorCreator = new ColorCreator()

describe('Create colors for intervals', () => {
  test('calculate middle RGB value', () => {
    expect(colorCreator.calculateMiddleRgbValue(colorPair)).toEqual([154, 41, 100])
  })

  test('number of colors matches number of intervals', () => {
    expect(colorCreator.getColors(colors, numberOfIntervals)).toHaveLength(5)
  })

  test('create more colors to match number of intervals', () => {
    expect(colorCreator.getColors(colors, numberOfIntervals)).toStrictEqual([[190, 32, 32], [154, 41, 100], [117, 50, 168], [72, 26, 204], [26, 2, 240]])
  })
})
