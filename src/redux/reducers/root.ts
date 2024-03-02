import { combineReducers } from "redux";
import NodesReducer from "./nodes.reducer";
import EdgeReducer from "./edges.reducer";
import { RigthContentReducer } from "./rigthContent.reducer";

export default combineReducers({
    NodesReducer,
    EdgeReducer,
    RigthContentReducer
})