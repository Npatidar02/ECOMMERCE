import React from 'react'
import './DescriptionBox.css'


export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>   
        </div>
        <div className="descriptionbox-description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dicta nulla quam soluta aspernatur mollitia doloribus molestias dolores accusamus molestiae, sequi est quo odio amet assumenda consequatur earum magnam. Impedit.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae odit consequuntur ut quas sint illo numquam adipisci, delectus quo.</p>
        </div>
    </div>
  )
}
