import { compareLandedCost, type LandedCostComparison, type LandedCostInput, type ModeCostBreakdown } from './lib/landedCostEngine'
import { componentIdentity, isKickScooterIdentity, principalProductText } from './lib/productIdentity'

type Packaging = 'standard' | 'compact' | 'bulky'
type Scenario = { quantity: number; packaging: Packaging }
type ComparedMode = 'lcl' | 'air' | 'courier'

const packages: Record<Packaging, { label: string; volume: number }> = {
  standard: { label: 'Standard', volume: 0.008 },
  compact: { label: 'Compact', volume: 0.002 },
  bulky: { label: 'Bulky', volume: 0.02 },
}
const baseline: Scenario = { quantity: 100, packaging: 'standard' }
const modes: ComparedMode[] = ['lcl', 'air', 'courier']
const modeLabels: Record<ComparedMode, string> = { lcl: 'Sea (LCL)', air: 'Air', courier: 'Courier' }
const money = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
const number = (value: number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(value)
const escape = (value: string) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!)

function inputFor(scenario: Scenario): LandedCostInput {
  return {
    originCountry: 'Example origin',
    quantity: scenario.quantity,
    unitPriceUsd: 12,
    unitWeightKg: 0.5,
    unitVolumeCbm: packages[scenario.packaging].volume,
    dutyRatePct: 10,
    purpose: 'resale',
    entityType: 'company',
    hasImporterSignature: true,
    sensitiveCategory: 'none',
    gainsExempt: false,
    capitalGoodEligible: false,
    capitalGoodUse: false,
  }
}

function scenarioLabel(scenario: Scenario) {
  return `${number(scenario.quantity)} ${scenario.quantity === 1 ? 'unit' : 'units'} · ${packages[scenario.packaging].label.toLowerCase()} packaging`
}

function bestResult(comparison: LandedCostComparison) {
  if (!comparison.bestMode) throw new Error('This example could not be calculated.')
  return comparison.modes[comparison.bestMode]
}

function chargeableLabel(result: ModeCostBreakdown) {
  return result.mode === 'lcl'
    ? `${number(result.chargeableUnits)} W/M billed`
    : `${number(result.chargeableUnits)} kg chargeable`
}

function packagingDelta(scenario: Scenario, best: ModeCostBreakdown) {
  const otherPackaging: Packaging = scenario.packaging === 'standard' ? 'compact' : 'standard'
  const other = bestResult(compareLandedCost(inputFor({ quantity: scenario.quantity, packaging: otherPackaging })))
  const difference = Math.round(Math.abs(best.totalCostUsd - other.totalCostUsd) * 100) / 100
  const units = `${number(scenario.quantity)} ${scenario.quantity === 1 ? 'unit' : 'units'}`
  if (difference === 0) return `For the same ${units}, ${packages[otherPackaging].label.toLowerCase()} packaging produces the same lowest modeled total.`
  if (scenario.packaging === 'standard') {
    return `For the same ${units}, compact packaging makes the lowest modeled total ${money(difference)} ${other.totalCostUsd < best.totalCostUsd ? 'lower' : 'higher'}.`
  }
  return `For the same ${units}, this packaging makes the lowest modeled total ${money(difference)} ${best.totalCostUsd < other.totalCostUsd ? 'lower' : 'higher'} than standard packaging.`
}

function renderComparison(scenario: Scenario, comparison: LandedCostComparison) {
  const best = bestResult(comparison)
  const input = inputFor(scenario)
  const courier = comparison.modes.courier
  const rows = modes.map((mode) => {
    const result = comparison.modes[mode]
    return `<tr${mode === comparison.bestMode ? ' class="demo-best"' : ''}>
      <th scope="row">${modeLabels[mode]} ${mode === comparison.bestMode ? '<span class="demo-best-label">Lowest</span>' : ''}<small>${chargeableLabel(result)}</small></th>
      ${result.available
        ? `<td>${money(result.totalCostUsd)}</td><td>${money(result.unitCostUsd)}</td>`
        : '<td colspan="2"><span class="demo-unavailable">Outside the example tariff’s 50 kg limit</span></td>'}
    </tr>`
  }).join('')
  return `<h3 id="demo-result-title">${scenarioLabel(scenario)}</h3>
    <dl class="demo-summary">
      <div class="demo-metric"><dt>Lowest modeled cost</dt><dd>${modeLabels[comparison.bestMode!]}</dd></div>
      <div class="demo-metric"><dt>Landed total · USD</dt><dd>${money(best.totalCostUsd)}</dd></div>
      <div class="demo-metric"><dt>Per unit · USD</dt><dd>${money(best.unitCostUsd)}</dd></div>
    </dl>
    <p class="demo-delta">${packagingDelta(scenario, best)}</p>
    <div class="demo-table-wrap" tabindex="0" role="region" aria-label="Transport cost comparison">
      <table class="demo-table">
        <caption>Transport comparison · modeled USD totals</caption>
        <thead><tr><th scope="col">Mode / billed basis</th><th scope="col">Total</th><th scope="col">Per unit</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <p class="demo-explanation">This shipment occupies <strong>${number(input.quantity * input.unitVolumeCbm)} m³</strong> and weighs <strong>${number(input.quantity * input.unitWeightKg)} kg</strong>. Sea uses whole weight-or-volume units (W/M), with a minimum of one. Air and courier use the greater of actual and volumetric weight.${courier.available ? ' Courier rounds chargeable weight up to the next kilogram.' : ` Courier’s ${number(courier.chargeableUnits)} kg chargeable weight exceeds the range included in this example.`}</p>
    <details class="demo-breakdown">
      <summary>What makes up the ${escape(modeLabels[comparison.bestMode!])} total?</summary>
      <dl class="demo-cost-lines">
        <div><dt>Goods</dt><dd>${money(best.fobUsd)}</dd></div>
        <div><dt>International freight</dt><dd>${money(best.freightCostUsd)}</dd></div>
        <div><dt>Duty and statistics tax</dt><dd>${money(best.dutyUsd + best.statisticsUsd)}</dd></div>
        <div><dt>VAT and tax perceptions</dt><dd>${money(best.vatUsd + best.vatAdditionalUsd + best.gainsUsd + best.iibbUsd)}</dd></div>
        <div><dt>Destination charges</dt><dd>${money(best.fixedDestinationUsd + best.noImporterSignatureUsd + best.sensitiveCategoryUsd)}</dd></div>
      </dl>
    </details>`
}

const identityExamples = [
  { id: 'scooter', title: 'Complete scooter', description: 'Electric scooter with lithium battery' },
  { id: 'battery', title: 'Battery sold separately', description: 'Lithium battery for electric scooter' },
  { id: 'charger', title: 'Charger sold separately', description: 'USB-C charger for electric scooter' },
] as const

function renderIdentity(description: string) {
  const facts = { name: description }
  const component = componentIdentity(facts)
  const isScooter = isKickScooterIdentity(facts)
  const identity = component === 'battery' ? 'Battery' : component === 'power_adapter' ? 'Charger / power adapter' : isScooter ? 'Complete scooter' : 'Needs further review'
  const explanation = component
    ? '“For electric scooter” identifies the intended host; the item being shipped remains the component.'
    : 'The battery is included with the scooter; the principal product remains the complete scooter.'
  return `<p><span class="identity-label">Principal product</span><strong>${identity}</strong></p><p>Principal text: “${escape(principalProductText(facts))}”. ${explanation}</p>`
}

/** Complete initial HTML, including genuine calculated results, without browser APIs. */
export function demoMarkup(): string {
  const comparison = compareLandedCost(inputFor(baseline))
  return `<section class="demo-tool" aria-labelledby="demo-title" data-demo>
    <div class="demo-intro">
      <p class="eyebrow">Try the decision logic</p>
      <h2 id="demo-title">How does packaging change the transport comparison?</h2>
      <p>Change shipment size and packaging to compare the modeled landed cost of the same product by sea, air and courier.</p>
      <p class="demo-disclaimer">Portfolio example using invented freight rates and illustrative tax assumptions. All amounts are USD.</p>
    </div>
    <form id="demo-form" novalidate aria-describedby="demo-js-note">
      <fieldset disabled data-demo-controls>
        <legend>Choose a shipment</legend>
        <p class="demo-preset-hint">Try 25 standard, then 25 compact to isolate the effect of packaging.</p>
        <div class="demo-presets" role="group" aria-label="Guided shipment examples">
          <button type="button" data-demo-preset="100-standard" aria-pressed="true">100 units · standard</button>
          <button type="button" data-demo-preset="25-standard" aria-pressed="false">25 units · standard</button>
          <button type="button" data-demo-preset="25-compact" aria-pressed="false">25 units · compact</button>
        </div>
        <div class="demo-controls">
          <div class="demo-field"><label for="quantity">Quantity</label><input id="quantity" name="quantity" type="number" min="1" max="5000" step="1" value="100" inputmode="numeric" required aria-describedby="quantity-help demo-error"><small id="quantity-help">1–5,000 whole units</small></div>
          <div class="demo-field"><label for="volume">Packaging per unit</label><select id="volume" name="packaging">${Object.entries(packages).map(([key, value]) => `<option value="${key}"${key === baseline.packaging ? ' selected' : ''}>${value.label} · ${number(value.volume)} m³</option>`).join('')}</select></div>
          <div class="demo-actions"><button class="button button-primary" type="submit">Compare costs</button><button class="button button-secondary" type="button" data-demo-reset>Reset example</button></div>
        </div>
      </fieldset>
      <p id="demo-error" class="demo-error" role="alert" hidden></p>
    </form>
    <p id="demo-js-note" class="demo-js-note">The initial 100-unit calculation is shown below. Interactive changes require JavaScript.</p>
    <p id="demo-status" class="demo-status" role="status" aria-live="polite" aria-atomic="true"></p>
    <div id="demo-output" role="region" aria-labelledby="demo-result-title" aria-busy="false">${renderComparison(baseline, comparison)}</div>
    <details class="demo-assumptions">
      <summary>Rates, tax assumptions and limits</summary>
      <ul>
        <li>The example product costs $12 and weighs 0.5 kg per unit. Packaging changes volume only. The origin is a fictional fixture.</li>
        <li>Sea (LCL): $180 per whole W/M, minimum one, plus $900 destination charges. One W/M is the greater of one cubic metre or one metric tonne.</li>
        <li>Air: $6 per chargeable kg, minimum $150 freight, plus $350 destination charges. Volumetric weight is volume in m³ × 1,000 ÷ 6.</li>
        <li>Courier: ($25 + $9 per rounded-up chargeable kg) × 1.38 fuel factor, plus $45 and 2% of duty for destination handling. Volumetric weight is volume in m³ × 200. This tariff fixture covers up to 50 chargeable kg.</li>
        <li>Illustrative taxes: duty 10% and statistics tax 3% on goods plus freight; VAT 21%, additional VAT 20%, gains perception 6% and IIBB perception 2.5% on goods, freight, duty and statistics tax.</li>
        <li>The scenario assumes a company importing for resale, with an importer signature, no sensitive-category surcharge and no tax exemptions. Totals include modeled tax cash outlay; tax recovery, transit times, insurance and regulatory eligibility require separate review.</li>
        <li>This exercise compares sea LCL, air and courier. Figures are calculated locally from example data and are not freight quotes or customs determinations.</li>
      </ul>
    </details>
    <p class="demo-takeaway">This example demonstrates how a decision tool turns packaging, freight rules and tax assumptions into a transport comparison someone can act on.</p>
  </section>
  <details class="identity-helper" data-identity-demo>
    <summary>Why product identity matters</summary>
    <div class="identity-content">
      <h3>Identify the item being shipped</h3>
      <p>A complete product, its battery and its charger can need different classification paths. Choose a description to see the principal product identified by this small rule-based helper.</p>
      <fieldset disabled data-identity-controls>
        <legend>Choose a product description</legend>
        <div class="identity-options">${identityExamples.map((example, index) => `<label class="identity-option"><input type="radio" name="identity-example" value="${example.id}"${index === 0 ? ' checked' : ''}><span><strong>${example.title}</strong><span>${example.description}</span></span></label>`).join('')}</div>
      </fieldset>
      <div id="identity-result" class="identity-result" role="status" aria-live="polite" aria-atomic="true">${renderIdentity(identityExamples[0].description)}</div>
      <p class="identity-scope">This helper checks these three descriptions only. Tariff codes, regulatory eligibility and the platform’s full classification workflow are outside this example. Interactive changes require JavaScript.</p>
    </div>
  </details>`
}

function isPackaging(value: string): value is Packaging {
  return Object.prototype.hasOwnProperty.call(packages, value)
}

function initCostDemo() {
  const root = document.querySelector<HTMLElement>('[data-demo]')
  if (!root || root.dataset.enhanced) return
  const form = root.querySelector<HTMLFormElement>('#demo-form')
  const quantity = root.querySelector<HTMLInputElement>('#quantity')
  const packaging = root.querySelector<HTMLSelectElement>('#volume')
  const output = root.querySelector<HTMLElement>('#demo-output')
  const error = root.querySelector<HTMLElement>('#demo-error')
  const status = root.querySelector<HTMLElement>('#demo-status')
  if (!form || !quantity || !packaging || !output || !error || !status) return
  root.dataset.enhanced = 'true'
  root.querySelector<HTMLFieldSetElement>('[data-demo-controls]')?.removeAttribute('disabled')
  const note = root.querySelector<HTMLElement>('#demo-js-note')
  if (note) note.textContent = 'Change the inputs and select Compare costs. This example calculates in your browser.'
  const presets = root.querySelectorAll<HTMLButtonElement>('[data-demo-preset]')

  const clearError = () => {
    error.hidden = true
    error.textContent = ''
    quantity.removeAttribute('aria-invalid')
    packaging.removeAttribute('aria-invalid')
  }
  const updatePresets = () => {
    for (const preset of presets) {
      preset.setAttribute('aria-pressed', String(preset.dataset.demoPreset === `${quantity.value}-${packaging.value}`))
    }
  }
  const update = (reset = false) => {
    clearError()
    const amount = Number(quantity.value)
    if (!quantity.value.trim() || !Number.isInteger(amount) || amount < 1 || amount > 5000) {
      error.textContent = 'Enter a whole quantity from 1 to 5,000 units.'
      error.hidden = false
      quantity.setAttribute('aria-invalid', 'true')
      status.textContent = 'The comparison still shows the last valid shipment.'
      quantity.focus()
      return
    }
    if (!isPackaging(packaging.value)) {
      error.textContent = 'Choose one of the example packaging options.'
      error.hidden = false
      packaging.setAttribute('aria-invalid', 'true')
      status.textContent = 'The comparison still shows the last valid shipment.'
      packaging.focus()
      return
    }
    output.setAttribute('aria-busy', 'true')
    try {
      const scenario = { quantity: amount, packaging: packaging.value }
      const comparison = compareLandedCost(inputFor(scenario))
      const best = bestResult(comparison)
      output.innerHTML = renderComparison(scenario, comparison)
      quantity.value = String(amount)
      updatePresets()
      status.textContent = `${reset ? 'Example reset. ' : ''}${scenarioLabel(scenario)}. ${modeLabels[comparison.bestMode!]} has the lowest modeled cost: ${money(best.totalCostUsd)} total, ${money(best.unitCostUsd)} per unit.`
    } catch {
      error.textContent = 'The example could not be calculated. Reset the example and try again.'
      error.hidden = false
      status.textContent = 'The comparison still shows the last valid shipment.'
    } finally {
      output.setAttribute('aria-busy', 'false')
    }
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    update()
  })
  form.addEventListener('input', () => {
    clearError()
    updatePresets()
    status.textContent = 'Inputs changed. Select Compare costs to update the comparison below.'
  })
  for (const preset of presets) {
    preset.addEventListener('click', () => {
      const [amount, size] = (preset.dataset.demoPreset || '').split('-')
      if (!isPackaging(size)) return
      quantity.value = amount
      packaging.value = size
      update()
    })
  }
  root.querySelector('[data-demo-reset]')?.addEventListener('click', () => {
    quantity.value = String(baseline.quantity)
    packaging.value = baseline.packaging
    update(true)
  })
}

function initIdentityDemo() {
  const root = document.querySelector<HTMLElement>('[data-identity-demo]')
  if (!root || root.dataset.enhanced) return
  const result = root.querySelector<HTMLElement>('#identity-result')
  if (!result) return
  root.dataset.enhanced = 'true'
  root.querySelector<HTMLFieldSetElement>('[data-identity-controls]')?.removeAttribute('disabled')
  for (const radio of root.querySelectorAll<HTMLInputElement>('input[name="identity-example"]')) {
    radio.addEventListener('change', () => {
      const example = identityExamples.find((item) => item.id === radio.value)
      if (radio.checked && example) result.innerHTML = renderIdentity(example.description)
    })
  }
}

/** Adds browser interactions only when the corresponding rendered examples exist. */
export function initDemos(): void {
  initCostDemo()
  initIdentityDemo()
}
