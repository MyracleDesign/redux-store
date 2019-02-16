export const initialState = {
  loaded: false,
  loading: false,
  data: [{label: 'Eat pizza', complete: false}]
};

export function reducer(
  state = initialState,
  action: { type: string, payload: any }
) {
  switch (action.type) {
    case "ADD_TODOS": {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data
      }
    }
  }
  return state;
}
