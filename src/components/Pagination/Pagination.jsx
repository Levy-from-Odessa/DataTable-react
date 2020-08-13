import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {dispatchSetServerReq} from '../../reducers/wareHouse/wareHouseActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

import styles from './Pagination.module.scss'

const Pagination = () => {
    const dispatch = useDispatch()


    //total doesnt change and for better serve count of pages need to read count 
    // of houses that was recived from db
    const {wareHouses, serverReq} = useSelector(state => state.wareHouseReducer)
    
    const [paginationSector, setPaginationSector] = useState([0])
    const [paginationIndex, setPaginationIndex] = useState(0)

    // all the allowd pages with count of rows (for 1 PAGE = 10 ROWS)
    const maxPages = wareHouses.length/10


    useEffect(() => {
        const allPages = []
        // detect currecnt page by skip (10 skips(row) = 1 page)
        const selectedPage = serverReq.skip===0 ? 0 : serverReq.skip/10

        // make a new array to show all pages by btns
        for(let i=0; i<maxPages; i++){
            allPages.push({index: i, active:false})
        }
        // for current page change data.active = active
        if(allPages.length>=1){
            allPages[selectedPage].active=true
        }      
        // shows part of pages
        const selectedPages = allPages.splice(paginationIndex,5)
    
        setPaginationSector(selectedPages) 
        
    }, [paginationIndex, wareHouses, maxPages, serverReq.skip]);
      



    const selectPageHandle = (item) => {
        // send req to set params(skip)
        dispatch(dispatchSetServerReq({skip: item.index*10}))   
    }


    return (
        <div>
            
            <div className={styles.Pagination}>
                {/* left BTN */}
                <button 
                // push start for show pages
                    onClick={() =>(
                                paginationIndex<=0 
                                    ? null 
                                    : setPaginationIndex(paginationIndex-1)
                                )
                            }>
                            <FontAwesomeIcon icon={faArrowLeft} />
                </button>


                {/* paginatuins BTNS */}
                {
                    paginationSector.map((item, index) => (
                        <button key={index}
                           onClick={() => selectPageHandle(item) }
                           className={item.active ? styles.active : ''}
                        >
                            {item.index+1}
                        </button>
                    ))
                }


                {/* right BTN */}

                <button 
                // push start for show pages
                    onClick={() => (
                                paginationIndex>=maxPages 
                                    ? null 
                                    : setPaginationIndex(paginationIndex+1)
                                )
                            }>
                            <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
                     
        </div>
    );
}

export default Pagination;
