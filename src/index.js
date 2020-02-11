// {
//     contact: 'James Smith'
// }
// {
//     type: ADD_CONTACT,
//     payload: {
//         company: 'Professional Boxer',
//         name: 'Evander Hollyfield',
//         phoneNumber: '770-913-2267',
//         email: 'evanderH@gmail.com',
//         placeMet: 'Turner Field',
//         reachedOutSecondTime: 'True',
//         isCompanyHiring: 'True',
//         haveSubmittedResume: 'True'

//     }
// }

// {
//     jobs: 'Abelton'
// }
// {
//     type: ADD_JOB,
//     payload: {
//         company: 'Abelton Live',
//         contactPerson: 'Scott Storch',
//         phoneNumber: '990-913-2267',
//         email: 'abletonhq@live.com',
//         timesInterviewed: '1',
//         interviewType: 'in-person',
//         sentThankyYouNote: 'True',
//         isCompanyHiring: 'True',
//         position: 'Software Sales',
//         haveSubmittedResume: 'True',
//         levelOfHopeToGet: 10
//     }
// }

// {
//     type: isFormVisible,
//     payload: {
//         isFormVisible: true,
//     }
// }

import { 
    createStore,
    combineReducers
} from 'redux';

const ADD_CONTACT = 'ADD_CONTACT'

const defaultContactsState = { contacts: ''} ;
function contacts(state=defaultContactsState, action) {
    const newState = { ...state };
    switch (action.type) {
        case ADD_CONTACT:
            newState.contacts = action.payload;
            break;
        default:
            // console.log('im right here');
            break;
    }
    return newState;
}

function actionUpdateContact() {
    return {
        type: ADD_CONTACT,
        payload: {
            company: 'Professional Boxer',
            name: 'Evander Hollyfield',
            phoneNumber: '770-913-2267',
            email: 'evanderH@gmail.com',
            placeMet: 'Turner Field ol-skool Braves meet-up',
            reachedOutSecondTime: 'True',
            isCompanyHiring: 'True',
            haveSubmittedResume: 'True'
    
        }
    }
}

const ADD_JOB = 'ADD_JOB'

const defaultJobsState = { jobs: ''} ;
function jobs(state=defaultJobsState, action) {
    const newState = { ...state };
    switch (action.type) {
        case ADD_JOB:
            newState.jobs = action.payload;
            break;
        default:
            // console.log('im right here jobsjobsaddjobspleasegetjob');
            break;
    }
    return newState;
}

function actionUpdateJob() {
    return {
        type: ADD_JOB,
        payload: {
            company: 'Abelton Live',
            contactPerson: 'Scott Storch',
            phoneNumber: '990-913-2267',
            email: 'abletonhq@live.com',
            timesInterviewed: '1',
            interviewType: 'in-person',
            sentThankyYouNote: 'True',
            isCompanyHiring: 'True',
            position: 'Software Sales',
            haveSubmittedResume: 'True',
            levelOfHopeToGet: 10
        }
    }
}

const IS_FORM_VISIBLE = 'IS_FORM_VISIBLE'

const defaultFormState = { formVisible: false} ;
function forms(state=defaultFormState, action) {
    const newState = { ...state };
    switch (action.type) {
        case IS_FORM_VISIBLE:
            newState.formVisible = action.payload;
            break;
        default:
            // console.log('im right here jobsjobsaddjobspleasegetjob');
            break;
    }
    return newState;
}

function actionFormVisibility() {
    return {
        type: IS_FORM_VISIBLE,
        payload: {
            formVisible: true,
        }
    }
}

const rootReducer = combineReducers({
    // part of tree : reducer function
    contacts: contacts,
    jobs: jobs,
    forms: forms
});

const store = createStore(  rootReducer,                             
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
window.store = store;
window.actionUpdateContact = actionUpdateContact;
store.subscribe(() => {
// just for debugging!
console.table(store.getState());
});
store.dispatch(actionUpdateContact())
store.dispatch(actionUpdateJob())
store.dispatch(actionFormVisibility())