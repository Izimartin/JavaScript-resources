import { useEffect, useState } from "react";

export const useDataSource = getResourceFunc => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const result = getResourceFunc
            setResource(result);
        })();
    }, [getResourceFunc])

    return resource;
}

