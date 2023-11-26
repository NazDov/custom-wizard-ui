export interface WizardProperties {
    steps: WizardStep[];
}

export interface WizardStep {
    label: String,
    content: String,
    next?: number
}