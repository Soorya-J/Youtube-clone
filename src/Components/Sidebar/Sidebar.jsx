import React from 'react'
import './Sidebar.css'
import cameron from '../../assets/cameron.png'
import jack from '../../assets/jack.png'
import megan from '../../assets/megan.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div >
     <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-link">
        <h4 className='explore'>Explore</h4>
        <div className={`side-link ${category===0?"active":""}`} onClick={()=>{setCategory(0)}}>
        <span className={`material-symbols-outlined gaming ${category===0?"fill":""}`}>home</span><a>Home</a>
        </div>
        <div className={`side-link ${category===20?"active":""}`} onClick={()=>{setCategory(20)}}>
        <span className={`material-symbols-outlined gaming ${category===20?"fill":""}`}>sports_esports</span><a>Gaming</a>
        </div>
        <div className={`side-link ${category===2?"active":""}`} onClick={()=>{setCategory(2)}}>
        <span className={`material-symbols-outlined gaming ${category===2?"fill":""}`}>directions_car</span><a>Automobiles</a>
        </div>
        <div className={`side-link ${category===17?"active":""}`} onClick={()=>{setCategory(17)}}>
        <span className={`material-symbols-outlined gaming ${category===17?"fill":""}`}>emoji_events</span><a>Sports</a>
        </div>
        <div className={`side-link ${category===24?"active":""}`} onClick={()=>{setCategory(24)}}>
        <span className={`material-symbols-outlined gaming ${category===24?"fill":""}`}>movie_edit</span><a>Entertainment</a>
        </div>
        <div className={`side-link ${category===28?"active":""}`} onClick={()=>{setCategory(28)}}>
        <span className={`material-symbols-outlined gaming ${category===28?"fill":""}`}>devices_wearables</span><a>Tech</a>
        </div>
        <div className={`side-link ${category===10?"active":""}`} onClick={()=>{setCategory(10)}}>
        <span className={`material-symbols-outlined gaming ${category===10?"fill":""}`}>music_note</span><a>Music</a>
        </div>
        <div className={`side-link ${category===22?"active":""}`} onClick={()=>{setCategory(22)}}>
        <span className={`material-symbols-outlined gaming ${category===22?"fill":""}`}>podcasts</span><a>blog</a>
        </div>
        <div className={`side-link ${category===25?"active":""}`} onClick={()=>{setCategory(25)}}>
        <span className={`material-symbols-outlined gaming ${category===25?"fill":""}`}>feed</span><a>News</a>
        </div>
        <div className="subscribed-list">
          <h4 className='subscrptions'>Subscrptions</h4>
          <div className="side-link">
            <img src={jack} alt="" /><a>PewDiePie</a>
          </div>
          <div className="side-link">
            <img src={simon} alt="" /><a>Mr Beast</a>
          </div>
          <div className="side-link">
            <img src={tom} alt="" /><a>Justin Bieber</a>
          </div>
          <div className="side-link">
            <img src={megan} alt="" /><a>5-minute Crafts</a>
          </div>
          <div className="side-link">
            <img src={cameron} alt="" /><a>Nas Daily</a>
          </div>
        </div>
      </div>
     </div>



    </div>
  )
}

export default Sidebar