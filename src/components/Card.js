import React from 'react'
import "./style.css"
import Victor from "./images/victor.jpg"
import CardPic from "./images/card.svg"

const Card = () => {
  return (
   <>
        <div className="container">
       <div className="card">
         <div className="card_header">
            <img src={CardPic} alt="card" className='card_bg'/>
            <img src={Victor} alt="Victor" className='victor' />
          </div>
            <div className="card_body">
                <ul className="card_text">
                  <li><h1>Victor Crest</h1></li>
                  <li><p className='age'>26</p></li>
                </ul>
                  <p className='state'>London</p>
              </div>
              <div className="card_footer">
                  <div className="followers_no">
                   <h2 className='value'>80K</h2> 
                   <p className='type'>Followers</p>
                </div>
                 <div className="followers_no">
                   <h2 className='value'> 803K</h2> 
                   <p className='type'>Likes</p>
                </div>
                <div className="followers_no">
                   <h2 className='value'>1.4K</h2> 
                   <p className='type'>Photos</p>
                </div>
              </div>
       </div>
     </div>
   </>
  )
}

export default Card