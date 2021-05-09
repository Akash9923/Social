import colors from '../../themes/colors';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

function Listing(props) {
  let {containerStyle, title, onPress, textStyle} = props || {};
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text numberOfLines={1} style={[styles.header, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    backgroundColor: colors.aqua,
    paddingVertical: verticalScale(15),
    paddingHorizontal: '10%',
    marginVertical: 2,
  },
  header: {
    color: colors.texts,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
});

export default Listing;
