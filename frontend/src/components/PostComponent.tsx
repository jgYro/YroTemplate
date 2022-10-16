import axios from "axios";
import { useState, useEffect } from 'react';

const PostComponent = () => {
    const [data, setData] = useState<string>('');

    const payload = { "data": "This is the Body of the Post Request" }
    useEffect(() => {
        axios.post("/api/", payload)
            .then((response) => {
                setData(response.data)
            })
    })

    return (
        <div className="font-mono text-black bg-blue-300 rounded-md">
            {data}
        </div>
    )
}

export default PostComponent
