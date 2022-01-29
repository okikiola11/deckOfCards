import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  background-color: #000000;
  font-size: 24px;
  color: #fefefe;
  padding: 30px 0;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  color: ${props => props.flipButton ? "palevioletred" : "white"};
  font-size: 16px;
  margin: 20px;
  padding: 5px 16px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: ${props => props.flipButton ? "white" : "palevioletred"};
`;

export const CardLayout = styled.div`
  display:  flex;
  flex-direction: row;
  margin: 15px 25px;
`;

export const Name = styled.div`
  display:  flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 20px;
`