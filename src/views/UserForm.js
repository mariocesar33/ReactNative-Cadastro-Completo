import React from 'react';
import { Text } from 'react-native';

//import users from '../data/users';

const UserForm = props => {
  console.warn(Object.keys(props.route.params));
  return (
   <Text>USerForm</Text>
  );
};

export default UserForm;