import UserBox from '../components/main/UserBox.jsx';
import LogoBox from '../components/common/LogoBox.jsx';
import styled from 'styled-components';
import Button from '../components/common/Button.jsx';
import { Link } from 'react-router-dom';

const StyledBody = styled.div`
  background-color: #f9f9f9;
`;

const MainContainer = styled.div`
  background: url('/images/background_image.svg') no-repeat bottom;
  background-size: cover;

  position: relative;
  width: 100%;
  height: 100vh;

  @media (max-width: 767px) {
    background-size: contain;
  }
`;

const MainLogo = styled(LogoBox)`
  display: flex;
  justify-content: center;
  padding-top: 10%;
  margin: auto;

  width: 456px;

  @media (max-width: 768px) {
    width: 248px;
  }
`;

const HeadButton = styled(Button)`
  position: absolute;
  top: 45px;
  right: 6%;

  @media (max-width: 768px) {
    position: static;
    display: flex;
    justify-content: center;
    margin: 10% auto;
    height: 34px;
    padding: 8px 12px;
    font-size: 14px;
  }
`;

const Main = () => {
  return (
    <StyledBody>
      <MainContainer>
        <MainLogo />
        <Link to="/list?page=1&sort=createdAt">
          <HeadButton bright={true}>질문하러 가기 →</HeadButton>
        </Link>
        <UserBox />
      </MainContainer>
    </StyledBody>
  );
};

export default Main;
