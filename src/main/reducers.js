import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import PersonReducer from '../components/person/PersonReducer'

const rootReducer = combineReducers({
    person: PersonReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer