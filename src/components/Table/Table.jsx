import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {fetchWareHouses} from '../../reducers/wareHouse/wareHouseActions'
import {dispatchSetServerReq} from '../../reducers/wareHouse/wareHouseActions'


import './Table.module.scss'
import TableStroke from './TableStroke/TableStroke'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import Loader from '../../UI/Loader/Loader';

  
import styles from './Table.module.scss'
const Table = () => {

    //get data from store by using useSelector
    const {wareHouses, loading, serverReq} = useSelector(state => state.wareHouseReducer)
    // order to set (asc/desc)
    const [order, setOrder] = useState(serverReq.order);
    // page of list houses (10)
    const [listWareHouses, setListWareHouses] = useState([])
    

    
    //make request to store
    const dispatch = useDispatch()
    

    useEffect(() => {
        const allWareHouses = [...wareHouses]
         // page of list houses (10)
        setListWareHouses([ ...allWareHouses.splice(0,10)])
    }, [wareHouses]);

    useEffect(() => {
        // chake changes in store and update data
        const getData = async() =>{
            try {
                dispatch(fetchWareHouses(serverReq))
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [serverReq, dispatch]);

    // fun to set localy and i store recived order 
    // send req to change params(order)
    const orderHandle = () => {
        const newOreder = order==='desc' ? 'asc' : 'desc'
        setOrder(newOreder)
        dispatch(dispatchSetServerReq({order: order}))
    }


    return (
        <div className={styles.TableDate}> 
        
            {
                loading
                    ? <Loader/>
                    : <table >
                        <thead>
                            <tr>
                                <th>
                                    Number
                                    <button onClick={()=> orderHandle()}>
                                        {
                                            // change the arrow depend on order
                                            order==='asc'
                                                ? <FontAwesomeIcon icon={faArrowUp} />
                                                : <FontAwesomeIcon icon={faArrowDown} />
                                        } 
                                    </button>
                                    
                                </th>
                                <th>CIty</th>
                                <th>Name</th>
                            </tr>
                            
                        </thead>
        
                        <tbody>
                            {
                                
                                listWareHouses.map((house,index) => 
                                    (<TableStroke house={house} key={house.ref+index}/>)
                                )
                            }
                        </tbody>
                    </table>
            }
           
           
        </div>
    );
}

export default Table;
