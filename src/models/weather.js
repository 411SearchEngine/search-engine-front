import {queryProjectNotice} from '../pages/List/services/list';

export default {
  namespace: 'weather',

  state: {
    weather: {}
  },

  effects: {
    * fetch(_, {call, put}) {
      console.log("123")
      const response = yield call(queryProjectNotice);
      yield put({
        type: 'stateWillBeUpdated',
        payload: response,
      });
    },
  },
  reducers: {
    stateWillBeUpdated(state, {payload}) {
      return {...state, ...payload};
    },
  },
}
