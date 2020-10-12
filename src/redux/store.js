import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { TodoReducer as todo } from "./reducers";

const store = createStore(
    todo,
    compose(
        applyMiddleware(logger)
    )
)

export default store;
