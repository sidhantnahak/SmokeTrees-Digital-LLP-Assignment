import React, { memo, useEffect } from 'react'
import Row from './Row'
import { useDispatch, useSelector } from 'react-redux'
import { getall_user } from './redux/userAction'
import Loader from './Loader'

const Users = () => {
    const { users, loading } = useSelector(state => state.alluser)
    const dispatch = useDispatch();
    console.log("here")


    useEffect(() => {
        dispatch(getall_user());
    }, [dispatch])
    let i = 1, j = 1;



    return (
        <>
            {loading ? <Loader /> :

                <>{users && users.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Serial No.</th>
                                <th scope="col">Username</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>



                            {users && users.map((e) => {
                                return <Row key={j++} data={e} i={i++} />
                            })
                            }

                        </tbody>
                    </table>
                    :users&& <h3 className='text-center'>No user found</h3>
                }
                </>
            }

        </>

    )
}

export default memo(Users)