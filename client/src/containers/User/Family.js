import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import instance from '../../_config/axios';
import { userConstants } from '../../_constants/user.constants'
import { Link } from 'react-router-dom'

const Family = props => {
    const dispatch = useDispatch()

    const [families, setFamily] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const all_fam = async () => {
            const res = await instance.get('http://localhost:5000/user/all/family')
            console.log(res.data)
            dispatch({ type: userConstants.GET_USER, payload: res.data })
            setFamily(res.data)
        }

        all_fam()
        setLoading(false)
    }, [])

    if (loading) {
        return (<div>Loading...</div>)
    } else {
        return (
            <div>
                <h3>Family List</h3>
                {families.map((fam) => (
                    <div key={fam}>
                        <Link
                            to={`/families/${fam}`}
                            className="link-title"
                        >
                            {fam}
                        </Link>
                    </div>
                ))}
            </div>
        )
    }


};

export default Family;