import React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const DeleteBtn = props => {

    const onClickHandler = () => {
        axios.delete(`http://localhost:8000/api/pets/delete/${props.id}`)
            .then(res => navigate("/"))
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    return (
        <button onClick={onClickHandler} className="btn-sm btn-danger">Adopt {props.name}</button>
    )
}

export default DeleteBtn;