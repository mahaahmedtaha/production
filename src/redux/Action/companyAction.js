import {
    FETCH_COMPANY_REQUEST,
    FETCH_COMPANY_SUCCESS,
    FETCH_COMPANY_FAIL,

} from "./type";
import axios from "axios";
import { API_ENDPOINT } from '../../AppConfig';
import { hideLoading } from 'react-redux-loading-bar';

export function fetchCompany() {
    return (dispatch, getState) => {
        let uri = `${API_ENDPOINT}company`;
        dispatch({ type: FETCH_COMPANY_REQUEST });
        axios.get(uri)
            .then(response => {
                dispatch({ type: FETCH_COMPANY_SUCCESS, payload: response.data });
                dispatch(hideLoading());
            }).catch(error => {
                dispatch({ type: FETCH_COMPANY_FAIL, payload: error })
                dispatch(hideLoading());

            })
    }
}
