import React from 'react'
import DetailSlider from '../../components/detailSlide/DetailSlider'

import "./detail.css"

const Detail = () => {
  return (
    <div>
        <div className="detail__wrapper">
            <h3>Detail</h3>
        </div>
        <div className="detail__show">
            <div className="detail__slider">
                <DetailSlider />
            </div>
            <div className="detail__info">
                <h1>Bed</h1>
                <h2>Shs 200,000</h2>
            </div>
        </div>
    </div>
  )
}

export default Detail