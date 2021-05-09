import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigation from '../navigation/AppNavigation';
import {store} from '../redux/store';
LogBox.ignoreLogs(['Warning: ...', '']);
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
