"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@src/store/store";
import debounce from "debounce";
import { saveState } from "@src/utils/browserStorage.utils";

const Provider = ({ children }) => {
  // Save redux state to local storage for persistence
  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
