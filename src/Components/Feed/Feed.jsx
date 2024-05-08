import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail3 from '../../assets/thumbnail2.png'
import thumbnail2 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import thumbnailsmall_one from '../../assets/thumbnailsmall-one.webp'
import { Link } from 'react-router-dom'
import { API_KEY, valueConverter,timeAgo } from '../../data'






const Feed = ({category,apidata}) => {
    
  const [data, setData] = useState([]);

const fetchData = async () => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${apiKey}`
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const jsonData = await response.json();
    setData(jsonData.items);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
    fetchData();
}, [category]);

  return (
    <div>
        <div className="feed">
        {data.map((item, index) => {
          return (
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} style={{ textDecoration: 'none',color:'black' }} className="card" key={index}>
              <img src={item.snippet.thumbnails.medium.url} alt="" className="thumbnail" />
              <div className="heading-n-content">
                <img className="thumbnail-img" src={item.snippet.thumbnails.default.url} alt="" />
                <div className="content">
                  <h2 className="text">{item.snippet.title}</h2>
                  <h3>{item.snippet.channelTitle}</h3>
                  <p className="views-upoladtime">{valueConverter(item.statistics.viewCount)} views  &bull; {timeAgo(item.snippet.publishedAt)} </p>
                </div>
              </div>
            </Link>
          );
        })}
                
        </div>
    </div>
  )
}

export default Feed