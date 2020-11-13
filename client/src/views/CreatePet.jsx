import React, {useState} from 'react';
import {navigate} from '@reach/router';
import PetForm from '../components/PetForm';
import axios from 'axios';


const CreatePet = props => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: ""
    });

    const [error, setError] = useState({});

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", form)
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
        <div className="text-center">
            <h1>Pet Shelter</h1>
            <h4>Know a pet needing a home?</h4>
            <PetForm onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form} error={error}/>
        </div>
    )
}

export default CreatePet;