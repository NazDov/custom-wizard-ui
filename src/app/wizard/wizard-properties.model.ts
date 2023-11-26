export interface WizardProperties {
    steps: WizardStep[];
}

export interface WizardStep {
    id: number,
    label: String,
    content: String,
    next?: number
}