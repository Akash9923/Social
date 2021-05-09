import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import colors from '../../themes/colors';

function Button(props) {
  let {containerStyle, title, disableButton, onPress} = props || {};
  return (
    <TouchableOpacity
      disabled={disableButton}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={styles.textstyle}> {title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.darkblue,
    borderColor: '#8d8c8c',
    borderWidth: 0.5,
    marginVertical: verticalScale(10),
  },
  textstyle: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20),
    fontWeight: 'bold',
  },
});

export default Button;
