import { createReducer } from 'reduxsauce';
import { Types } from './../actions/settings';

const INITIAL_STATE = {
  baseApiUrl: '',
};

export const updateSettings = (state = INITIAL_STATE, action) =>
({ ...state, settings: action.settings });

export const HANDLERS = {
  [Types.UPDATE_SETTINGS]: updateSettings
};

export default createReducer(INITIAL_STATE, HANDLERS);
