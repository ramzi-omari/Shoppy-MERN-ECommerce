import axios from "axios"
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants"

export const listProducts = () => async (dispatch) => {
  //redux thunk allow us to use function inside function
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    // after dispatching action, we make our request
    const { data } = await axios.get("api/products")

    // we dispatch the data SUCCESSFULY
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
