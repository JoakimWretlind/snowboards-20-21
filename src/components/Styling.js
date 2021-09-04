import styled from 'styled-components';

export const Main = styled.div`
  width: 90vw;
  max-width: 62rem;
  margin: 0rem auto;
  padding: 0 1rem;
`;

export const SingleBoard = styled.article`
  background: #fff;
  border-radius: .4rem;
  margin: 3.2rem 0;
  
  @media screen and (min-width: 715px){
    display: flex;
  }
  box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 6vw, 3rem);
  margin: 3rem auto 2rem;
  padding: 0 3rem;
  color: #f1f1f1;
  font-family: 'EsperaB';
  text-transform: capitalize;
  letter-spacing: .1rem;
  &.endOfBoards{
    color: #333;
    font-family: 'montserrat', sans-serif;
  }

  @media screen and (min-width: 715px){
    margin: 5rem auto 2rem;
  }
`;

export const Underline = styled.div`
  width: 50%;
  height: 0.2rem;
  background: #f1f1f1;
  margin-left: auto;
  margin-right: auto;
`;

export const BoardsDiv = styled.div`
`;

export const FetchBtn = styled.button`
  background: #333;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: .2rem;
  text-transform: capitalize;
  color: #f1f1f1;
  letter-spacing: .1rem;
  border: none;
  cursor: pointer;
  margin-top: 2rem;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  transition: .3s ease-out;
  &:hover {
    background: #ececec;
    color: #333;
    box-shadow: inset 0 .1rem .2rem rgba(0,0,0,.2),
    inset 0 -.1rem .2rem rgba(255,255,255,1);
  }
`;

export const BoardImg = styled.img`
  width: 100%;
  margin: auto;
  padding: ${({ readMore }) => (readMore ? "0 2rem" : "0")};
  height: ${({ readMore }) => (readMore ? "100%" : "20rem")};
  object-fit: contain;
  border-top-right-radius: .4rem;
  border-top-left-radius: .4rem; 
`;

export const BoardFooter = styled.footer`
    background: #f1f1f1;
    padding: 1.5rem 2rem;
`;

export const BoardInfo = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const BoardH4 = styled.h4`  
  font-size: clamp(1.2rem, 5vw, 2.6rem);
`;

export const BoardPrice = styled.h4`
    font-family: 'EsperaR';
    color: #f1f1f1;
    background: #700B27;
    padding: 0.45rem 0.9rem;
    border-radius: .2rem;
    margin: .8rem auto 1.2rem;
    font-size: clamp(1.2rem, 4vw, 1.4rem);
    letter-spacing: .2rem;
`;

export const BoardP = styled.div`
    font-family: 'EsperaR';
    color: #555;
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    line-height: 1.2; 
    margin: 1.2rem 0 1rem;
`;

export const ReadMore = styled.p`
    font-family: 'EsperaR';
`;

export const ReadBoard = styled.button`
    font-family: 'EsperaR';
    background: #333;
    display: inline-block;
    padding: 0.45rem 0.9rem;
    border-radius: .4rem;
    text-transform: capitalize;
    color: #f1f1f1;
    letter-spacing: .1rem;
    border: none;
    cursor: pointer;
    margin-top: 2rem;
    font-size: 1.2rem;
    transition: ease-out .25s;
    &:hover{
      background: #fff;
      color: #333;
      box-shadow: inset 0 .1rem .2rem rgba(0,0,0,.2),
      inset 0 -.1rem .2rem rgba(255,255,255,1);
    }
`;

export const DeleBtn = styled.button`
  display: block;
  width: 20rem;
  margin: 2rem auto 0 auto;
  color: #700B27;
  letter-spacing: .1rem;
  background: transparent;
  border: 1px solid #700B27;
  padding: 0.3rem 0.5rem;
  border-radius: .4rem;
  cursor: pointer;
  transition: .25s ease-out;
  &:hover{
    background: #700B27;
    color: #f1f1f1;
    box-shadow: inset 0 .1rem .2rem rgba(0,0,0,.3),
      inset 0 -.1rem .2rem rgba(255,255,255,.8);
  }
`;

export const Copyright = styled.p`
font-family: 'EsperaR';
  color: #f1f1f1;
  letter-spacing: .3rem;
  text-align: center;
  margin: 2rem 0 5rem;
`;