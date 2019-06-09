import {
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_ALLCATEGORY_REQUEST,
    FETCH_ALLCATEGORY_SUCCESS,
    FETCH_ALLCATEGORY_FAIL,
    FETCH_CATEGORY_FAIL,
    FETCH_REMOVECATEGORY_SUCCESS,
    FETCH_CLICKCATEGORY_SUCCESS,

} from "./type";
import axios from "axios";
import { API_ENDPOINT } from '../../AppConfig';
import { hideLoading } from 'react-redux-loading-bar';
export function fetchCategory(id) {
    return (dispatch, getState) => {
        let uri = `${API_ENDPOINT}categories/`;
        if(id){
            uri+=id
        }
        dispatch({ type: FETCH_CATEGORY_REQUEST });
        axios.get(uri)
            .then(response => {
                dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: response.data });
                dispatch(hideLoading());
            }).catch(error => {
                dispatch({ type: FETCH_CATEGORY_FAIL, payload: error })
                dispatch(hideLoading());

            })
    }
}
export function fetchAllCategory() {
    return (dispatch, getState) => {
        let uri = `${API_ENDPOINT}categories/`;
        dispatch({ type: FETCH_ALLCATEGORY_REQUEST });
        axios.get(uri)
            .then(response => {
                dispatch({ type: FETCH_ALLCATEGORY_SUCCESS, payload: response.data });
                dispatch(hideLoading());
            }).catch(error => {
                dispatch({ type: FETCH_ALLCATEGORY_FAIL, payload: error })
                dispatch(hideLoading());

            })
    }
}
export function removeCategory(){
    return (dispatch, getState) => {
        dispatch({ type: FETCH_REMOVECATEGORY_SUCCESS });
    }
    
}

export function clickCategory(status){
    return (dispatch, getState) => {
        dispatch({ type: FETCH_CLICKCATEGORY_SUCCESS ,payload: status });
    }
    
}