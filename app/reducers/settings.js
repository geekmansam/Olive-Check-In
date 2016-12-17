import { createReducer } from 'reduxsauce';
// import { push } from 'react-router-redux';
import { Types } from './../actions/settings';

const INITIAL_STATE = {
  baseApiUrl: '',
  clientUsername: '',
  clientPassword: '',
  username: '',
  password: '',
  settingsScreenPassword: '',
};

export const updateSettings = (state = INITIAL_STATE, action) =>
({ ...state, ...action.settings });

// export const checkSettings = (state = INITIAL_STATE, action) => {
//   if (!action.payload.settings.baseApiUrl || action.payload.settings.baseApiUrl === '') {
//     push('/settings');
//   }
//   return { ...state, ...action.settings };
// };

export const HANDLERS = {
  [Types.UPDATE_SETTINGS]: updateSettings,
  // 'persist/REHYDRATE': checkSettings,
};

export default createReducer(INITIAL_STATE, HANDLERS);
