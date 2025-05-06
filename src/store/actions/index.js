import api from '../../api/api';


export const fetchProducts = (queryString) => async (dispatch) =>{
    try {

        dispatch({ type: "IS_FETCHING"});

        const {data} = await api.get(`/public/products?${queryString}`);
        dispatch({
            type: "FETCH_PRODUCT",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage, 
         });

         dispatch({ type: "IS_SUCCESS"});

    } catch (error) {
        console.log(error);
        dispatch({ 
            type: "IS_ERROR" ,
            payload: error?.response?.data?.message || "Failed to product Fetch"
        });

    }
};




export const fetchCategories = () => async (dispatch) =>{
    try {

        dispatch({ type: "CATEGORY_LOADER"});

        const {data} = await api.get(`/public/category`);
        dispatch({
            type: "FETCH_CATEGORIES",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage, 
         });

         dispatch({ type: "CATEGORY_SUCCESS"});

    } catch (error) {
        console.log(error);
        dispatch({ 
            type: "IS_ERROR" ,
            payload: error?.response?.data?.message || "Failed to fetch category"
        });

    }
};


// For Cart handling work

export const addToCart = (data , qty = 1 , toast ) => 
    (dispatch , getState) => {
        // find the product
        const { products } = getState().products;
        const getProduct = products.find(
            (item) => item.productId === data.productId
        );
        
        // check stock availability of product
        const isQuantityExist = getProduct.quantity >= qty;
        // If available  add to cart
        if(isQuantityExist){
            dispatch( { type: "ADD_CART" , payload: {...data , quantity:qty } });
            toast.success(`${data?.productName} added to cart`);
            localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
        }else{
            toast.error("Out of stock");
            // handle if any error
        }
        // If not available show error message
        

};

