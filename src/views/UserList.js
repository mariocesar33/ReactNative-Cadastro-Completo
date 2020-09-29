import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Button } from 'react-native-elements';

import users from '../data/users';

const UserList = (props) => {
  function getActions(user) {
    return(
      <>
        <Button 
          onPress={() => props.navigation.navigate('UserForm', user)}
        />
      </>
    );
  }

  function getUserItem({ item: user }){
    return (
      <ListItem 
        bottomDivider
        leftAvatar={{source: {uri: user.avatarUrl}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        onPress={() => props.navigation.navigate('UserForm')}
        rightElement={getActions()}
      />
    );
  };

  return(
    <View>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserList;