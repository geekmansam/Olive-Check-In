import { createReducer } from 'reduxsauce';
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

export const HANDLERS = {
  [Types.UPDATE_SETTINGS]: updateSettings
};

export default createReducer(INITIAL_STATE, HANDLERS);
