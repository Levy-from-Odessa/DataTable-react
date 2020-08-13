import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'

import {dispatchSetServerReq} from '../../reducers/wareHouse/wareHouseActions'


import styles from './Limit.module.scss'
const Limit = () => {

    const {total} = useSelector(state => state.wareHouseReducer)
    const dispatch = useDispatch()

    
    const [limitCount, setLimitCount] = useState(0);
   

    const findByLimit = (e) => {
        // if pressed enter and value ist over the count of total rows
        // send req to change params(limit)
        if(e.key==='Enter' && limitCount<total){
            dispatch(dispatchSetServerReq({limit: limitCount}))
            setLimitCount(0)
        }
    }

    return (
        <div className={styles.InputLimit}>
            <label htmlFor="">Limit: </label>
            <input type="number" 
                   onChange={ 
                       (e)=> e.target.value<=0 
                            ? 0 
                            : setLimitCount(e.target.value)}

                   onKeyPress={(e)=> findByLimit(e)}
                   value={limitCount}
            />
            <br/>
            <small>{limitCount!==0 ? 'press enter' : null}</small>
        </div>
    );
}

export default Limit;
