import { goOnlineSchema } from './drivers.zod'

describe('goOnlineSchema', () => {
  const baseSample = {
    lat: 57.7089,
    lng: 11.9746,
    sampledAt: '2026-07-15T08:00:00.000Z',
  }

  it('accepts optional high-quality GPS accuracy', () => {
    expect(goOnlineSchema.parse({ ...baseSample, accuracy: 50 }).accuracy).toBe(50)
  })

  it('rejects poor GPS accuracy', () => {
    expect(() => goOnlineSchema.parse({ ...baseSample, accuracy: 50.1 })).toThrow()
  })
})
