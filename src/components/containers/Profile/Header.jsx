import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/utils/Avatar';

import avatar from 'defaultImages/avatar.jpg';
import profileImage from 'defaultImages/profileImage.jpg';

const Wrapper = styled.header`
  background-image: ${props => `url(${props.profileImage})`};
  background-size: cover;
  background-position: center;
  height: 50vh;
  grid-area: heading;

  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  grid-template-rows: 1fr 1fr;
`;

const AvatarSection = styled.div`
  grid-column: 1/2;
  grid-row: 2/-1;
  position: relative;
`;

const AvatarContainer = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 25%;
`;

const Information = styled.section`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0 0.5rem 25vw;
  grid-column: 1/-1;
  grid-row: 2/-1;
  display: flex;
  flex-direction: column;
`;

const Actions = styled.div`
  grid-column: 3/-1;
  grid-row: 2/-1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:first-child {
    margin-bottom: 1rem;
  }
`;

// ! Potential reusable component, move to his own file
const Button = styled.button`
  color: ${props =>
    props.blue ? props.theme.colors.white : props.theme.colors.darkgray};

  background-color: ${props =>
    props.blue ? props.theme.colors.skyblue : props.theme.colors.white};

  border: none;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  width: 50%;
  margin-top: 1rem;
`;

const Heading = styled.header``;

const Fullname = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-right: ${props => props.theme.spaces.xsmall};
  margin-bottom: ${props => props.theme.spaces.xsmall};
`;

const Username = styled.h4`
  color: ${props => props.theme.colors.gray};
`;

const List = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Count = styled.span`
  color: ${props => props.theme.colors.lightgray};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Value = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <Wrapper profileImage={profileImage}>
      <AvatarSection>
        <AvatarContainer>
          <Avatar src={avatar} />
        </AvatarContainer>
      </AvatarSection>
      <Information>
        <Heading>
          <Fullname>Allen Walker</Fullname>
          <Username>@allen</Username>
        </Heading>
        <List>
          <Item>
            <Count>124</Count>
            <Value>Tweets</Value>
          </Item>

          <Item>
            <Count>463</Count>
            <Value>Followers</Value>
          </Item>

          <Item>
            <Count>924</Count>
            <Value>Following</Value>
          </Item>
        </List>
      </Information>
      <Actions>
        <Button>Message</Button>
        <Button blue>Follow</Button>
      </Actions>
    </Wrapper>
  );
};

export default Header;
