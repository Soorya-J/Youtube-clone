import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import video1 from '../../assets/video.mp4'
import tom from '../../assets/tom.png'
import { valueConverter,timeAgo } from '../../data'
import { useParams } from 'react-router-dom'

const Playvideo = () => {
  

const {videoId} = useParams()

const[apidata,setApidata] = useState(null)

const [showFullDescription, setShowFullDescription] = useState(false);

const [channeldata,setChanneldata] = useState();

const[commentdata,setCommentdata] = useState([])

const API = import.meta.env.VITE_API_KEY;


const toggleDescription = () => {
  setShowFullDescription(!showFullDescription);
};

const fetchVideodata = async () => {
    const videourl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API}`
    await fetch(videourl).then(res=>res.json()).then(data => setApidata(data.items[0]))
}

useEffect(()=>{
    fetchVideodata();
},[videoId])

const fetchChanneldata = async ()=>{
   const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API}`
   await fetch (channelUrl).then(response=>response.json()).then(data=>setChanneldata(data.items[0]))
}
 useEffect(()=>{
  fetchChanneldata();
 },[apidata])
 
 const fetchcomments = async ()=>{
 const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API}`
 await fetch(comment_url).then((res)=>res.json()).then( data=>setCommentdata(data.items))
 }
 useEffect(()=>{
  fetchcomments();
 },[commentdata])

  return (
    <div className='main-container'>
    <div className="playvideo-left-side">
        <div className="play-video">
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <h3 className='title'>{apidata?apidata.snippet.title:"title"}</h3>
           <div className="video-info">
              <div className="playvideo-btns">
                 <div className="channel-left-side">
                    <div className="creator-channel">
                        <img src={channeldata?channeldata.snippet.thumbnails.default.url:{tom} }  alt="" />
                        <h4 className='channel-name'>
                            <span className="channel-name">{channeldata?channeldata.snippet.title:""}</span>
                            <p className="subscribers">{channeldata?valueConverter(channeldata.statistics.subscriberCount):"210k"} subscribers</p>
                        </h4>
                    </div>
                     <button className='subscribe-btn'>subscribe</button>
                 </div>
                 <div className="channel-right-side">
                    <button className='like-btn'><span className="material-symbols-outlined">thumb_up</span>{apidata?valueConverter(apidata.statistics.likeCount):"likes"}</button>
                    <button className='dislike-btn'><span className="material-symbols-outlined">thumb_down</span></button>
                    <button className='share-btn'><span className="material-symbols-outlined">share</span> Share</button>
                    <button className='more-btn'><span className="material-symbols-outlined">more_horiz</span></button>
                 </div>
              </div>
           </div>
        </div>
        <div className="discription-box">
            <p className='views-n-posted'>
                {apidata?valueConverter(apidata.statistics.viewCount):"likes"} &bull;{apidata?timeAgo(apidata.snippet.publishedAt):"from"}
            </p>
            <p>
            {apidata ? (
              <>
                {showFullDescription
                  ? apidata.snippet.description
                  : apidata.snippet.description.slice(0, 250)}
                {!showFullDescription && (
                  <button className='toogle-discription' onClick={toggleDescription}> Read More...</button>
                )}
              </>
            ) : (
              'Description'
            )}
          </p>
        </div>
        <div className="comments">
            <div className="topsection">
                <div className="comment-num-n-sortby">
                    <h3 className="total-comments">{apidata?apidata.statistics.commentCount+" comments":"likes"}</h3>
                    <button className="sortby"><span class="material-symbols-outlined">menu_open</span>Sort by</button>
              </div>
                <div className="adding-comment-box">
                    <img src={tom} alt="" />
                    <input type="text" placeholder='add a comment...' />
                </div>
            </div>
        {commentdata.map((item,index)=>{
          return(
            <div key={index} className="comment-section">
                  <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                  <div className="comment-info">
                    <p className="cmt-username">{item.snippet.topLevelComment.snippet.authorDisplayName} &nbsp; &nbsp; <span>{timeAgo(item.snippet.topLevelComment.snippet.publishedAt)}</span></p>
                    <p className="comment-info">
                    {item.snippet.topLevelComment.snippet.textDisplay}
                    </p>
                    <div className="cmt-btns">
                      <button className="cmt-like"><span className="material-symbols-outlined">thumb_up</span>&nbsp;<span className='cmt-like-count'>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span></button>
                      <button className="cmt-dislike"><span className="material-symbols-outlined">thumb_down</span></button>
                      <button className="cmt-reply">reply</button>
                    </div>
                    <button className='replies'> replies</button>
                  </div>
                </div>
          )
        })}
             
             
        </div>
      </div>
    </div>
  )
}

export default Playvideo
