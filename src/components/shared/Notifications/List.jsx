import React from 'react';

const Favorite = () => <h4>Favorited type</h4>;
const Reply = () => <h4>Reply type</h4>;
const Follow = () => <h4>Follow type</h4>;

const notificationTypes = {
  favorited: Favorite,
  replied: Reply,
  followed: Follow,
};

const List = ({ notifications }) => {
  return notifications.map(({ action }) => {
    const NotificationComponent = notificationTypes[action];

    return <NotificationComponent />;
  });
};

export default List;
