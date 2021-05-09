import colors from '../../themes/colors';
import Iconbutton from './../IconButton/IconButton';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import images from '../../themes/images';

const windowWidth = Dimensions.get('window').width;
 
function Header(props) {
  let {containerStyle, title, add, back, navigation, onPress} = props || {};
  return (
    <View style={[styles.container, containerStyle]}>
      {back && (
        <Iconbutton
          src={images.back}
          containerStyle={{position: 'absolute', left: 10}}
          onPress={() => navigation.pop()}
        />
      )}
      <Text style={styles.header}>{title}</Text>
      {add && (
        <Iconbutton
          src={images.add}
          containerStyle={{position: 'absolute', right: 10}}
          onPress={onPress}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: windowWidth,
    height: verticalScale(60),
    backgroundColor: colors.darkblue,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: moderateScale(22),
  },
});

export default Header;
