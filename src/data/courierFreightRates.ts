// Invented portfolio fixture. Linear tariff solely for demonstrating engine behavior.
export const courierFuelMultiplier = 1.38
export const courierZones: Record<string,number> = {'Example origin':1}
export const courierTariffs: Record<number,number[]> = Object.fromEntries(Array.from({length:50},(_,i)=>[i+1,[25+(i+1)*9]]))
