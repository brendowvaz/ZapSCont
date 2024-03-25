import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';

import colors from '../../assets/others/colors';
import styles from './styles';

const Input = React.forwardRef(
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
            onBlur();
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
        {error && (
          <Text style={styles.error} format="label">
            {error}
          </Text>
        )}
      </View>
    );
  },
);

export default React.memo(Input);
