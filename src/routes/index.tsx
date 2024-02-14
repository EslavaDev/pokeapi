import React from 'react';
import {register} from 'react-native-bundle-splitter';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Root = createNativeStackNavigator();

const DetailPage = register({
  loader: () => require('@src/modules'),
  extract: 'DetailPage',
});

const HomePage = register({
  loader: () => require('@src/modules'),
  extract: 'HomePage',
});


export const RoutesRoot = () => {

  
  return (
    <Root.Navigator initialRouteName="Home">
        <Root.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomePage}
        />
        <Root.Screen
          name="Detail"
          options={{headerShown: true, title: 'Pokemon'}}
          component={DetailPage}
        />
    </Root.Navigator>
  );
};
