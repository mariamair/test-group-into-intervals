import { displayColorSchemes, displayColorScheme } from '../group-into-intervals/src/index.js'

const colorSchemeId = 3
const colorSchemeOutput = {
  id: 3,
  name: 'violet, yellow, blue',
  hexValues: ['#7532a8', '#d6db42', '#1a02f0'],
  rgbValues: ['rgb(117, 50, 168)', 'rgb(214, 219, 66)', 'rgb(26, 2, 240)']
}

describe('Display color schemes', () => {
  test('should return all color schemes', () => {
    expect(displayColorSchemes()).toHaveLength(4)
  })

  test('should contain at least one color scheme object', () => {
    expect(displayColorSchemes()[0]).toHaveProperty('id')
    expect(displayColorSchemes()[0]).toHaveProperty('name')
    expect(displayColorSchemes()[0]).toHaveProperty('hexValues')
    expect(displayColorSchemes()[0]).toHaveProperty('rgbValues')
  })

  test('should return selected color scheme', () => {
    expect(displayColorScheme(colorSchemeId)).toStrictEqual(colorSchemeOutput)
  })
})
