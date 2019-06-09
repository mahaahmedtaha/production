import {
    FETCH_SUBCATEGORY_REQUEST,
    FETCH_SUBCATEGORY_SUCCESS,
    FETCH_SUBCATEGORY_FAIL,

} from "./type";
import axios from "axios";
import { API_ENDPOINT } from '../../AppConfig';
import { hideLoading } from 'react-redux-loading-bar';
export function fetchSubCategory(id) {
    return (dispatch, getState) => {
        let uri = `${API_ENDPOINT}subcategories/${id}`;
        // if(id){
        //     uri+=`category=${id}`
        // }
        dispatch({ type: FETCH_SUBCATEGORY_REQUEST });
        axios.get(uri)
            .then(response => {
                dispatch({ type: FETCH_SUBCATEGORY_SUCCESS, payload: response.data });
                dispatch(hideLoading());
            }).catch(error => {
                dispatch({ type: FETCH_SUBCATEGORY_FAIL, payload: error })
                dispatch(hideLoading());

            })
    }
}
