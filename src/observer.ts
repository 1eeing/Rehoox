function observer(store, dispatch) {
  const handler = {
    get: function (target, key) {
      return target[key]
    },

    set: function (target, key, value) {

    },
  }

  const observerableStore = new Proxy(store, handler);
  return observerableStore;
}

export default observer;
