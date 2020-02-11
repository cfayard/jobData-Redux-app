
import { 
    createStore,
    combineReducers
} from 'redux';

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

const defaultTodosState = { todos: ''};

function todos(state=defaultTodosState, action) {
    const newState = { ...state };
    switch (action.type) {
        case ADD_TODO:
            newState.todos = action.payload;
            break;
        case REMOVE_TODO:
            newState.todos = action.payload;
            break;
        case TOGGLE_COMPLETED:
            newState.todos = action.payload;
            break;
        default:
            // console.log('im right here');
            break;
    }
    return newState;
}

function actionAddTodo() {
    return {
        type: ADD_TODO,
        payload: {
            todo1: 'aljfl;ajbblajlbaljbaljbaljb',  
        }
    }
}
function actionRemoveTodo() {
    return {
        type: REMOVE_TODO,
        payload: {
            todo1: '',  
        }
    }
}
function actionToggleCompleted() {
    return {
        type: TOGGLE_COMPLETED,
        payload: {
            complete: true,  
        }
    }
}

const ADD_JOB = 'ADD_JOB'


// const rootReducer = combineReducers({
//     // part of tree : reducer function
//     contacts: contacts,
//     jobs: jobs,
//     forms: forms
// });

const store = createStore(  todos,                             
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
window.store = store;
window.actionAddTodo = actionAddTodo;
window.actionRemoveTodo = actionRemoveTodo;
store.subscribe(() => {
// just for debugging!
console.table(store.getState());
});
store.dispatch(actionUpdateContact())
store.dispatch(actionUpdateJob())
store.dispatch(actionFormVisibility())