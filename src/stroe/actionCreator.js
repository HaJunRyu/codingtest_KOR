import { COLUMNS_CHANGE } from './actionType';

export const columnsChangeAction = columns => ({
  type: COLUMNS_CHANGE,
  payload: { columns },
});
