import React from 'react'
import './Video.css'
import { useEffect } from 'react'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommented from '../../Components/Recommented/Recommented'
import { useParams } from 'react-router-dom'
import { scrollToTop } from '../../data'

const Video = () => {

  useEffect(() => {
    scrollToTop();
  }, []);

const {videoId,categoryId} = useParams()




  return (
      <div className="play-container">
        <div className="video" >
        <Playvideo videoId = {videoId}/>
        </div>
        <div className="recommented-video">
        <Recommented categoryId = {categoryId}/>
        </div>
      </div>
  )
}

export default Video