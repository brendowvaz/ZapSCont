import React, {useState} from 'react';
import {TextInput, View, Text, TextInputProps, ViewStyle} from 'react-native';
import colors from '../../assets/others/colors';
import styles from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  style?: ViewStyle;
  onBlur: (e?: any) => void;
}

const Input = React.forwardRef<TextInput, InputProps>(
  ({label, error, style, onBlur, ...props}, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={style ? style : {}}>
        <TextInput
          ref={ref}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            if (onBlur) onBlur();
            setIsFocused(false);
          }}
          placeholderTextColor={colors.grey600}
          placeholder={label}
          style={[
            styles.input,
            {
              borderColor: error
                ? colors.red
                : isFocused
                ? colors.primary
                : colors.grey300,
            },
          ]}
          {...props}
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  },
);

export default React.memo(Input);
