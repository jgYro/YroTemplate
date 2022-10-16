import axios from "axios";
import { useState, useEffect } from 'react';

const GetComponent = () => {
    const [data, setData] = useState<string>('');

    useEffect(() => {
        axios.get("/api/")
            .then((response) => {
                setData(response.data)
            })
    })

    return (
        <div className="font-mono text-black bg-red-300 rounded-md">
            {data}
        </div>
    )
}

export default GetComponent
