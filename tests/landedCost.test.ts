import { describe, it, expect } from 'vitest'
import { compareLandedCost, type LandedCostInput } from '../src/lib/landedCostEngine'
const fixture:LandedCostInput={originCountry:'Example origin',quantity:100,unitPriceUsd:12,unitWeightKg:0.5,unitVolumeCbm:0.002,dutyRatePct:10,purpose:'resale',entityType:'company',hasImporterSignature:true,sensitiveCategory:'none',gainsExempt:false,capitalGoodEligible:false,capitalGoodUse:false}
describe('portfolio calculation using the actual GlobalShipping engine',()=>{
 it('matches an independently calculated compact air order',()=>{
  const result=compareLandedCost(fixture)
  expect(result.status).toBe('ok')
  expect(result.modes.air.freightCostUsd).toBe(300)
  expect(result.modes.air.cifUsd).toBe(1500)
  expect(result.modes.air.dutyUsd).toBe(150)
  expect(result.modes.air.statisticsUsd).toBe(45)
  expect(result.modes.air.totalCostUsd).toBe(2884.03)
  expect(result.modes.air.unitCostUsd).toBe(28.84)
 })
 it('changes the recommendation as packaging increases volumetric weight',()=>{
  expect(compareLandedCost(fixture).bestMode).toBe('air')
  const standard=compareLandedCost({...fixture,unitVolumeCbm:0.008})
  expect(standard.bestMode).toBe('lcl')
  expect(standard.modes.air.freightCostUsd).toBe(800)
  expect(standard.modes.lcl.totalCostUsd).toBe(3231.30)
 })
 it('rounds sea W/M and does not offer unsupported courier weights',()=>{
  const result=compareLandedCost({...fixture,unitVolumeCbm:0.02})
  expect(result.modes.lcl.lclBilledWm).toBe(2)
  expect(result.modes.lcl.freightCostUsd).toBe(360)
  expect(result.modes.courier.available).toBe(false)
 })
 it('handles unavailable origin and invalid order without inventing a quote',()=>{
  expect(compareLandedCost({...fixture,originCountry:'missing'}).status).toBe('missing_origin')
  expect(compareLandedCost({...fixture,quantity:0}).status).toBe('invalid_input')
 })
})
