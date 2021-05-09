import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

function Iconbutton(props) {
  let { src, imageStyle, containerStyle, cover, disableButton, onPress } =
    props || {};
  return (
    <TouchableOpacity
      disabled={disableButton}
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      <Image
        source={src}
        resizeMode={cover ? "cover" : "contain"}
        style={[styles.imagestyle, imageStyle]}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    marginVertical: verticalScale(5),
  },
  imagestyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});

export default Iconbutton;
