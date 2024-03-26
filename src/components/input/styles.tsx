import {StyleSheet} from 'pr-unit';

import colors from '../../assets/others/colors';

export default StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderRadius: 20,
    height: 160,
    color: colors.grey600,
    paddingHorizontal: 50,
  },

  error: {
    paddingHorizontal: 20,
    color: colors.red,
  },
});
