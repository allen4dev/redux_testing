import React from 'react';
import styled from 'styled-components';

import Avatar from '../utils/Avatar';

const Wrapper = styled.section`
  position: absolute;
  top: 25%;
  height: 50%;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 1fr 1fr;

  & > figure {
    grid-column: 1/2;
    grid-row: 1/-1;
    align-self: center;
  }
`;

const Heading = styled.header`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  font-weight: bold;
  padding-left: 35%;
  grid-column: 1/-1;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Fullname = styled.span`
  margin-bottom: 0.2rem;
`;
const Username = styled.span``;

const Edit = styled.div`
  padding-top: ${props => props.theme.spaces.xsmall};
  grid-column: 2/-1;
  grid-row: 2/-1;

  & > button {
    background-color: transparent;
    border: none;
    font-size: ${props => props.theme.spaces.small};
  }
`;

const Location = styled.button``;
const Profile = styled.button``;

const Information = ({ avatar, fullname, username }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Heading>
        <Fullname>{fullname}</Fullname>
        <Username>{username}</Username>
      </Heading>

      <Edit>
        <Location>San Francisco Ca, US</Location>
        <Profile>Edit Profile</Profile>
      </Edit>
    </Wrapper>
  );
};

export default Information;
