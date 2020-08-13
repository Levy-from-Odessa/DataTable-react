
import {FETCH_WAREHOUSE_SUCCESS, FETCH_WAREHOUSE_FAILURE,SET_SERVER_REQ, LOADING} from './wareHouseTypes'
import Services from '../../Services/Api'

// !ACTIONS


// send get req to get all res from db and set it in store
export const fetchWareHouses = serverReq => {
    return async(dispatch)=> {
        try {
            dispatch(loading)
            const response = (await Services.getWareHouses(serverReq)).data
            console.log(response);
            dispatch(fetchWareHousesSuccess(response))
        } catch (error) {
            dispatch(fetchWareHousesFailure(error))
        }
    }
}

// change axios req with params
export const dispatchSetServerReq = req => {
 
  return {
    type: SET_SERVER_REQ,
    payload: req
  }
}


// call action to set loading 
export const loading = () => {
    return {
      type: LOADING
    }
}

// if a get(get all) req was succeed it would set a res data in store 
export const fetchWareHousesSuccess = WareHouses => {
    return {
      type: FETCH_WAREHOUSE_SUCCESS,
      payload: WareHouses
    }
  }

// if a ANY of req wasnt succed it would recive a res error and sent in a store
export const fetchWareHousesFailure = error => {
    return {
      type: FETCH_WAREHOUSE_FAILURE,
      payload: error
    }
  }
