import { createReducer } from 'reduxsauce';
import { Types } from './../actions/navigation';

const INITIAL_STATE = {
  back: null,
  next: '/step/family',
};

export const updateNavigation = (state = INITIAL_STATE, action) =>
({ ...state, ...action.navigation });

export const HANDLERS = {
  [Types.UPDATE_NAVIGATION]: updateNavigation,
};

export default createReducer(INITIAL_STATE, HANDLERS);
