import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import colors from './colors';

const CommonStyle = {
  background: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boldHeading: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: moderateScale(28),
  },
  poststyle: {
    color: colors.texts,
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  labelstyle: {
    color: colors.black,
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    marginBottom: 5,
  },
};
export default CommonStyle;
