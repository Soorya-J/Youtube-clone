import React, { useEffect, useState } from 'react'
import './Recommented.css'
import { API_KEY, timeAgo, valueConverter } from '../../data'
import { Link } from 'react-router-dom';

const Recommented = ({categoryId}) => {

    const [recommenteddata,setRecommenteddata] = useState([]);

     const fetchrecommented = async ()=>{
        const fetchurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(fetchurl).then(res=>res.json()).then(data=>setRecommenteddata(data.items))
     }
     useEffect(()=>{
       fetchrecommented();
     },[recommenteddata])

  return (
    <div>
        <div className="recommented-video">
           
        {recommenteddata.map((item,index)=>{
           return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list" style={{ textDecoration: "none" }}>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                 <div className="side-video-info">
                    <h3 className="side-title">
                       {item.snippet.title}
                    </h3>
                    <p className="side-channel-name">{item.snippet.channelTitle}</p>
                    <p className="views">{valueConverter(item.statistics.viewCount)} views &bull;{timeAgo(item.snippet.publishedAt)}</p>
                </div>
            </Link>

           );
        })}
            

        </div>
    </div>
  )
}

export default Recommented