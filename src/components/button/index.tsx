import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/others/colors';
import {SaveIcon, UploadIcon} from '../../assets/others/svg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({title, onPress, style, icon}) => {
  return (
    <TouchableHighlight
      style={[styles.buttonContainer, style]}
      onPress={onPress}>
      <LinearGradient
        style={styles.buttonGradient}
        colors={[colors.primary, colors.secondary]}>
        {icon === 'upload' && <UploadIcon size={30} color={colors.white} />}
        {icon === 'save' && <SaveIcon size={30} color={colors.white} />}
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableHighlight>
  );
};

export default React.memo(Button);
