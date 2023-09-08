import React, { useEffect } from 'react'

const Row = ({ data, i }) => {

    useEffect(() => {

    }, [data])


    return (
        <>{
            <tr key={i}>
                <td scope="col">{`${i}`}</td>
                <td scope="col">{data.name}</td>
                <td scope="col">{data.address}</td>
            </tr>

        }
        </>
    )
}

export default Row