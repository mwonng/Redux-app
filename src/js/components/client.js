import {createStore} from "redux";


const reducer = function(state, action) {
  if (action.type === "INC") {
    return satte+1;
  }
  return state;
}

const store = createStore(reducer,0)

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})