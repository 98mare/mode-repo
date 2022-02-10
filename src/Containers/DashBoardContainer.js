import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { MenuRoute } from '../Data/MenuRoute'
import imgOne from '../assets/images/logobig.png'
import { Col, Row } from 'antd'
import { quotes } from '../Data/quotesData'
import bkg from '../assets/images/svg.png'
import sun from '../assets/images/sun.png'
import { useEffect } from 'react'
import { useState } from 'react'


const DashBoardContainer = () => {
  const data = MenuRoute;
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [randomElement, setrandomElement] = useState(quotes[Math.floor(Math.random() * quotes.length)])

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });
   function tick() {
    setDate(new Date());
   }
  

  return (
    <DashbordContainer>
      <div className="welcome">
        <Row gutter={[16, 16]}>
          <Col sm={24} md={8} xs={24} lg={8}>
            <div className="left maiTopContainer">
              <img src={imgOne} alt="" />
            </div>
          </Col >
          <Col sm={24} md={8} xs={24} lg={16} >
            <div className="right maiTopContainer">
              <h3> Welcome back {token.username}</h3>
              <p><span><i className="icon-quote-left1"></i></span> {randomElement} <span><i className="icon-quote-right1"></i></span></p>
            </div>

          </Col>
        </Row>


      </div>
      <Row gutter={[16, 16]}>
        <Col sm={24} md={8} xs={24} lg={18}>
          <Row gutter={[16, 16]}>
            {data.map(e => (
              <>
                {e.key !== "dashbord" ?
                  <Col sm={24} md={8} xs={24} lg={8}>
                    <NavLink to={e.path} key={e.name}>
                      <div className='cButton' >
                        <span>{e.name}</span>
                        <span><i className={e.icon}></i> </span>
                      </div>
                    </NavLink>
                  </Col>
                  : ''}
              </>
            ))}

          </Row>
        </Col>
        <Col sm={24} md={8} xs={24} lg={6}>
          <div className="maiTopContainer dContainer">
            <div className="img">
              <img src={sun} alt="" />
            </div>
            <div className="detail">
              <span>{date.getDay()}</span>
              <h2>{date.toLocaleTimeString()}</h2>
              <p>{date.getFullYear()} {date.getMonth()} {date.getDate()} </p>
            </div>


          </div>
        </Col>
      </Row>


      {/* </div> */}
    </DashbordContainer>

  )
}

export default DashBoardContainer

const DashbordContainer = styled.div`
.welcome{
  display: flex;
  h3{
    color: #fefefe;
    font-size: 30px;
    @media(max-width: 800px) {
      font-size: 22px;
    }
  }
  p{
    color: #e7e4e4;
    font-size: 18px;
    
    @media(max-width: 800px) {
      font-size: 16px;
    }
    span{
      i{
        font-size: 20px;
        color: rgb(233,91,41);
      }
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    padding: 20px 40px;
    background-color: var(--primary);
    background-image: url(${bkg});
    background-size: cover;
    @media(max-width: 800px) {
      padding: 0px;
    }
  }
  .left{
    width: 100%;
    height: 200px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  
    img{
      width: 100%;
    }
    @media(max-width: 800px) {
    }
  }
  @media(max-width: 800px) {
    padding: 10px;
  }
  @media(max-width: 576px) {
    display: none;
  }
}

.botContainer{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 25px;
  width: 100%;
  
  @media(max-width: 500px){
    padding: 0px;
    justify-content: center;
    gap: 15px;
    margin-bottom: 50px;
  }
}
  
  
  .cButton{
    height: 120px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #fefefe;
    box-shadow: 0 2px 22px 0 rgba( 31, 38, 135, 0.17 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    span{
      font-size: 20px;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      color: var(--titleTxt);
      i{
        font-size: 25px;
        color: var(--primary);
      }
    }
    
    @media(max-width: 768px){
      span{
      font-size: 16px;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      margin-right: 10px;
      i{
        font-size: 25px;
      }
    }
    }
    @media(max-width: 500px){
      height: 80px;
    }
   
  }
  .dContainer{
    height: 255px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    
    .img{
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 10;
      img{
      width: 140px;
    }
    }
    .detail{
      position: absolute;
      z-index: 20;
      background: rgba( 255, 255, 255, 0.15 );
      backdrop-filter: blur( 1px );
      -webkit-backdrop-filter: blur( 1px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
      top: 50px;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 10px;
      h2{
        font-size: 35px;
        font-weight: 600;
        color: var(--primary);
        margin-bottom: 0px;
        padding: 0;
      }
      span{
        font-size: 30px;
        text-transform: capitalize;
        color: #232325;
        margin: 0px;
        padding: 0;
      }
      p{
        font-size: 16px;
        color: rgb(233,91,41);
        margin: 0px;
        padding: 0;
      }
    }
  }
`