import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"; // import redux-saga
import logger from "redux-logger";
import rootReducers from "./rootReducers";
import rootSaga from "./rootSagas"; // import your root saga
import { loadState } from "@src/utils/browserStorage.utils";

const sagaMiddleware = createSagaMiddleware(); // create a saga middleware

const middlewares = [sagaMiddleware, logger]; // replace thunk with sagaMiddleware

const composedEnchancements = compose(applyMiddleware(...middlewares));

const isServer = typeof window === "undefined";

export const store = createStore(
  rootReducers,
  isServer ? undefined : loadState(),
  composedEnchancements
);

sagaMiddleware.run(rootSaga); // run your root saga
