import {FETCH_WAREHOUSE_FAILURE, FETCH_WAREHOUSE_SUCCESS ,SET_SERVER_REQ, LOADING} from './wareHouseTypes'

// !STATE
const initialState = {
  wareHouses: [],
  total: null,
  error:'',
  loading:true,
  serverReq: {
    limit: 100,
    order_by: 'number',
    order:'asc',
    skip:0
  }
}


// !MUTATIONS
const wareHousesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
        case FETCH_WAREHOUSE_SUCCESS:
      return{
        ...state,
        total: payload.total,
        wareHouses: [ ...payload.data],
        error: '',
        loading:false
      }
    case FETCH_WAREHOUSE_FAILURE: 
      return {
        ...state,
        wareHouses:[],
        error: payload,
        loading:false
      }
    case LOADING:
        return{
          ...state,
          wareHouses:[],
          error: '',
          loading:true
        }
    case SET_SERVER_REQ:
      return {
        ...state,
        serverReq: {...state.serverReq, ...payload},
        loading:true
        
      }
    
     
    default:
        return state
  }
};
export default wareHousesReducer