import { useState } from 'react';

import './Search.modules.scss';

import axios from 'axios';

import moment from 'moment/moment';

import { useEffect } from 'react';

function Search() {
    const [videos, setVideos] = useState([]);

    const [query, setQuery] = useState('');

    useEffect(() => {});

    const handleSearch = async () => {
        // let res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        //     part: 'snippet',
        //     maxResults: 20,
        //     key: 'AIzaSyAmn1YQSykgcR2QqTuW2czMGtEJrbeNpbM',
        //     type: 'video',
        //     q: query,
        // });

        let res = await axios({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 20,
                key: 'AIzaSyAmn1YQSykgcR2QqTuW2czMGtEJrbeNpbM',
                type: 'video',
                q: query,
            },
        });

        console.log(res);

        if (res && res.data && res.data.items) {
            let raw = res.data.items;

            let result = [];

            if (raw && raw.length > 0) {
                raw.map((item) => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object);
                });
            }
            console.log(result);
            setVideos(result);
        }

        console.log(res);
    };

    return (
        <div className="youtube-search-content">
            <div className="youtube-search">
                <input placeholder="Search ..." value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="button" className="btn btn-danger" onClick={handleSearch}>
                    Search
                </button>
            </div>
            {videos &&
                videos.length > 0 &&
                videos.map((item) => {
                    return (
                        <div className="youtube-result" key={item.id}>
                            <div className="left">
                                <iframe
                                    className="iframe-video"
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="Cách hoạt động của hệ thống Tìm kiếm trên YouTube"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="right">
                                <div className="title">{item.title}</div>
                                <div className="created-at">
                                    Created at {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                                </div>
                                <div className="author">Author: {item.author}</div>
                                <div className="description">{item.description}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Search;
