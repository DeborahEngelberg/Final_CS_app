import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import WriteTodaysHighlightScreen from './WriteTodaysHighlightScreen';
import UpdateUserNameScreen from './UpdateUserNameScreen';
import AboutScreen from './AboutScreen';
import { UserProvider } from './UserContext';

const Stack = createStackNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="WriteTodaysHighlight" component={WriteTodaysHighlightScreen} />
          <Stack.Screen name="UpdateUserName" component={UpdateUserNameScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;