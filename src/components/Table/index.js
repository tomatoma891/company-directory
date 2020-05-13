import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import "./style.css"
import Nav from '../Nav';


const Table = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [sortOrder, setSortOrder] = useState('ascend');

    useEffect(() => {
        API.getUsers().then(results => {
            setUsers(results.data.results)
            setFilteredUsers(results.data.results)
        })
    }, [setSortOrder]);

    const searchFilter = (e) => {
        const filter = e.target.value;
        console.log(filter);
        const filteredUserList = users.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        console.log(filteredUserList);
        setFilteredUsers(filteredUserList);
    }


    return (
        <div>

            <Nav searchFilter={searchFilter} />


            <div className="row">
                {filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <div class="col-md-3">
                            <div className="card">
                                <tr key={login.uuid}>
                                    <div className="img-container">
                                        <img alt={name} src={picture.thumbnail} />
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <strong>Name:</strong> {name.first} {name.last}
                                            </li>
                                            <li>
                                                <strong>Phone:</strong> {phone}
                                            </li>
                                            <li>
                                                <strong>Email:</strong> {email}
                                            </li>
                                            <li>
                                                <strong>Age:</strong> {dob.age}
                                            </li>
                                        </ul>
                                    </div>
                                </tr>
                            </div>
                        </div>
                    );
                })};
                </div>

        </div>

    );
}



export default Table;