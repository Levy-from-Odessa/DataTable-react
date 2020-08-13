import React from 'react';

const TableStroke = ({house}) => {
    const {name, city, number } = house
    return (
        <>
            <tr>
                <td>{number}</td>
                <td>{city}</td>
                <td> {name}</td>
            </tr>
        </>
    );
}

export default TableStroke;
