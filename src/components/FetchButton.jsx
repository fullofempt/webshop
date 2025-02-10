import React from 'react'

const FetchButton = ({ onClick }) => {
    return (
        <button className='FetchBtn' onClick={onClick}>Загрузить данные</button>
    )
};
export default FetchButton;