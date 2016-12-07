import { createActions } from 'reduxsauce';

export const { Types, Actions, Creators } = createActions({
  updateSettings: ['settings']
});

export default Actions;

