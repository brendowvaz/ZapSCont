import React, {useState} from 'react';
import {
  View,
  TextInput,
  Modal,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {Mask} from '@tboerc/maskfy';
import LinearGradient from 'react-native-linear-gradient';

import ddi from './components/ddi';
import styles from './styles';
import Input from '../input';
import colors from '../../assets/others/colors';
import {Flag_of_Brazil} from '../../assets/others/svg';

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    pais: 'Brasil',
    img: <Flag_of_Brazil />,
    ddi: 55,
    continente: 'América do Sul',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangePhone = text => {
    setPhone(Mask.phone.value(text));
  };

  const handleSearch = text => {
    setSearchTerm(text);
  };

  const renderCountryItem = ({item}) => {
    if (
      searchTerm.length > 0 &&
      !item.pais.toUpperCase().includes(searchTerm.toUpperCase())
    ) {
      return null;
    }

    return (
      <TouchableOpacity
        style={{
          padding: 5,
          backgroundColor: colors.white,
          borderTopColor: colors.grey300,
          borderTopWidth: 1,
          width: Dimensions.get('window').width,
        }}
        onPress={() => {
          setSelectedCountry(item);
          setModalVisible(false);
          setSearchTerm('');
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          {item.img ? (
            <View
              style={{
                width: 20,
                height: 15,
                marginRight: 10,
              }}>
              {item.img}
            </View>
          ) : (
            <View></View>
          )}
          <Text style={{color: colors.grey600}}>{item.pais}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
      }}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 80,
          height: 60,
          marginRight: 10,
          borderRadius: 20,
        }}>
        <View
          style={{
            width: 45,
            height: 2,
            backgroundColor: colors.grey500,
            position: 'absolute',
            zIndex: 1,
            bottom: 5,
          }}
        />
        {selectedCountry.img ? (
          selectedCountry.img
        ) : (
          <Text>{selectedCountry.pais}</Text>
        )}
      </TouchableOpacity>
      <Input
        style={{width: Dimensions.get('window').width - 170}}
        onChangeText={handleChangePhone}
        value={phone}
        placeholder="Telefone"
        onBlur={() => {}}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Input
            onChangeText={handleSearch}
            value={searchTerm}
            placeholder="Buscar país por nome"
            onBlur={() => {}}
          />
          <FlatList
            data={ddi}
            renderItem={renderCountryItem}
            keyExtractor={item => item.pais}
          />
        </View>
      </Modal>
    </View>
  );
};

export default PhoneNumberInput;
