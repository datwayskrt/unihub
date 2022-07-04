import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 30rem;
    background: linear-gradient(to right, #136a8a, #267871);
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const NavMenu = styled.div`
    display: flex;
    width: 80%;
    height: 4rem;
    justify-content: space-between;
    
    margin-top: -4.5rem;


`;

export const Link = styled.a`
    margin: 0.938rem;
    color: #f0f0f0;

    &:hover {
        color: #fff;
        cursor: pointer;
    }

`;

export const List = styled.div`
    display: flex;
    
    justify-content: space-between;

`;
export const Logo = styled.img`
    width: 145px;
    height: 33px;

    margin-top: .5rem;
   

`;

export const SearchArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 16rem;
    margin-top: 5rem;


`;

export const Heading = styled.span`
    
    color: #fff;
    font-weight: 600;
    font-size: 2rem;

`;

export const SearchBar = styled.input`
    background: rgba(0,0,0, .2);
    color: rgba(255,255,255, .2);
    border: none;
    height: 2.5rem;
    font-size: 1rem;
    padding: 10px;
    outline: none;
    
    padding-left: 30px;
    border-radius: 10px;
    border: .5px solid #5f5f5f;

`;


export const TagArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20rem;
    height: 4rem;


`;

export const Tag = styled.span`
    
    background: rgba(255,255,255, .2);
    color: #e6e6e6;
    font-weight: bold;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
  
    border-radius: 4px;
    margin-left: 1rem;


`;


