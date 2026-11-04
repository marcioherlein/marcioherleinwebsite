import { describe, expect, it } from 'vitest'
import { componentIdentity, isKickScooterIdentity, principalProductText } from '../src/lib/productIdentity'

describe('GlobalShipping product-identity demonstration',()=>{
 it('retains the complete scooter when a battery is included',()=>{
  const facts={name:'Electric scooter with lithium battery'}
  expect(principalProductText(facts)).toBe('electric scooter')
  expect(componentIdentity(facts)).toBeNull()
  expect(isKickScooterIdentity(facts)).toBe(true)
 })
 it('distinguishes a separately purchased battery from its intended host',()=>{
  const facts={name:'Lithium battery for electric scooter'}
  expect(principalProductText(facts)).toBe('lithium battery')
  expect(componentIdentity(facts)).toBe('battery')
  expect(isKickScooterIdentity(facts)).toBe(false)
 })
 it('recognizes the charger instead of the scooter mentioned after for',()=>{
  const facts={name:'USB-C charger for electric scooter'}
  expect(componentIdentity(facts)).toBe('power_adapter')
  expect(isKickScooterIdentity(facts)).toBe(false)
 })
 it('does not infer a product identity from missing facts',()=>{
  expect(principalProductText({})).toBe('')
  expect(componentIdentity({})).toBeNull()
  expect(isKickScooterIdentity({})).toBe(false)
 })
})
