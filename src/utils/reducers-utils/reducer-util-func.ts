import { IInputState, IFieldConfig } from "./ISlices";

export const initialInputState: IInputState = {
  fields: [],
  values: {},
};

// Dummy reducer utility (simulate Redux logic)
export function inputReducer(state: IInputState, action: any): IInputState {
  switch (action.type) {
    case "SET_FIELDS":
      return { ...state, fields: action.payload };
    case "UPDATE_VALUE":
      return {
        ...state,
        values: { ...state.values, [action.fieldId]: action.value },
      };
    default:
      return state;
  }
}

// Helper: Get field config by ID
export function getFieldConfig(
  fields: IFieldConfig[],
  fieldid: string
): IFieldConfig | undefined {
  return fields.find((f) => f.fieldid === fieldid);
}
