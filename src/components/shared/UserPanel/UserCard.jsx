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

const Detail = styled.ul`
  border: 4px solid #bada55;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Count = styled.span``;

const Value = styled.span``;

const UserCard = () => {
  return (
    <Wrapper>
      <ProfileImage>
        <Image />
      </ProfileImage>

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
