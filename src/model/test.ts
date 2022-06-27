// import { queryProjectNotice } from '@/src/api';

export default {
  namespace: 'project',

  state: {
    notice: [],
  },

  effects: {
    *fetchNotice(_, { call, put }) {
      //   const response = yield call(queryProjectNotice);
      //   yield put({
      //     type: 'saveNotice',
      //     payload: Array.isArray(response) ? response : [],
      //   });
    },
  },

  reducers: {
    saveNotice(state: any, action: { payload: any }) {
      return {
        ...state,
        notice: action.payload,
      };
    },
  },
};
