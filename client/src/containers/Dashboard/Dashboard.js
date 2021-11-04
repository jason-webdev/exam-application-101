import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import instance from '../../_config/axios';
import { userConstants } from '../../_constants/user.constants'

const Dashboard = props => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        address: '',
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await instance.post('http://localhost:5000/user/add', user)
        dispatch({ type: userConstants.ADD_USER , payload: res.data})
        setUser({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        address: '',})
        if(res.data.message){
            setError(res.data.message)
        }
        setLoading(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    if (loading) {
        return (<div>Loading...</div>)
    } else {
        return (
            <div className="container top-space">
                <form onSubmit={onSubmit} className="card bg-light border-secondary mx-auto">
                    <div className="card-body">
                        <div className="card-header text-center bg-light">
                            <span className="card-title bold">
                                Add Member
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                value={user.first_name}
                                onChange={handleChange}
                                className="form-control"
                                autoFocus
                                required
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Middle Name</label>
                            <input
                                type="text"
                                name="middle_name"
                                placeholder="Middle Name"
                                value={user.middle_name}
                                onChange={handleChange}
                                className="form-control"
                                required
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={user.last_name}
                                onChange={handleChange}
                                className="form-control"
                                required
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={handleChange}
                                className="form-control"
                                required
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={user.address}
                                onChange={handleChange}
                                className="form-control"
                                required
                            ></input>
                        </div>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <button type="submit" className="btn btn-primary">
                                Add
                            </button>
                        </div>
                        {error && <p>{error}</p>}
                    </div>
                </form>
            </div>
        )
    }
};

export default Dashboard;