import { combineReducers } from "redux";
import NodesReducer from "./nodes.reducer";
import EdgeReducer from "./edges.reducer";

export default combineReducers({
    NodesReducer,
    EdgeReducer
})