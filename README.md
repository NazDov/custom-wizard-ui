# Custom Ui Wizard

Example:

In HTML template:

`<app-wizard [properties]="properties"></app-wizard>`

In component:
```
properties: WizardProperties = {
    steps: [
      {
        id: 1,
        label: "1",
        content: "Step 1",
        next: 2,
      },
      {
        id: 2,
        label: "2",
        content: "Step 2",
        next: 3
      },
      {
        id: 3,
        label: "3",
        content: "Step 3"
      },
      {
        id: 4,
        label: "4",
        content: "Step 4"
      }
    ]
  }
```

UI Demo: https://d16rv4tyq917eo.cloudfront.net/