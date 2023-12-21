// import React from 'react'
import Button from '../../Common/Button'
import './styles.css'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
function MainComponent() {
  return (
    <div className='flex-info'>
      <div className='leftComponent'>
        <h1 className='trackCryptoHeading'>Track Crypto</h1>
        <h1 className='realTimeHeading'>Real Time.</h1>
        <p className='desc'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        <div className='btn-flex'>
          <Button text={"Dashboard"}/>
          <Button text={"share"} outlineBtn="true"  />
        </div>
      </div>
      <div className='phone-container'>
        <img src={iphone} className='iphone' />
        <img src={gradient} className='gradient'/>
      </div>
    </div>
  )
}

export default MainComponent