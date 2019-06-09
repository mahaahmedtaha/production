import * as types from "../Action/type";

const initialState = {
    onclicksub:false,
    loading: false,
    direct:false,
    subcategories:null,
    error: null,
}

const SubCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SUBCATEGORY_REQUEST:
            return { ...state, loading: true };
        case types.FETCH_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                subcategories:action.payload,
                onclicksub:true,
                // loading: false,
                // totalPage: action.payload.pageCount,
            };
        case types.FETCH_SUBCATEGORY_FAIL:
            return { ...state, loading: false,  error: action.payload };
        default:
            return state;
    }

}


export default SubCategoryReducer;