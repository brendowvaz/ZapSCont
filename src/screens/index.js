import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Input from '../components/input';

export default function App() {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  // const phoneInput = useRef < PhoneInput > null;

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(1,1,1,0)'} />
      <ImageBackground
        style={styles.background}
        source={require('../assets/images/background.png')}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}></Image>
        {/*   <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="BR"
          layout="first"
          onChangeText={text => {
            setValue(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        /> */}
        <TouchableOpacity
          /*  style={styles.button} */
          onPress={() => {
            const checkValid = phoneInput.current?.isValidNumber(value);
            setShowMessage(true);
            setValid(checkValid ? checkValid : false);
          }}>
          <Text>Check</Text>
        </TouchableOpacity>
        <View style={styles.form}>
          <Input
            label="Nome"
            onBlur={handleBlur('number')}
            onChangeText={handleChange('number')}
            error={'Nome inválido'}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required(Errors.generic.required)
    .max(75, Errors.generic.tooLong),
  document: Yup.string().required(Errors.generic.required).length(15),
  cvv: Yup.string().length(4).required(),
  number: Yup.string().required(),
  dueDate: Yup.string().required(Errors.generic.required).max(7),
});

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#156472',
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 178,
    marginTop: 50,
    marginBottom: 50,
  },
  form: {
    width: '100%',
    paddingHorizontal: 40,
  },
});
