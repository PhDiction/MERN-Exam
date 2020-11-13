import React from 'react';
import {navigate, Link} from '@reach/router';

const PetForm = props => {

    return (
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col">
            <form className="border p-5" onSubmit={props.onSubmitHandler}>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        Pet Name: <input onChange={props.onChangeHandler} type="text" name="name" className="form-control" value={props.form.name}></input>
                        {
                            props.error.name ?
                                <span className="text-danger">{props.error.name.message}</span>
                                : ""
                        }
                    </div>
                    <div className="form-group">
                        Pet Type: <input onChange={props.onChangeHandler} type="text" name="type" className="form-control" value={props.form.type}></input>
                        {
                            props.error.type ?
                                <span className="text-danger">{props.error.type.message}</span>
                                : ""
                        }
                    </div>
                    <div className="form-group">
                        Pet Description: <input onChange={props.onChangeHandler} type="text" name="description" className="form-control" value={props.form.description}></input>
                        {
                            props.error.description ?
                                <span className="text-danger">{props.error.description.message}</span>
                                : ""
                        }
                    </div>
                </div>
                <div className="col">
                    <p>Skills (optional)</p>
                    <div className="form-group">
                        Skill 1: <input onChange={props.onChangeHandler} type="text" name="skill_1" className="form-control" value={props.form.skill_1}></input>
                    </div>
                    <div className="form-group">
                        Skill 2: <input onChange={props.onChangeHandler} type="text" name="skill_2" className="form-control" value={props.form.skill_2}></input>
                    </div>
                    <div className="form-group">
                        Skill 3: <input onChange={props.onChangeHandler} type="text" name="skill_3" className="form-control" value={props.form.skill_3}></input>
                    </div>
                </div>
            </div>
                <button type="submit" className="btn btn-primary text-light">Add Pet</button>
            </form>
            </div>
            <div className="col-2">
            <Link to={"/"}>back to home</Link>
            </div>
        </div>
    )
}

export default PetForm;