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
        console.log("addToCart action==> ", getState());
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


export const increaseCartQuantity = (data, toast, currentQuantity, setCurrentQuantity) =>
    (dispatch, getState) => {
        // Find the product
        const { products } = getState().products;
        console.log(getState());
        console.log("Product in index action ==> " , products);
        console.log("Data ==> " , data);

        const getProduct = products.find(
            (item) => item.productId === data.productId
        );



        const isQuantityExist = getProduct.quantity >= currentQuantity + 1 ;

                if(isQuantityExist){
                    const newQuantity = currentQuantity + 1 ;
                    setCurrentQuantity(newQuantity);
                    dispatch({
                        type: "ADD_CART",
                        payload: { ...data , quantity: newQuantity },
                    });
                    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));

                }else{
                    toast.error("Quantity of Product reached to limit");
                }

};


export const decreaseCartQuantity = (data, newQuantity) => (dispatch, getState) => {

    dispatch({
        type: "ADD_CART",
        payload: {...data , quantity: newQuantity},
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));


};


export const removeFromCart = (data, toast ) => ( dispatch, getState ) => {
  dispatch({ type: "REMOVE_CART" , payload: data});
  toast.success(`${data.productName} removed from cart`);
  localStorage.setItem("cartItems" , JSON.stringify(getState().carts.cart));
  
};


export const authenticateSignInUser 
    = (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
        try {
            setLoader(true);
            const { data } = await api.post("/auth/signin", sendData);
            dispatch({ type: "LOGIN_USER", payload: data });
            localStorage.setItem("auth", JSON.stringify(data));
            reset();
            toast.success("Login Success");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "Internal Server Error");
        } finally {
            setLoader(false);
        }
};




export const registerNewUser 
    = (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
        try {
            setLoader(true);
            const { data } = await api.post("/auth/signup", sendData);
            reset();
            toast.success( data?.message ||  "User Registrated Successfully !" );
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || error?.response?.data?.message ||"Internal Server Error");
        } finally {
            setLoader(false);
        }
};




