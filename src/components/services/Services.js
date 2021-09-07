import React, { Component } from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
import Icon1 from '../../images/bg4.svg';
import Icon2 from '../../images/bg5.svg';
import Icon3 from '../../images/bg6.svg';




class Services extends Component {
    render() {
        return (
            <ServicesContainer id='services'>
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper>
              <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Sell Tokens</ServicesH2>
                <ServicesP>We Connect you to Different stable Coins.</ServicesP>
              </ServicesCard>
              <ServicesCard>
              <ServicesIcon src={Icon2}/>
                <ServicesH2>Play Games</ServicesH2>
                <ServicesP>you can acess our Dapp platform, stake games and Win Big.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>InvestMent</ServicesH2>
                <ServicesP>Buy tokens and save for a life time.</ServicesP>
              </ServicesCard>
            </ServicesWrapper>
          </ServicesContainer>
        );
    }
}

export default Services;
