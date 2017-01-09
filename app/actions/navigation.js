import { createActions } from 'reduxsauce';

export const { Types, Actions, Creators } = createActions({
  updateNavigation: ['navigation']
});

export default Actions;

