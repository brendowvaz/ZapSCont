import {StyleSheet} from 'react-native';
import colors from '../../assets/others/colors';

export default StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
  },

  buttonGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    borderRadius: 5,
  },

  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
