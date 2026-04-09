export interface Indicative {
	dateOfBirth: string
	socialSecurity: {
		number: string
	}
}

export interface IndicativeResponse {
	socialSecurityNumber?: string
}

export function indicativeHandler(indicative: Indicative): IndicativeResponse {
	let ssn = `${indicative?.socialSecurity?.number}`.replace(/\D/g, '')
	let dob = indicative?.dateOfBirth
	return {
		dateOfBirth: dob,
		socialSecurityNumber: ssn
	}
}
