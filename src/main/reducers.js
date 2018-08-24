import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

// import PersonReducer from '../components/person/PersonReducer'
// import PlayerReducer from '../components/player/PlayerReducer';

const rootReducer = combineReducers({
    // person: PersonReducer,
    // player: PlayerReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer