import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import instance from '../../_config/axios';
import { userConstants } from '../../_constants/user.constants'
import { Link } from 'react-router-dom'

const Group = props => {
    const dispatch = useDispatch()

    const [families, setFamily] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const all_members = async () => {
            const res = await instance.get(`http://localhost:5000/family/${props.match.params.surname}`)
            console.log('wwww', res)
            dispatch({ type: userConstants.GET_USER, payload: res.data })
            setFamily(res.data)
        }
        console.log('fafa', families)
        all_members()
        setLoading(false)
    }, [])

    if (loading) {
        return (<div>Loading...</div>)
    } else {
        return (
            <div>
                <h3>{props.match.params.surname}</h3>
                {families.map((fam) => (
                    <div key={fam.email}>
                        <Link
                            to={`/user/${fam.email}`}
                            className="link-title"
                        >
                            {fam.first_name}
                        </Link>
                    </div>
                ))}
            </div>
        )
    }


};

export default Group;