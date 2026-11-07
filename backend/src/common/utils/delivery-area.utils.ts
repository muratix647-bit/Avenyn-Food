/** Avenyn Food's initial pilot area around Göteborg.
 * This rectangular pre-check is NOT a substitute for serviceable-zone polygons.
 */
export const AVENYN_FOOD_DELIVERY_BOUNDS = {
  south: 57.15,
  north: 58.3,
  west: 11.0,
  east: 13.0,
} as const

export function isWithinAvenynFoodDeliveryArea(
  lat: number | null | undefined,
  lng: number | null | undefined,
): boolean {
  return Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat! >= AVENYN_FOOD_DELIVERY_BOUNDS.south &&
    lat! <= AVENYN_FOOD_DELIVERY_BOUNDS.north &&
    lng! >= AVENYN_FOOD_DELIVERY_BOUNDS.west &&
    lng! <= AVENYN_FOOD_DELIVERY_BOUNDS.east &&
    !(lat === 0 && lng === 0)
}

/** Legacy FoodFlow helper: retained while other demo modules are migrated. */
export const VIETNAM_DELIVERY_BOUNDS = {
  south: 3.8,
  north: 23.5,
  west: 102.0,
  east: 117.5,
} as const

export function isWithinVietnamDeliveryBounds(
  lat: number | null | undefined,
  lng: number | null | undefined,
): boolean {
  return Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat! >= VIETNAM_DELIVERY_BOUNDS.south &&
    lat! <= VIETNAM_DELIVERY_BOUNDS.north &&
    lng! >= VIETNAM_DELIVERY_BOUNDS.west &&
    lng! <= VIETNAM_DELIVERY_BOUNDS.east &&
    !(lat === 0 && lng === 0)
}
