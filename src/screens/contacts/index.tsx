import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import colors from '../../assets/others/colors';
import {Mask} from '@tboerc/maskfy';

const Contact = ({name, phone}: {name: string; phone: string}) => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>🇧🇷 {Mask.phone.value(phone)}</Text>
    </View>
  );
};

const Contacts = () => {
  const contacts = [
    {name: 'Matheus Arcanjo', phone: '34997074970'},
    {name: 'Brendow', phone: '34997074970'},
    {name: 'Pedro', phone: '34997074970'},
    {name: 'Laura', phone: '34997074970'},
    {name: 'Matheus Arcanjo', phone: '34997074970'},
    {name: 'Matheus Arcanjo', phone: '34997074970'},
    {name: 'Brendow', phone: '34997074970'},
    {name: 'Pedro', phone: '34997074970'},
    {name: 'Laura', phone: '34997074970'},
    {name: 'Matheus Arcanjo', phone: '34997074970'},
    {name: 'Matheus Arcanjo', phone: '34997074970'},
    {name: 'Brendow', phone: '34997074970'},
    {name: 'Pedro', phone: '34997074970'},
    {name: 'Laura', phone: '34997074970'},
    {name: 'Matheus Arcanjo', phone: '34997074970'},
    {name: 'Matheus Arcanjo', phone: '34997074970'},
    {name: 'Brendow', phone: '34997074970'},
    {name: 'Pedro', phone: '34997074970'},
    {name: 'Laura', phone: '34997074970'},
    {name: 'Matheus Arcanjo', phone: '34997074970'},
    {name: 'Matheus Arcanjo', phone: '34997074970'},
    {name: 'Brendow', phone: '34997074970'},
    {name: 'Pedro', phone: '34997074970'},
    {name: 'Laura', phone: '34997074970'},
    {name: 'Matheus Arcanjo', phone: '34997074970'},
  ];

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(1,1,1,0)'} />
      <ImageBackground
        style={styles.background}
        source={require('../../assets/images/background.png')}>
        <Text style={styles.title}>Agenda</Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 40,
            paddingBottom: 150,
            borderRadius: 100,
          }}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}>
            {contacts.map((contact, index) => (
              <Contact key={index} name={contact.name} phone={contact.phone} />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

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
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 30,
    color: colors.white,
  },
  scrollView: {
    backgroundColor: colors.white,
    borderRadius: 20,
    borderRightWidth: 8,
    borderRightColor: colors.grey400,
  },
  scrollViewContent: {
    paddingVertical: 10,
  },
  contactContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey400,
    paddingBottom: 10,
    paddingLeft: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  phone: {
    fontSize: 16,
    color: colors.grey600,
  },
});

export default Contacts;
