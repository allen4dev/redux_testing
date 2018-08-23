import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TweetList from 'components/shared/tweets/TweetList';

import usersModule from 'modules/users';

const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.lightgray}
  margin-left: 25vw;
  padding: ${props => props.theme.spaces.normal};
  width: calc(50vw - ${props => props.theme.spaces.normal});
`;

class Timeline extends Component {
  async componentDidMount() {
    const { timeline, fetchTimeline } = this.props;

    if (timeline.length === 0) {
      await fetchTimeline();
    }
  }

  render() {
    return (
      <Wrapper>
        <TweetList tweets={this.props.timeline} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const { timeline, loading } = state.users.current;

  return {
    loading,
    timeline,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchTimeline: usersModule.actions.fetchTimeline,
  },
)(Timeline);
