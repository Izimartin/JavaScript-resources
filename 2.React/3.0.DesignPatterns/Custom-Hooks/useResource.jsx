import { useEffect, useState } from "react";
import axios from "axios";

export const useResource = resourceURL => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceURL)
            setResource(response.data);
        })();
    }, [resourceURL])

    return resource;
}
