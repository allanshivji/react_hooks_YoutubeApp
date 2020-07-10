import { useState, useEffect } from 'react';

import youtube, { baseParams } from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (myTerm) => {
        const response = await youtube.get('/search', {
            params: {
                ...baseParams,
                q: myTerm
            }
        });
        setVideos(response.data.items);
    };

    return [videos, search];
}

export default useVideos;