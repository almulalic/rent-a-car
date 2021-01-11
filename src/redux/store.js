const getConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    preloadedState: loadState(),
  });

const store = getConfiguredStore();

export default store;
