import { PLAYER_FETCHED, PLAYER_ID_FETCHED, PLAYER_CREATE, PLAYER_UPDATE, PLAYER_DELETE } from './PlayerConst'

const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAYER_FETCHED:
            return { ...state, list: action.payload.data }
        case PLAYER_ID_FETCHED:
            return { ...state, list: action.payload.data }
        case PLAYER_CREATE:
            return { ...state, list: action.payload.data }
        case PLAYER_UPDATE:
            return { ...state, list: action.payload.data }
        case PLAYER_DELETE:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}