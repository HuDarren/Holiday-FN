import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import berries from '../../assets/profile-images/berries.jpg';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const HeaderContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  padding: 3%;
`;
const Header = styled.h1`
  font-family: Georgia;
  fonst-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
  color: rgba(41, 41, 41, 1);
  letter-spacing: -0.011em;
`;

const Description = styled.p`
  font-family: Georgia;
  fonst-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: rgba(41, 41, 41, 1);
  letter-spacing: -0.003em;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  padding: 3%;
`;

const Title = styled.h2`
  font-family: Helvetica Nue;
  fonst-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  color: rgba(41, 41, 41, 1);
  letter-spacing: normal;
`;
const FollowerContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 3%;
  justify-content: center;
  align-items: center;
`;
const FollowerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
`;
const FollowerName = styled.h3`
  font-family: Georgia;
  fonst-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: rgba(41, 41, 41, 1);
  letter-spacing: normal;
`;
const FollowerImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: container;
  border-radius: 10px;
`;

const GroupViewC = ({ name, description, followers }) => {
  return (
    <Page>
      <HeaderContainer>
        <Header>{name}</Header>
        <Description>{description}</Description>
      </HeaderContainer>
      <Container>
        <FollowerContainer>
          <Title>Followers</Title>
          {followers.map((follower) => {
            return (
              <FollowerWrapper>
                <FollowerImage src={follower.groupImg} />
                <FollowerName>{follower.name}</FollowerName>
              </FollowerWrapper>
            );
          })}
        </FollowerContainer>
      </Container>
    </Page>
  );
};

GroupViewC.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      groupImg: PropTypes.string,
    })
  ),
};

GroupViewC.defaultProps = {
  name: 'Secret Santa',
  description:
    'Plan a holiday party this year for family and friends or for the office, and follow helpful secret Santa guidelines and secret Santa rules. Explain how to play secret Santa and the rules for secret Santa to all the participants ahead of time. Secret Santa is an affordable way for a group of people to exchange holiday presents. Put the names of the participants into a hat and ask everyone to draw one name. Whichever name you receive is the person you will purchase a gift for. Keep the name a secret until the party!',
  followers: [
    {
      name: 'Sandy',
      groupImg: '',
    },
  ],
};

export default GroupViewC;
