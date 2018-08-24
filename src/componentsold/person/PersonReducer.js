import { PERSON_FETCHED, PERSON_ID_FETCHED, PERSON_CREATE, PERSON_UPDATE, PERSON_DELETE } from './PersonConst'

const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PERSON_FETCHED:
            return { ...state, list: action.payload.data }
        case PERSON_ID_FETCHED:
            return { ...state, list: action.payload.data }
        case PERSON_CREATE:
            return { ...state, list: action.payload.data }
        case PERSON_UPDATE:
            return { ...state, list: action.payload.data }
        case PERSON_DELETE:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}