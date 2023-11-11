"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@src/store/store";
import debounce from "debounce";
import { saveState } from "@src/utils/browserStorage.utils";

const Provider = ({ children }) => {
  // here we subscribe to the store changes
  store.subscribe(
    // we use debounce to save the state once each 800ms
    // for better performances in case multiple changes occur in a short time
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
