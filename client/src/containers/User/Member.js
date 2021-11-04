import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import instance from '../../_config/axios';
import { userConstants } from '../../_constants/user.constants'

const Member = props => {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        address: ''
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const mem = async () => {
            const res = await instance.get(`http://localhost:5000/user/${props.match.params.email}`)
            console.log('res',res.data)
            dispatch({ type: userConstants.GET_USER, payload: res.data })
            setUser(res.data[0])
        }
        console.log('prapo',props)
        mem()
        setLoading(false)
    }, [])

    if (loading) {
        return (<div>Loading...</div>)
    } else {
        return (
            <div>
                <h3>Details</h3>
                <div>
                    <h4>First Name: {user.first_name}</h4>
                    <h4>Middle Name: {user.middle_name}</h4>
                    <h4>Last Name: {user.last_name}</h4>
                    <h4>email: {user.email}</h4>
                    <h4>address: {user.address}</h4>
                </div>
            </div>
        )
    }


};

export default Member;