// Invented portfolio fixture. Not supplier or market data.
export const importFreightValues = {
 meta: {source: 'Portfolio example rates — invented, not a quote'},
 rates: [['Example origin', 'Example port', 'Example region', 4000, 180]],
 expenses: {
 fcl: {fixed: {destination: 1800}, extras: {noImporterSignature: 200, sensitiveProductCategory: 200}},
 lcl: {fixed: {destination: 900}, extras: {noImporterSignature: 200, sensitiveProductCategory: 200}},
 air: {fixed: {destination: 350}, extras: {noImporterSignature: 200, sensitiveProductCategory: 200}}
 }
} as const
