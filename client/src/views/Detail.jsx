import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';
import DeleteBtn from '../components/DeleteBtn';

const Detail = props => {
    const [form, setForm] = useState({
        _id: "",
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: ""
    });


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setForm(res.data.pet))
            .then(res => console.log(form))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
        <div className="row">
            <div className="col">
                <h1>Pet Shelter</h1>
                <h4>Details about: {form.name}</h4>
            </div>
            <div className="col-3">
                
            </div>
            <div className="col">
                <Link className="d-block" to={"/"}>back to home</Link>
                <DeleteBtn className="d-block" id={form._id} name={form.name}/>
            </div>
        </div>
        <div className="row">
        <div className="col-2">
        </div>
        <div className="col border p-5">
            <p><b>Pet type: </b>{form.type}</p>
            <p><b>Description: </b>{form.description}</p>
            <p><b>Skills: </b>{form.skill_1 ? form.skill_1+"," :""} {form.skill_2 ? form.skill_2+"," :""} {form.skill_3}</p>
        </div>
        <div className="col-2">
        </div>
    </div>
    </>
    )
}

export default Detail;