import React, { Component } from 'react';
import Video from '../videos/video.mp4';
import Video1 from '../videos/video1.mp4';
import { Button } from './ButtonElements';
import {
     HeroContainer,
     HeroBg,
     VideoBg,
     HeroContent,
     HeroH1,
     HeroP,
     HeroBtnWrapper,
     ArrowForward,
     ArrowRight
 } from './HeroElements';


class Herosection extends Component {

    render() {
        return (
            <HeroContainer>
               <HeroBg>
                   <VideoBg autoPlay loop muted src={Video} type='video/mp4'  />
               </HeroBg >
               <HeroContent>
                   <HeroH1>New Crypto Games, Play, Win Now </HeroH1>
                    <HeroP>
                    Play, Invest,Exchange and Join the Contest with high rewards at OnlyFanPools!
                    </HeroP>
                      <HeroBtnWrapper> 
                          <Button 
                            to='signup' 
                             onMouseEnter={() => this.props.onHover(true)} 
                             onMouseLeave={() =>this.props.onHover(false)}
                             primary='true'
                             dark='true'
                           >
                              BUY TOKENS {`${this.props.hover}` ? <ArrowForward/> : <ArrowRight />}
                          </Button>
                      </HeroBtnWrapper>
                       <HeroBtnWrapper> 
                          <Button  style={{border: '1px solid', outline: '1px', borderColor: '#fff'}}
                            to='signup' 
                            onMouseEnter={() => this.props.onHover(true)} 
                            onMouseLeave={() =>this.props.onHover(false)}
                             primary=''
                             dark=''
                           >
                              LIVE CHART  {`${this.props.hover}` ? <ArrowForward/> : <ArrowRight />}
                          </Button>
                      </HeroBtnWrapper>
              </HeroContent>  
            </HeroContainer>
        );
    }
}

export default Herosection;
