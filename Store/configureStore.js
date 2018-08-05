// Store/configureStore.js

import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'

let store = createStore(toggleFavorite)
export default store
