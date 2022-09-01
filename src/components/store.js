import studentRed from './reducer'
import { addList } from './action';

const {createStore} =require("redux")
const store=createStore(studentRed);

store.dispatch(addList());
store.subscribe(()=>{console.log("added in the list"),getState()})
store.dispatch(addList());
store.dispatch(addList());
store.dispatch(addList());
store.dispatch(addList());