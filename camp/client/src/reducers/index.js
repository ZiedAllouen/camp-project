import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import items from'./items';

export const reducers = combineReducers({ posts, auth, items });
