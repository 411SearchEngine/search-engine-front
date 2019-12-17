import {queryProjectNotice} from '../pages/List/services/list';

export default {
  namespace: 'weather',

  state: {
    searchModels:[]
  },

  effects: {
    * fetch({payload}, {call, put}) {
      const {submitData} = payload;
      const response = yield call(queryProjectNotice, submitData);
      const {searchModels} = response.data;
      console.log("searchModels============", searchModels);
      yield put({
        type: 'stateWillBeUpdated',
        payload: {
          searchModels,
        }
      });
    },
  },
  reducers: {
    stateWillBeUpdated(state, {payload}) {
      return {...state, ...payload};
    },
  },
}
