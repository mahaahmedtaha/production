import * as types from "../Action/type";

const initialState = {
    
    loading: false,
    onclick:false,
    direct:false,
    categories: [],
    allcategory:[],
    selectedCategory:null,
    error: null,
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORY_REQUEST:
            return { ...state, loading: true };
        case types.FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                categories:action.payload,
                // onclick:true
                // loading: false,
                // totalPage: action.payload.pageCount,
            };
        case types.FETCH_CLICKCATEGORY_SUCCESS:
        return {
            ...state,
            onclick:action.payload
        };
        case types.FETCH_REMOVECATEGORY_SUCCESS:
          return initialState
        case types.FETCH_ALLCATEGORY_REQUEST:
          return { ...state, loading: true };
      
        case types.FETCH_ALLCATEGORY_SUCCESS:
        return {
            ...state,
            allcategory:action.payload.data,
            // loading: false,
            // totalPage: action.payload.pageCount,
        };
        case types.FETCH_ALLCATEGORY_FAIL:
            return { ...state, loading: false,  error: action.payload };
            
        case types.FETCH_CATEGORY_FAIL:
            return { ...state, loading: false,  error: action.payload };
        default:
            return state;
    }

}


export default CategoryReducer;