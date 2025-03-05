import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    animation: fadeIn 1s ease-in-out;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: scaleUp 1s ease-in-out;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
    animation: slideInLeft 1s ease-in-out;
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
    animation: fadeIn 1.5s ease-in-out;
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    text-align: justify; 
    animation: slideInRight 1.5s ease-in-out;
  }

  .about-image{
    text-align: center;
    img{
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s, transform 0.5s;
      animation: zoomIn 1s ease-in-out;
      &:hover{
        filter: grayscale(0);
        transform: scale(1.1);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s, transform 0.5s;
        &:hover{
          filter: grayscale(0);
          transform: scale(1.1);
        }
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s, transform 0.5s;
        &:hover{
          filter: grayscale(0);
          transform: scale(1.1);
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`
