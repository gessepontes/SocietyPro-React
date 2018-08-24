import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import { PLAYER_FETCHED, PLAYER_ID_FETCHED } from './PlayerConst'

const BASE_URL = 'http://localhost:53487/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/player/GetPlayerTeam/1`)
    return {
        type: PLAYER_FETCHED,
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/jogadorapi/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(id) {
    const request = axios.get(`${BASE_URL}/jogadorapi/${id}`)
    return {
        type: PLAYER_ID_FETCHED,
        payload: request
    }
}

export function init() {
    return [
        getList(),
        initialize('playerForm', INITIAL_VALUES)
    ]
}