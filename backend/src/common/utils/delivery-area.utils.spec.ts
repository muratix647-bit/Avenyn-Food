import { isWithinAvenynFoodDeliveryArea } from './delivery-area.utils'

describe('Avenyn Food Göteborg pilot geofence', () => {
  it('accepts real positions around Göteborg', () => {
    expect(isWithinAvenynFoodDeliveryArea(57.7089, 11.9746)).toBe(true)
    expect(isWithinAvenynFoodDeliveryArea(57.6688, 12.2923)).toBe(true) // Landvetter
    expect(isWithinAvenynFoodDeliveryArea(57.655, 12.012)).toBe(true) // Mölndal
  })

  it('rejects locations outside the pilot area', () => {
    expect(isWithinAvenynFoodDeliveryArea(59.3293, 18.0686)).toBe(false) // Stockholm
    expect(isWithinAvenynFoodDeliveryArea(10.7769, 106.7009)).toBe(false) // Old demo
    expect(isWithinAvenynFoodDeliveryArea(0, 0)).toBe(false)
  })

  it('rejects missing or invalid GPS data', () => {
    expect(isWithinAvenynFoodDeliveryArea(null, undefined)).toBe(false)
    expect(isWithinAvenynFoodDeliveryArea(Number.NaN, 11.9746)).toBe(false)
    expect(isWithinAvenynFoodDeliveryArea(Number.POSITIVE_INFINITY, 11.9746)).toBe(false)
  })
})
