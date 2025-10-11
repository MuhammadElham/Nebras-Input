export async function fetchHelpData() {
  // Dummy async API function
  return Promise.resolve([
    { id: 1, name: "Sample Help Object", description: "Demo data loaded successfully" },
  ]);
}

export function formatLabel(label: string) {
  return label ? label.trim().toUpperCase() : "";
}

export function isFieldRequired(field: any): boolean {
  return field?.ismandatorybeforecreate || field?.ismandatoryaftercreate;
}
