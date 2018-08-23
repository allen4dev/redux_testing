import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Avatar from 'components/shared/utils/Avatar';

import avatar from 'defaultImages/avatar.jpg';

const TweetLink = styled(Link)`
  padding: ${props => props.theme.spaces.xsmall};
  text-decoration: none;
  display: flex;
  align-items: flex-start;
`;

const Content = styled.section`
  flex: 1;
  margin-left: 1rem;
  padding: 0.5em 0;
`;

const Heading = styled.header``;

const StyledLink = styled(Link)`
  margin-bottom: ${props => props.theme.spaces.xsmall};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Fullname = styled.h4`
  color: ${props => props.theme.colors.black};
  margin-right: 0.2rem;
`;

const Username = styled.span`
  color: ${props => props.theme.colors.gray};
`;

const Body = styled.p`
  color: ${props => props.theme.colors.black};
`;

class Tweet extends Component {
  render() {
    const { tweet } = this.props;

    return (
      <TweetLink to={`/tweets/${tweet.id}`}>
        <Avatar src={avatar} width="70px" />
        <Content>
          <Heading>
            <StyledLink to="/users/1">
              <Fullname>Allen Walker</Fullname>
              <Username>@allen</Username>
            </StyledLink>
          </Heading>
          <Body>{tweet.attributes.body}</Body>
        </Content>
      </TweetLink>
    );
  }
}

function mapStateToProps(state, { id }) {
  return {
    tweet: state.tweets.entities[id],
  };
}

export default connect(mapStateToProps)(Tweet);
