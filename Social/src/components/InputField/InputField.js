import React from 'react';
import colors from '../../themes/colors';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
function Inputfield(props) {
  let {
    label,
    autoCapitalize,
    containerStyle,
    secure,
    multiline,
    maxLength,
    numPad,
    inputstyle,
    changetext,
    numberOfLines,
    onpress,
    value,
    placeholder,
    title,
    button,
    autoFocus,
    icon,
    onBlur,
    editable,
  } = props || {};

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.labelstyle}>{label}</Text>}
      <TextInput
        autoCapitalize={autoCapitalize}
        secureTextEntry={secure}
        multiline={multiline}
        autoFocus={autoFocus}
        maxLength={maxLength}
        editable={editable}
        numberOfLines={numberOfLines}
        value={value}
        onBlur={onBlur}
        onChangeText={text => changetext(text)}
        placeholder={placeholder}
        placeholderTextColor={'#8d8c8c'}
        style={[styles.input, inputstyle]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '7%',
    marginVertical: verticalScale(10),
  },
  labelstyle: {
    color: colors.black,
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    marginBottom:5
  },
  input: {
    marginVertical: verticalScale(5),
    borderRadius:5,
    width: '95%',
    color: colors.black,
    padding: verticalScale(10),
    borderColor: '#8d8c8c',
    borderWidth: 0.5,
    fontSize: moderateScale(15),
  },
});

export default Inputfield;
