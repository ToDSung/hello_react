import { createStore } from 'redux';
import themeReducer from '../reducers/themeReducer';

const configureStore = () => {
  const store  = createStore(
      themeReducer
  )

  return store;
}

export default configureStore;