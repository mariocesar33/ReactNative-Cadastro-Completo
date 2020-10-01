import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';

import users from '../data/users';

const UserList = props => {
  function confirmUserDeletion(user) {
    Alert.alert('Apagar Utilizador', 'Deseja apagar o utilizador?',
      [
        {
          text: 'Sim',
          onPress() {
            console.warn("Apagado");
          }
        },
        {
          text: 'Não',
        }
      ]
    );
  };

  function getActions(user) {
    return(
      <>
        <Button 
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="#f4511e" />}
        />
        <Button 
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  };

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