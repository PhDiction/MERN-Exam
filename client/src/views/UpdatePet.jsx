import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import PetForm from '../components/PetForm';
import axios from 'axios';

const UpdatePet = props => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: ""
    });

    const [error, setError] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setForm(res.data.pet))
            .catch(err => console.log(err));
    }, []);

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/edit/${props.id}`, form)
            .then(res => {
                if(res.data.error) {
                    setError(res.data.error.errors);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Pet Shelter</h1>
            <h4>Edit: {form.name}</h4>
            <PetForm onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form} error={error}/>
        </div>
    )
}

export default UpdatePet;