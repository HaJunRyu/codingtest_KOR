import { COLUMNS_CHANGE } from './actionType';

const columns = [
  { title: 'Name', field: 'name' },
  { title: 'TagLine', field: 'tagline' },
  { title: 'First brewed', field: 'first_brewed' },
  { title: 'ABV', field: 'abv' },
  { title: 'IBU', field: 'ibu' },
  { title: 'SRM', field: 'srm' },
];

const INITIAL_STATE = {
  columns,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COLUMNS_CHANGE:
      return { ...state, columns: action.payload.columns };
    default:
      return state;
  }
};

export default reducer;
