import React, { useState, useEffect } from "react";
import '../assets/global.scss';

const ListItem = ({ icon, artist, name, index, data, selectedSong, setSelectedSong }) => {
    const [duration, setDuration] = useState('');

    useEffect(() => {
        
        const audio = new Audio(data.url);
        audio.addEventListener('loadedmetadata', () => {
            
            const minutes = Math.floor(audio.duration / 60);
            const seconds = Math.floor(audio.duration % 60);
            setDuration(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
        });
    }, [data.url]);

    return (
        <div key={index} className={`list_item ${selectedSong.name === name ? 'selected' : ''}`} onClick={() => setSelectedSong(data)}>
            <div><img src={`https://cms.samespace.com/assets/${icon}`} alt={name} width={48} height={48} /></div>
            <div>
                <div className="song_name">{name}</div>
                <div className="artist_name">{artist}</div>
            </div>
            <div className="duration">{duration}</div> 
        </div>
    );
};

export default ListItem;
