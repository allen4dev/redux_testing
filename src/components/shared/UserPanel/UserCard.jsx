import React from 'react';
import styled from 'styled-components';

import Information from './Information';

import profileImage from '../../../defaultImages/profileImage2.jpg';

const Wrapper = styled.section`
  height: 20vw;
  position: relative;
`;

const ProfileImage = styled.div`
  height: 50%;
  background-image: ${props => `url(${props.url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Detail = styled.ul`
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Item = styled.li`
  padding: ${props => props.theme.spaces.xsmall};
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Count = styled.span`
  color: ${props => props.theme.colors.darkgray};
  font-weight: bold;
  font-size: ${props => props.theme.spaces.normal};
`;

const Value = styled.span`
  font-size: ${props => props.theme.spaces.small};
  color: ${props => props.theme.colors.lightgray};
  text-transform: uppercase;
`;

const UserCard = () => {
  return (
    <Wrapper>
      <ProfileImage url={profileImage} />

      <Information />

      <Detail>
        <Item>
          <Count>412</Count>
          <Value>Tweets</Value>
        </Item>

        <Item>
          <Count>521</Count>
          <Value>Followers</Value>
        </Item>

        <Item>
          <Count>1242</Count>
          <Value>Following</Value>
        </Item>
      </Detail>
    </Wrapper>
  );
};

export default UserCard;
