import React, {useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';
import colors from '../../themes/colors';
import CommonStyle from '../../themes/commonstyles';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);
  });
  return (
    <View style={CommonStyle.background}>
      <StatusBar backgroundColor={colors.background} />
      <Text style={CommonStyle.boldHeading}>Social</Text>
    </View>
  );
}

export default SplashScreen;
