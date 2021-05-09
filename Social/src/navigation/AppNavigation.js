import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import PostScreen from '../screens/Post/PostScreen';
import PostlistScreen from '../screens/Post/PostlistScreen';
import AddPostScreen from '../screens/Post/AddPostScreen';
const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostlistScreen" component={PostlistScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
