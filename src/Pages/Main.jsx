import React from 'react';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';
import Limit from '../components/Limit/Limit';

const Main = () => {
    return (
        <div>
            <Limit/>
            <Table/>
            <Pagination/>
        </div>
    );
}

export default Main;
