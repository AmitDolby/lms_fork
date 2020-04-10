import { } from '../actions/types';

const INITITIAL_STATE = {

};

export default (state = INITITIAL_STATE, action) => {

    switch (action.type) {

        /* case GET_DASHDATA:
            return {
                ...state,
                DashDetails: action.payload.data.data
            };

            case LOGIN:
            return {
                ...state,
                token: action.payload.data.data.X_Auth_Token,
                user: action.payload.data.data.user_details,
                mydetails: action.payload.data
            };

            case GET_BRANDS:
            return {
                ...state,
                BrandDetails: action.payload.data.data
            };

            case GET_CATEGORY:
            return {
                ...state,
                CategoryDetails: action.payload.data.data
            };

            case GET_SUBCATEGORY:
            return {
                ...state,
                SubCategoryDetails: action.payload.data.data
            };

            case GET_COUPONS:
            return {
                ...state,
                CouponDetails: action.payload.data.data
            };

            case GET_USERS:
            return {
                ...state,
                UserDetails: action.payload.data.data
            };

            case GET_ADMINS:
            return {
                ...state,
                AdminDetails: action.payload.data.data
            };

            case GET_PRODUCTS:
            return {
                ...state,
                ProductDetails: action.payload.data.data
            };

            case GET_QUERY:
            return {
                ...state,
                QueryDetails: action.payload.data.data
            };

            case GET_BANNER:
            return {
                ...state,
                BannerDetails: action.payload.data.data
            };

            case GET_SKU:
            return {
                ...state,
                SKUDetails: action.payload
            };

            case GET_ABOUT:
            return {
                ...state,
                AboutDetails: action.payload.data.data
            };

            case GET_BLOG:
            return {
                ...state,
                BlogDetails: action.payload.data.data
            };

            case GET_ORDERS:
            return {
                ...state,
                OrderDetails: action.payload.data.data
            };

            case SET_LOADING_TRUE:
            return {
                ...state,
                loading: true
            };

            case SET_LOADING_FALSE:
            return {
                ...state,
                loading: false
            };

            case LOGOUT:
            return INITITIAL_STATE; */

        default:
            return state;
    }
};
