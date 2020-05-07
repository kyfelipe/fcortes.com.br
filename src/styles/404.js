import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const NotFoundWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: var(--texts);
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: .25rem;
`;

export const SubTitle = styled.h2`
  color: var(--texts);
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

export const BackHome = styled(AniLink)`
  color: var(--texts);
  font-size: 1.1rem;
  margin-top: 2rem;
  font-weight: 300;
  line-height: 1.7;
  letter-spacing: 0;
`;

export const Coffee = styled.div`
  width: 300px;
  height: 280px;
  position: relative;
`;

export const CoffeeHeader = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ddcfcc;
  border-radius: 10px;
`;

export const CoffeeHeaderButtons = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 25px;
  background-color: #282323;
  border-radius: 50%;
  
  &.one {
    left: 15px;
  }

  &.two {
    left: 50px;
  }
  
  &::after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    bottom: -8px;
    left: calc(50% - 4px);
    background-color: #615e5e;
  }
`;

export const CoffeeHeaderButtonsDisplay = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  border-radius: 50%;
  background-color: #9acfc5;
  border: 5px solid #43beae;
  box-sizing: border-box;
`;

export const CoffeeHeaderButtonsDetails = styled.div`
  width: 8px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #9b9091;
  box-shadow: -12px 0 0 #9b9091, -24px 0 0 #9b9091;
`;

export const CoffeeBody = styled.div`
  width: 90%;
  height: 160px;
  position: absolute;
  top: 80px;
  left: calc(50% - 45%);
  background-color: #bcb0af;
  
  &:before {
    content: "";
    width: 90%;
    height: 100px;
    background-color: #776f6e;
    position: absolute;
    bottom: 0;
    left: calc(50% - 45%);
    border-radius: 20px 20px 0 0;
  }
`;

export const CoffeeBodyExit = styled.div`
  width: 60px;
  height: 20px;
  position: absolute;
  top: 0;
  left: calc(50% - 30px);
  background-color: #231f20;
  
  &:before {
    content: "";
    width: 50px;
    height: 20px;
    border-radius: 0 0 50% 50%;
    position: absolute;
    bottom: -20px;
    left: calc(50% - 25px);
    background-color: #231f20;
  }
  
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -30px;
    left: calc(50% - 5px);
    background-color: #231f20;
  }
`;

export const CoffeeBodyArm = styled.div`
  width: 70px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 25px;
  background-color: #231f20;
  
  &::before {
    content: "";
    width: 15px;
    height: 5px;
    position: absolute;
    top: 7px;
    left: -15px;
    background-color: #9e9495;
  }
`;

export const CoffeeBodyLiquid = styled.div`
  width: 6px;
  height: 63px;
  opacity: 0;
  position: absolute;
  top: 50px;
  left: calc(50% - 3px);
  background-color: #74372b;
  animation: liquid 4s 4s linear infinite;
  
  @keyframes liquid {
    0% {
      height: 0px;  
      opacity: 1;
    }
    5% {
      height: 0px;  
      opacity: 1;
    }
    20% {
      height: 62px;  
      opacity: 1;
    }
    95% {
      height: 62px;
      opacity: 1;
    }
    100% {
      height: 62px;
      opacity: 0;
    }
  }
`;

export const CoffeeBodySmoke = styled.div`
  width: 8px;
  height: 20px;
  position: absolute;  
  border-radius: 5px;
  background-color: #b3aeae;
  
  @keyframes smokeOne {
    0% {
      bottom: 20px;
      opacity: 0;
    }
    40% {
      bottom: 50px;
      opacity: .5;
    }
    80% {
      bottom: 80px;
      opacity: .3;
    }
    100% {
      bottom: 80px;
      opacity: 0;
    }
  }
  
  @keyframes smokeTwo {
    0% {
      bottom: 40px;
      opacity: 0;
    }
    40% {
      bottom: 70px;
      opacity: .5;
    }
    80% {
      bottom: 80px;
      opacity: .3;
    }
    100% {
      bottom: 80px;
      opacity: 0;
    }
  }
  
   &.one {
     opacity: 0;
    bottom: 50px;
    left: 102px;
    animation: smokeOne 3s 4s linear infinite;
   }
   
   &.two {
     opacity: 0;
     bottom: 70px;
     left: 118px;
     animation: smokeTwo 3s 5s linear infinite;
   }
   
   &.three {
     opacity: 0;
     bottom: 65px;
     right: 118px;
     animation: smokeTwo 3s 6s linear infinite;
   }
   
   &.four {
     opacity: 0;
     bottom: 50px;
     right: 102px;
     animation: smokeOne 3s 5s linear infinite;
   }
   
`;

export const CoffeeBodySmokeCup = styled.div`
  width: 80px;
  height: 47px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  background-color: #FFF;
  border-radius: 0 0 70px 70px / 0 0 110px 110px;
  
  &::after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 6px;
    right: -13px;
    border: 5px solid #FFF;
    border-radius: 50%;
  }
`;

export const CoffeeFooter = styled.div`
  width: 95%;
  height: 15px;
  position: absolute;
  bottom: 25px;
  left: calc(50% - 47.5%);
  background-color: #41bdad;
  border-radius: 10px;
  
  &::after {
    content: "";
    width: 106%;
    height: 26px;
    position: absolute;
    bottom: -25px;
    left: -8px;
    border-radius: 15px;
    background-color: #ddcfcc;
  }
`;
