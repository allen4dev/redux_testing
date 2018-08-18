import React from 'react';
import styled from 'styled-components';

import Information from './Information';

import Image from '../utils/Image';

const Wrapper = styled.section`
  border: 4px solid darkred;
  height: 20vw;
  position: relative;
`;
const ProfileImage = styled.figure`
  border: 4px solid hotpink;
  height: 50%;
`;
const Count = styled.ul`
  border: 4px solid #bada55;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Tweets = styled.li``;
const Followers = styled.li``;
const Following = styled.li``;

const UserCard = () => {
  return (
    <Wrapper>
      <ProfileImage>
        <Image />
      </ProfileImage>

      <Information />

      <Count>
        <Tweets>Tweets count</Tweets>
        <Followers>Followers count</Followers>
        <Following>Following count</Following>
      </Count>
    </Wrapper>
  );
};

export default UserCard;
