import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const Main = props => {
    const [pets, setPets] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data.pets))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col">
                    <h1>Pet Shelter</h1>
                    <h4>These pets are looking for a good home</h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   pets ? 
                                pets.map((pet,i) =>{
                                    return <>
                                        <tr key={i}>
                                            <td key={i}>{pet.name}</td>
                                            <td key={i}>{pet.type}</td>
                                            <td key={i}><Link to={`/detail/${pet._id}`}>Detail</Link> | <Link to={`/update/${pet._id}`}>Edit</Link></td>
                                        </tr>
                                    </>
                                }) : ""
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-2">
                    <Link to="/create">add a pet to the shelter</Link>
                </div>
            </div>
        </div>
    )

}

export default Main;