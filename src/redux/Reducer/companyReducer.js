import * as types from "../Action/type";

const initialState = {
    loading: false,
    company: [],
    error: null,
}

const CompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_COMPANY_REQUEST:
            return { ...state, loading: true };
        case types.FETCH_COMPANY_SUCCESS:
            return {
                ...state,
                company:action.payload.data,
                loading: false,
                totalPage: action.payload.pageCount,
            };
        case types.FETCH_COMPANY_FAIL:
            return { ...state, loading: false,  error: action.payload };
        default:
            return state;
    }

}

export default CompanyReducer