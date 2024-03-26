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
import * as Yup from 'yup';
import {useFormik} from 'formik';
import PhoneInput from 'react-native-phone-number-input';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Input from '../../components/input';

const INITIAL_VALUES = {
  name: '',
  document: '',
  number: '',
  dueDate: '',
  cvv: '',
};

export default function App() {
  const onSubmit = async () => {
    /* const result = await onConsultCoords(values);
    dispatch({
      type: actions.SET_FORM_KEYS,
      payload: {...result, type: handleType},
    });
    advance(); */
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setValues,
    touched,
    errors,
    values,
  } = useFormik({
    onSubmit,
    validationSchema,
    initialValues: INITIAL_VALUES,
  });

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(1,1,1,0)'} />
      <ImageBackground
        style={styles.background}
        source={require('../../assets/images/background.png')}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}></Image>

        <View style={styles.form}>
          <Input
            label="Nome"
            onBlur={handleBlur('number')}
            error={'Nome inválido'}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Campo obrigatório')
    .max(75, 'Maximo de 75 caracteres'),
  document: Yup.string().required('Campo obrigatório').length(15),
  cvv: Yup.string().length(4).required(),
  number: Yup.string().required(),
  dueDate: Yup.string().required('Campo obrigatório').max(7),
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
