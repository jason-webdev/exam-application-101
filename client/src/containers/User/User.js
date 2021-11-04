import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import instance from '../../_config/axios';
import { userConstants } from '../../_constants/user.constants'

const User = props => {
    const dispatch = useDispatch()

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const all_users = async () => {
            const res = await instance.get('http://localhost:5000/user/all')
            console.log(res.data)
            dispatch({ type: userConstants.GET_USER, payload: res.data })
            setState(res.data)
        }

        all_users()
        setLoading(false)
    }, [])

    if (loading) {
        return (<div>Loading...</div>)
    } else {
        return (
            <div>
                <h3>User List</h3>
                {state.map((user) => (
                    <div key={user.email}>
                        {user.first_name} {user.last_name}
                    </div>
                ))}
            </div>
        )
    }


};

export default User;