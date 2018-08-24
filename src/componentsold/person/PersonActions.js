import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import { PERSON_FETCHED, PERSON_ID_FETCHED } from './PersonConst'

const BASE_URL = 'http://localhost:53487/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/pessoa`)
    return {
        type: PERSON_FETCHED,
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
        axios[method](`${BASE_URL}/pessoa/${id}`, values)
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
    const request = axios.get(`${BASE_URL}/pessoa/${id}`)
    return {
        type: PERSON_ID_FETCHED,
        payload: request
    }
}

export function init() {
    return [
        getList(),
        initialize('personForm', INITIAL_VALUES)
    ]
}