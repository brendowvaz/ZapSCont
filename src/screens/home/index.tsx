import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import * as Yup from 'yup';
import {useFormik} from 'formik';

import {Input, Button, PhoneNumberInput} from '../../components';
import colors from '../../assets/others/colors';
import {AddIcon, HistoryIcon, ContactsIcon} from '../../assets/others/svg';

const INITIAL_VALUES = {
  name: '',
  document: '',
  number: '',
  dueDate: '',
  cvv: '',
};

const Home = () => {
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
          <PhoneNumberInput />
          <Input label="Nome" onBlur={handleBlur('name')} error={errors.name} />
          <Button
            title={'Abrir WhatsApp'}
            onPress={() => {}}
            icon="upload"></Button>
          <Button
            title={'Salvar telefone'}
            onPress={() => {}}
            icon="save"></Button>
        </View>
        <View style={styles.menu}>
          <View>
            <ContactsIcon size={50} color={colors.secondary} />
            <Text style={styles.menu_text}>Agenda</Text>
          </View>
          <View style={styles.menu_icon_add}>
            <View style={styles.menu_icon_add_circule} />
            <AddIcon size={60} color={colors.secondary} />
            <Text style={styles.menu_text}>Novo Telefone</Text>
          </View>
          <View>
            <HistoryIcon size={50} color={colors.secondary} />
            <Text style={styles.menu_text}>Histórico</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 80,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    zIndex: -50,
  },
  logo: {
    width: 150,
    height: 178,
    marginTop: 50,
    marginBottom: 100,
  },
  form: {
    width: '100%',
    paddingHorizontal: 40,
  },
  menu: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
    height: 80,
    backgroundColor: colors.white,
  },
  menu_text: {
    color: colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menu_icon_add: {
    width: 60,
    position: 'relative',
    bottom: 25,
    alignItems: 'center',
  },
  menu_icon_add_circule: {
    width: 90,
    height: 90,
    borderRadius: 45,
    position: 'absolute',
    bottom: 5,
    backgroundColor: colors.white,
  },
});
