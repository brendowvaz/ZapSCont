import React from 'react';
import {Image} from 'react-native';
import {Flag_of_Brazil} from '../../../assets/others/svg';
/* 
import {
  Flag_of_Afghanistan,
  Flag_of_Albania,
  Flag_of_Algeria,
  Flag_of_Angola,
  Flag_of_Anguilla,
  Flag_of_Antigua_and_Barbuda,
  Flag_of_Argentina,
  Flag_of_Armenia,
  Flag_of_Aruba,
  Flag_of_Australia,
  Flag_of_Austria,
  Flag_of_Azerbaijan,
  Flag_of_Bahrain,
  Flag_of_Bangladesh,
  Flag_of_Barbados,
  Flag_of_Belgium,
  Flag_of_Belize,
  Flag_of_Benin,
  Flag_of_Bermuda,
  Flag_of_Bhutan,
  Flag_of_Bolivia,
  Flag_of_Bosnia_and_Herzegovina,
  Flag_of_Botswana,
  Flag_of_Brazil,
  Flag_of_Brunei,
  Flag_of_Bulgaria,
  Flag_of_Burkina_Faso,
  Flag_of_Burundi,
  Flag_of_Cabo_Verde,
  Flag_of_Cambodia,
  Flag_of_Cameroon,
  Flag_of_Canada,
  Flag_of_Chad,
  Flag_of_Chile,
  Flag_of_China,
  Flag_of_Colombia,
  Flag_of_Costa_Marfim,
  Flag_of_Costa_Rica,
  Flag_of_Croatia,
  Flag_of_Cuba,
  Flag_of_Cyprus,
  Flag_of_Denmark,
  Flag_of_Djibouti,
  Flag_of_Dominica,
  Flag_of_Ecuador,
  Flag_of_Egypt,
  Flag_of_El_Salvador,
  Flag_of_Equatorial_Guinea,
  Flag_of_Eritrea,
  Flag_of_Estonia,
  Flag_of_Eswatini,
  Flag_of_Ethiopia,
  Flag_of_Fiji,
  Flag_of_Finland,
  Flag_of_France,
  Flag_of_Gabon,
  Flag_of_Georgia,
  Flag_of_Germany,
  Flag_of_Ghana,
  Flag_of_Gibraltar,
  Flag_of_Greece,
  Flag_of_Grenada,
  Flag_of_Groenlandia,
  Flag_of_Guadalupe,
  Flag_of_Guam,
  Flag_of_Guatemala,
  Flag_of_Guinea,
  Flag_of_Guinea_Bissau,
  Flag_of_Guyana,
  Flag_of_Guyana_France,
  Flag_of_Haiti,
  Flag_of_Honduras,
  Flag_of_Hungary,
  Flag_of_Iceland,
  Flag_of_India,
  Flag_of_Indonesia,
  Flag_of_Iran,
  Flag_of_Iraq,
  Flag_of_Ireland,
  Flag_of_Israel,
  Flag_of_Italy,
  Flag_of_Jamaica,
  Flag_of_Japan,
  Flag_of_Jordan,
  Flag_of_Kazakhstan,
  Flag_of_Kiribati,
  Flag_of_Kuwait,
  Flag_of_Kyrgyzstan,
  Flag_of_Laos,
  Flag_of_Lebanon,
  Flag_of_Lesotho,
  Flag_of_Liberia,
  Flag_of_Libya,
  Flag_of_Liechtenstein,
  Flag_of_Lithuania,
  Flag_of_Luxembourg,
  Flag_of_Madagascar,
  Flag_of_Malawi,
  Flag_of_Malaysia,
  Flag_of_Maldives,
  Flag_of_Mali,
  Flag_of_Malta,
  Flag_of_Martinica,
  Flag_of_Mauritania,
  Flag_of_Mauritius,
  Flag_of_Mayotte,
  Flag_of_Mexico,
  Flag_of_Moldova,
  Flag_of_Monaco,
  Flag_of_Mongolia,
  Flag_of_Morocco,
  Flag_of_Mozambique,
  Flag_of_Myanmar,
  Flag_of_Nauru,
  Flag_of_Nepal,
  Flag_of_New_Zealand,
  Flag_of_Nicaragua,
  Flag_of_Niger,
  Flag_of_Nigeria,
  Flag_of_Niue,
  Flag_of_North_Korea,
  Flag_of_Norway,
  Flag_of_Ocean_Indian,
  Flag_of_Oman,
  Flag_of_Pakistan,
  Flag_of_Palau,
  Flag_of_Panama,
  Flag_of_Papua_New_Guinea,
  Flag_of_Paraguay,
  Flag_of_Peru,
  Flag_of_Poland,
  Flag_of_Portugal,
  Flag_of_Qatar,
  Flag_of_Romania,
  Flag_of_Russia,
  Flag_of_Rwanda,
  Flag_of_Saint_Kitts_and_Nevis,
  Flag_of_Saint_Lucia,
  Flag_of_Samoa,
  Flag_of_San_Marino,
  Flag_of_Sao_Tome_and_Principe,
  Flag_of_Saudi_Arabia,
  Flag_of_Seychelles,
  Flag_of_Singapore,
  Flag_of_Slovakia,
  Flag_of_Slovenia,
  Flag_of_Somalia,
  Flag_of_South_Africa,
  Flag_of_South_Korea,
  Flag_of_Spain,
  Flag_of_Sri_Lanka,
  Flag_of_Sudan,
  Flag_of_Suriname,
  Flag_of_Sweden,
  Flag_of_Switzerland,
  Flag_of_Syria,
  Flag_of_Tanzania,
  Flag_of_Thailand,
  Flag_of_the_Bahamas,
  Flag_of_the_Cayman_Islands,
  Flag_of_the_Central_African_Republic,
  Flag_of_the_Cocos_Islands,
  Flag_of_the_Cook_Islands,
  Flag_of_the_Czech_Republic,
  Flag_of_The_Gambia,
  Flag_of_the_Marshall_Islands,
  Flag_of_the_Netherlands_Antilles,
  Flag_of_the_Philippines,
  Flag_of_the_Republic_of_the_Congo,
  Flag_of_the_Solomon_Islands,
  Flag_of_the_United_Arab_Emirates,
  Flag_of_the_United_Kingdom,
  Flag_of_the_United_States,
  Flag_of_Togo,
  Flag_of_Tonga,
  Flag_of_Trinidad_and_Tobago,
  Flag_of_Tunisia,
  Flag_of_Turkey,
  Flag_of_Turkmenistan,
  Flag_of_Tuvalu,
  Flag_of_Uganda,
  Flag_of_Ukraine,
  Flag_of_Uruguay,
  Flag_of_Uzbekistan,
  Flag_of_Vanuatu,
  Flag_of_Vatican_City,
  Flag_of_Venezuela,
  Flag_of_Vietnam,
  Flag_of_Yemen,
  Flag_of_Zambia,
  Flag_of_Zimbabwe,
} from '../../../assets/others/svg';
 */
const Flag_of_Afghanistan = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_South_Africa = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Albania = (
  <Image
    source={require('../../../assets/flags/Flag_of_Albania.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Germany = (
  <Image
    source={require('../../../assets/flags/Flag_of_Germany.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Andorra = (
  <Image
    source={require('../../../assets/flags/Flag_of_Andorra.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Angola = (
  <Image
    source={require('../../../assets/flags/Flag_of_Angola.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Anguilla = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Antigua_and_Barbuda = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_the_Netherlands_Antilles = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Saudi_Arabia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Saudi_Arabia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Algeria = (
  <Image
    source={require('../../../assets/flags/Flag_of_Algeria.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Argentina = (
  <Image
    source={require('../../../assets/flags/Flag_of_Argentina.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Armenia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Armenia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Aruba = (
  <Image
    source={require('../../../assets/flags/Flag_of_Aruba.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Australia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Australia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Austria = (
  <Image
    source={require('../../../assets/flags/Flag_of_Austria.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Azerbaijan = (
  <Image
    source={require('../../../assets/flags/Flag_of_Azerbaijan.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Bahamas = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Bahrain = (
  <Image
    source={require('../../../assets/flags/Flag_of_Bahrain.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Bangladesh = (
  <Image
    source={require('../../../assets/flags/Flag_of_Bangladesh.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Barbados = (
  <Image
    source={require('../../../assets/flags/Flag_of_Barbados.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Belarus = (
  <Image
    source={require('../../../assets/flags/Flag_of_Belarus.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Belgium = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Belize = (
  <Image
    source={require('../../../assets/flags/Flag_of_Belize.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Benin = (
  <Image
    source={require('../../../assets/flags/Flag_of_Benin.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Bermuda = (
  <Image
    source={require('../../../assets/flags/Flag_of_Bermuda.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Bhutan = (
  <Image
    source={require('../../../assets/flags/Flag_of_Bhutan.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Bolivia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Bolivia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Bosnia_and_Herzegovina = (
  <Image
    source={require('../../../assets/flags/Flag_of_Bosnia_and_Herzegovina.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Botswana = (
  <Image
    source={require('../../../assets/flags/Flag_of_Botswana.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
/* const Flag_of_Brazil = (
  <Image
    source={require('../../../assets/flags/Flag_of_Brazil.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
); */
const Flag_of_Brunei = (
  <Image
    source={require('../../../assets/flags/Flag_of_Brunei.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Bulgaria = (
  <Image
    source={require('../../../assets/flags/Flag_of_Bulgaria.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Burkina_Faso = (
  <Image
    source={require('../../../assets/flags/Flag_of_Burkina_Faso.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Burundi = (
  <Image
    source={require('../../../assets/flags/Flag_of_Burundi.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Cabo_Verde = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Cambodia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Cambodia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Cameroon = (
  <Image
    source={require('../../../assets/flags/Flag_of_Cameroon.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Canada = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Cayman_Islands = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Cayman_Islands.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Cocos_Islands = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Cocos_Islands.svg')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Cook_Islands = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Cook_Islands.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_the_Central_African_Republic = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Central_African_Republic.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Chad = (
  <Image
    source={require('../../../assets/flags/Flag_of_Chad.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Chile = (
  <Image
    source={require('../../../assets/flags/Flag_of_Chile.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_China = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Colombia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Colombia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Comoros = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Comoros.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Democratic_Republic_of_the_Congo = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Democratic_Republic_of_the_Congo.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_the_Republic_of_the_Congo = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Republic_of_the_Congo.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Costa_Rica = (
  <Image
    source={require('../../../assets/flags/Flag_of_Costa_Rica.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Croatia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Croatia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Cuba = (
  <Image
    source={require('../../../assets/flags/Flag_of_Cuba.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Cyprus = (
  <Image
    source={require('../../../assets/flags/Flag_of_Cyprus.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Czech_Republic = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Czech_Republic.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Denmark = (
  <Image
    source={require('../../../assets/flags/Flag_of_Denmark.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Djibouti = (
  <Image
    source={require('../../../assets/flags/Flag_of_Djibouti.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Dominica = (
  <Image
    source={require('../../../assets/flags/Flag_of_Dominica.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Dominican_Republic = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Dominican_Republic.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_East_Timor = (
  <Image
    source={require('../../../assets/flags/Flag_of_East_Timor.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Ecuador = (
  <Image
    source={require('../../../assets/flags/Flag_of_Ecuador.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Egypt = (
  <Image
    source={require('../../../assets/flags/Flag_of_Egypt.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_El_Salvador = (
  <Image
    source={require('../../../assets/flags/Flag_of_El_Salvador.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Equatorial_Guinea = (
  <Image
    source={require('../../../assets/flags/Flag_of_Equatorial_Guinea.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Eritrea = (
  <Image
    source={require('../../../assets/flags/Flag_of_Eritrea.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Estonia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Estonia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Eswatini = (
  <Image
    source={require('../../../assets/flags/Flag_of_Eswatini.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Ethiopia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Ethiopia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Fiji = (
  <Image
    source={require('../../../assets/flags/Flag_of_Fiji.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Finland = (
  <Image
    source={require('../../../assets/flags/Flag_of_Finland.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_France = (
  <Image
    source={require('../../../assets/flags/Flag_of_France.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Gabon = (
  <Image
    source={require('../../../assets/flags/Flag_of_Gabon.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_The_Gambia = (
  <Image
    source={require('../../../assets/flags/Flag_of_The_Gambia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Georgia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Georgia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Gibraltar = (
  <Image
    source={require('../../../assets/flags/Flag_of_Gibraltar.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Ghana = (
  <Image
    source={require('../../../assets/flags/Flag_of_Ghana.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Greece = (
  <Image
    source={require('../../../assets/flags/Flag_of_Greece.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Guam = (
  <Image
    source={require('../../../assets/flags/Flag_of_Guam.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Grenada = (
  <Image
    source={require('../../../assets/flags/Flag_of_Grenada.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Guatemala = (
  <Image
    source={require('../../../assets/flags/Flag_of_Guatemala.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Guinea = (
  <Image
    source={require('../../../assets/flags/Flag_of_Guinea.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Guinea_Bissau = (
  <Image
    source={require('../../../assets/flags/Flag_of_Guinea-Bissau.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Guyana = (
  <Image
    source={require('../../../assets/flags/Flag_of_Guyana.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Haiti = (
  <Image
    source={require('../../../assets/flags/Flag_of_Haiti.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Honduras = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Hungary = (
  <Image
    source={require('../../../assets/flags/Flag_of_Hungary.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Iceland = (
  <Image
    source={require('../../../assets/flags/Flag_of_Iceland.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_India = (
  <Image
    source={require('../../../assets/flags/Flag_of_India.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Indonesia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Indonesia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Iran = (
  <Image
    source={require('../../../assets/flags/Flag_of_Iran.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Iraq = (
  <Image
    source={require('../../../assets/flags/Flag_of_Iraq.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Ireland = (
  <Image
    source={require('../../../assets/flags/Flag_of_Ireland.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Israel = (
  <Image
    source={require('../../../assets/flags/Flag_of_Israel.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Italy = (
  <Image
    source={require('../../../assets/flags/Flag_of_Italy.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Jamaica = (
  <Image
    source={require('../../../assets/flags/Flag_of_Jamaica.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Japan = (
  <Image
    source={require('../../../assets/flags/Flag_of_Japan.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Jordan = (
  <Image
    source={require('../../../assets/flags/Flag_of_Jordan.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Kazakhstan = (
  <Image
    source={require('../../../assets/flags/Flag_of_Kazakhstan.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Kiribati = (
  <Image
    source={require('../../../assets/flags/Flag_of_Kiribati.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_North_Korea = (
  <Image
    source={require('../../../assets/flags/Flag_of_North_Korea.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_South_Korea = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Korea.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Kuwait = (
  <Image
    source={require('../../../assets/flags/Flag_of_Kuwait.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Kyrgyzstan = (
  <Image
    source={require('../../../assets/flags/Flag_of_Kyrgyzstan.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Laos = (
  <Image
    source={require('../../../assets/flags/Flag_of_Laos.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Lebanon = (
  <Image
    source={require('../../../assets/flags/Flag_of_Lebanon.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Lesotho = (
  <Image
    source={require('../../../assets/flags/Flag_of_Lesotho.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Liberia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Liberia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Libya = (
  <Image
    source={require('../../../assets/flags/Flag_of_Libya.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Liechtenstein = (
  <Image
    source={require('../../../assets/flags/Flag_of_Liechtenstein.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Lithuania = (
  <Image
    source={require('../../../assets/flags/Flag_of_Lithuania.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Luxembourg = (
  <Image
    source={require('../../../assets/flags/Flag_of_Luxembourg.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Madagascar = (
  <Image
    source={require('../../../assets/flags/Flag_of_Madagascar.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Malawi = (
  <Image
    source={require('../../../assets/flags/Flag_of_Malawi.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Malaysia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Malaysia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Maldives = (
  <Image
    source={require('../../../assets/flags/Flag_of_Maldives.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Mali = (
  <Image
    source={require('../../../assets/flags/Flag_of_Mali.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Malta = (
  <Image
    source={require('../../../assets/flags/Flag_of_Malta.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Marshall_Islands = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Marshall_Islands.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Mauritania = (
  <Image
    source={require('../../../assets/flags/Flag_of_Mauritania.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Mauritius = (
  <Image
    source={require('../../../assets/flags/Flag_of_Mauritius.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Mexico = (
  <Image
    source={require('../../../assets/flags/Flag_of_Mexico.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Moldova = (
  <Image
    source={require('../../../assets/flags/Flag_of_Moldova.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Monaco = (
  <Image
    source={require('../../../assets/flags/Flag_of_Monaco.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Mongolia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Mongolia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Morocco = (
  <Image
    source={require('../../../assets/flags/Flag_of_Morocco.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Mozambique = (
  <Image
    source={require('../../../assets/flags/Flag_of_Mozambique.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Myanmar = (
  <Image
    source={require('../../../assets/flags/Flag_of_Myanmar.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Namibia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Namibia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Nauru = (
  <Image
    source={require('../../../assets/flags/Flag_of_Nauru.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Nepal = (
  <Image
    source={require('../../../assets/flags/Flag_of_Nepal.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_New_Zealand = (
  <Image
    source={require('../../../assets/flags/Flag_of_New_Zealand.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Nicaragua = (
  <Image
    source={require('../../../assets/flags/Flag_of_Nicaragua.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Niger = (
  <Image
    source={require('../../../assets/flags/Flag_of_Niger.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Nigeria = (
  <Image
    source={require('../../../assets/flags/Flag_of_Nigeria.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Niue = (
  <Image
    source={require('../../../assets/flags/Flag_of_Niue.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Norway = (
  <Image
    source={require('../../../assets/flags/Flag_of_Norway.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Oman = (
  <Image
    source={require('../../../assets/flags/Flag_of_Oman.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Pakistan = (
  <Image
    source={require('../../../assets/flags/Flag_of_Pakistan.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Palau = (
  <Image
    source={require('../../../assets/flags/Flag_of_Palau.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Panama = (
  <Image
    source={require('../../../assets/flags/Flag_of_Panama.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Papua_New_Guinea = (
  <Image
    source={require('../../../assets/flags/Flag_of_Papua_New_Guinea.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Paraguay = (
  <Image
    source={require('../../../assets/flags/Flag_of_Paraguay.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Peru = (
  <Image
    source={require('../../../assets/flags/Flag_of_Peru.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Philippines = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Philippines.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Poland = (
  <Image
    source={require('../../../assets/flags/Flag_of_Poland.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Portugal = (
  <Image
    source={require('../../../assets/flags/Flag_of_Portugal.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Qatar = (
  <Image
    source={require('../../../assets/flags/Flag_of_Qatar.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Romania = (
  <Image
    source={require('../../../assets/flags/Flag_of_Romania.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Russia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Russia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Rwanda = (
  <Image
    source={require('../../../assets/flags/Flag_of_Rwanda.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Saint_Kitts_and_Nevis = (
  <Image
    source={require('../../../assets/flags/Flag_of_Saint_Kitts_and_Nevis.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Saint_Lucia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Saint_Lucia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Samoa = (
  <Image
    source={require('../../../assets/flags/Flag_of_Samoa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_San_Marino = (
  <Image
    source={require('../../../assets/flags/Flag_of_San_Marino.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Sao_Tome_and_Principe = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Seychelles = (
  <Image
    source={require('../../../assets/flags/Flag_of_Seychelles.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Singapore = (
  <Image
    source={require('../../../assets/flags/Flag_of_Singapore.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Slovakia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Slovakia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Slovenia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Slovenia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_Solomon_Islands = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_Solomon_Islands.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Somalia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Somalia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Spain = (
  <Image
    source={require('../../../assets/flags/Flag_of_Spain.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Sri_Lanka = (
  <Image
    source={require('../../../assets/flags/Flag_of_Sri_Lanka.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Sudan = (
  <Image
    source={require('../../../assets/flags/Flag_of_Sudan.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Suriname = (
  <Image
    source={require('../../../assets/flags/Flag_of_Suriname.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Sweden = (
  <Image
    source={require('../../../assets/flags/Flag_of_Sweden.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Switzerland = (
  <Image
    source={require('../../../assets/flags/Flag_of_Switzerland.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Syria = (
  <Image
    source={require('../../../assets/flags/Flag_of_Syria.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Tanzania = (
  <Image
    source={require('../../../assets/flags/Flag_of_Tanzania.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Thailand = (
  <Image
    source={require('../../../assets/flags/Flag_of_Thailand.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Togo = (
  <Image
    source={require('../../../assets/flags/Flag_of_Togo.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Tonga = (
  <Image
    source={require('../../../assets/flags/Flag_of_Tonga.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Trinidad_and_Tobago = (
  <Image
    source={require('../../../assets/flags/Flag_of_Trinidad_and_Tobago.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Tunisia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Tunisia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Turkey = (
  <Image
    source={require('../../../assets/flags/Flag_of_Turkey.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Turkmenistan = (
  <Image
    source={require('../../../assets/flags/Flag_of_Turkmenistan.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Tuvalu = (
  <Image
    source={require('../../../assets/flags/Flag_of_Tuvalu.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Uganda = (
  <Image
    source={require('../../../assets/flags/Flag_of_Uganda.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Ukraine = (
  <Image
    source={require('../../../assets/flags/Flag_of_Ukraine.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_the_United_Arab_Emirates = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_United_Arab_Emirates.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_the_United_Kingdom = (
  <Image
    source={require('../../../assets/flags/Flag_of_South_Africa.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_the_United_States = (
  <Image
    source={require('../../../assets/flags/Flag_of_the_United_States.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

const Flag_of_Uruguay = (
  <Image
    source={require('../../../assets/flags/Flag_of_Uruguay.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Uzbekistan = (
  <Image
    source={require('../../../assets/flags/Flag_of_Uzbekistan.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Vanuatu = (
  <Image
    source={require('../../../assets/flags/Flag_of_Vanuatu.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Venezuela = (
  <Image
    source={require('../../../assets/flags/Flag_of_Venezuela.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Vietnam = (
  <Image
    source={require('../../../assets/flags/Flag_of_Vietnam.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Yemen = (
  <Image
    source={require('../../../assets/flags/Flag_of_Yemen.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Zambia = (
  <Image
    source={require('../../../assets/flags/Flag_of_Zambia.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);
const Flag_of_Zimbabwe = (
  <Image
    source={require('../../../assets/flags/Flag_of_Zimbabwe.svg.png')}
    style={{width: '100%', height: '100%'}}
  />
);

export default ddi = [
  {
    pais: 'Afeganistão',
    img: Flag_of_Afghanistan,
    ddi: 93,
    continente: 'Ásia',
  },
  {
    pais: 'África do Sul',
    img: Flag_of_South_Africa,
    ddi: 27,
    continente: 'África',
  },
  {
    pais: 'Albânia',
    img: Flag_of_Albania,
    ddi: 355,
    continente: 'Europa',
  },
  {
    pais: 'Alemanha',
    img: Flag_of_Germany,
    ddi: 49,
    continente: 'Europa',
  },
  {
    pais: 'Andorra',
    /* img: Flag_of_Andorra, */
    ddi: 376,
    continente: 'Europa',
  },
  {
    pais: 'Angola',
    img: Flag_of_Angola,
    ddi: 244,
    continente: 'África',
  },
  {
    pais: 'Anguilla',
    img: Flag_of_Anguilla,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Antígua e Barbuda',
    img: Flag_of_Antigua_and_Barbuda,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Antilhas Holandesas',
    img: Flag_of_the_Netherlands_Antilles,
    ddi: 599,
    continente: 'América Central',
  },
  {
    pais: 'Arábia Saudita',
    img: Flag_of_Saudi_Arabia,
    ddi: 966,
    continente: 'Ásia',
  },
  {
    pais: 'Argélia',
    img: Flag_of_Algeria,
    ddi: 213,
    continente: 'África',
  },
  {
    pais: 'Argentina',
    img: Flag_of_Argentina,
    ddi: 54,
    continente: 'América do Sul',
  },
  {
    pais: 'Armênia',
    img: Flag_of_Armenia,
    ddi: 374,
    continente: 'Ásia',
  },
  {
    pais: 'Aruba',
    img: Flag_of_Aruba,
    ddi: 297,
    continente: 'América Central',
  },
  {
    pais: 'Ascensão',
    ddi: 247,
    continente: 'África',
  },
  {
    pais: 'Austrália',
    img: Flag_of_Australia,
    ddi: 61,
    continente: 'Oceania',
  },
  {
    pais: 'Áustria',
    img: Flag_of_Austria,
    ddi: 43,
    continente: 'Europa',
  },
  {
    pais: 'Azerbaijão',
    img: Flag_of_Azerbaijan,
    ddi: 994,
    continente: 'Ásia',
  },
  {
    pais: 'Bahamas',
    img: Flag_of_the_Bahamas,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Bangladesh',
    img: Flag_of_Bangladesh,
    ddi: 880,
    continente: 'Ásia',
  },
  {
    pais: 'Barbados',
    img: Flag_of_Barbados,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Bahrein',
    img: Flag_of_Bahrain,
    ddi: 973,
    continente: 'Ásia',
  },
  {
    pais: 'Bélgica',
    img: Flag_of_Belgium,
    ddi: 32,
    continente: 'Europa',
  },
  {
    pais: 'Belize',
    img: Flag_of_Belize,
    ddi: 501,
    continente: 'América Central',
  },
  {
    pais: 'Benim',
    img: Flag_of_Benin,
    ddi: 229,
    continente: 'África',
  },
  {
    pais: 'Bermudas',
    img: Flag_of_Bermuda,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Bielorrússia',
    /* img: Flag_of_Belarus, */
    ddi: 375,
    continente: 'Europa',
  },
  {
    pais: 'Bolívia',
    img: Flag_of_Bolivia,
    ddi: 591,
    continente: 'América do Sul',
  },
  {
    pais: 'Bósnia e Herzegovina',
    img: Flag_of_Bosnia_and_Herzegovina,
    ddi: 387,
    continente: 'Europa',
  },
  {
    pais: 'Botswana',
    img: Flag_of_Botswana,
    ddi: 267,
    continente: 'África',
  },
  {
    pais: 'Brasil',
    img: <Flag_of_Brazil />,
    ddi: 55,
    continente: 'América do Sul',
  },
  {
    pais: 'Brunei',
    img: Flag_of_Brunei,
    ddi: 673,
    continente: 'Ásia',
  },
  {
    pais: 'Bulgária',
    img: Flag_of_Bulgaria,
    ddi: 359,
    continente: 'Europa',
  },
  {
    pais: 'Burkina Faso',
    img: Flag_of_Burkina_Faso,
    ddi: 226,
    continente: 'África',
  },
  {
    pais: 'Burundi',
    img: Flag_of_Burundi,
    ddi: 257,
    continente: 'África',
  },
  {
    pais: 'Butão',
    img: Flag_of_Bhutan,
    ddi: 975,
    continente: 'Ásia',
  },
  {
    pais: 'Cabo Verde',
    img: Flag_of_Cabo_Verde,
    ddi: 238,
    continente: 'África',
  },
  {
    pais: 'Camarões',
    img: Flag_of_Cameroon,
    ddi: 237,
    continente: 'África',
  },
  {
    pais: 'Camboja',
    img: Flag_of_Cambodia,
    ddi: 855,
    continente: 'Ásia',
  },
  {
    pais: 'Canadá',
    img: Flag_of_Canada,
    ddi: 1,
    continente: 'América do Norte',
  },
  {
    pais: 'Cazaquistão',
    img: Flag_of_Kazakhstan,
    ddi: 7,
    continente: 'Ásia',
  },
  {
    pais: 'Chade',
    img: Flag_of_Chad,
    ddi: 235,
    continente: 'África',
  },
  {
    pais: 'Chile',
    img: Flag_of_Chile,
    ddi: 56,
    continente: 'América do Sul',
  },
  {
    pais: 'República Popular da China',
    img: Flag_of_China,
    ddi: 86,
    continente: 'Ásia',
  },
  {
    pais: 'Chipre',
    img: Flag_of_Cyprus,
    ddi: 357,
    continente: 'Europa',
  },
  {
    pais: 'Colômbia',
    img: Flag_of_Colombia,
    ddi: 57,
    continente: 'América do Sul',
  },
  {
    pais: 'Comores',
    /* img: Flag_of_the_Comoros, */
    ddi: 269,
    continente: 'África',
  },
  {
    pais: 'CongoBrazzaville',
    img: Flag_of_the_Republic_of_the_Congo,
    ddi: 242,
    continente: 'África',
  },
  {
    pais: 'CongoKinshasa',
    /*  img: Flag_of_the_Democratic_Republic_of_the_Congo, */
    ddi: 243,
    continente: 'África',
  },
  {
    pais: 'Coreia do Norte',
    img: Flag_of_North_Korea,
    ddi: 850,
    continente: 'Ásia',
  },
  {
    pais: 'Coreia do Sul',
    img: Flag_of_South_Korea,
    ddi: 82,
    continente: 'Ásia',
  },
  /*   {
    pais: 'Costa do Marfim',
    img: Flag_of_Costa_Marfim
    ddi: 225,
    continente: 'África',
  }, */
  {
    pais: 'Costa Rica',
    img: Flag_of_Costa_Rica,
    ddi: 506,
    continente: 'América Central',
  },
  {
    pais: 'Croácia',
    img: Flag_of_Croatia,
    ddi: 385,
    continente: 'Europa',
  },
  {
    pais: 'Cuba',
    img: Flag_of_Cuba,
    ddi: 53,
    continente: 'América Central',
  },
  {
    pais: 'Dinamarca',
    img: Flag_of_Denmark,
    ddi: 45,
    continente: 'Europa',
  },
  {
    pais: 'Djibuti',
    img: Flag_of_Djibouti,
    ddi: 253,
    continente: 'África',
  },
  {
    pais: 'Dominica',
    img: Flag_of_Dominica,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Egipto',
    img: Flag_of_Egypt,
    ddi: 20,
    continente: 'África/Ásia',
  },
  {
    pais: 'El Salvador',
    img: Flag_of_El_Salvador,
    ddi: 503,
    continente: 'América Central',
  },
  {
    pais: 'Emirados Árabes Unidos',
    img: Flag_of_the_United_Arab_Emirates,
    ddi: 971,
    continente: 'Ásia',
  },
  {
    pais: 'Equador',
    img: Flag_of_Ecuador,
    ddi: 593,
    continente: 'América do Sul',
  },
  {
    pais: 'Eritreia',
    img: Flag_of_Eritrea,
    ddi: 291,
    continente: 'África',
  },
  {
    pais: 'Eslováquia',
    img: Flag_of_Slovakia,
    ddi: 421,
    continente: 'Europa',
  },
  {
    pais: 'Eslovénia',
    img: Flag_of_Slovenia,
    ddi: 386,
    continente: 'Europa',
  },
  {
    pais: 'Espanha',
    img: Flag_of_Spain,
    ddi: 34,
    continente: 'Europa',
  },
  {
    pais: 'Estados Unidos',
    img: Flag_of_the_United_States,
    ddi: 1,
    continente: 'América do Norte',
  },
  {
    pais: 'Estónia',
    img: Flag_of_Estonia,
    ddi: 372,
    continente: 'Europa',
  },
  {
    pais: 'Etiópia',
    img: Flag_of_Ethiopia,
    ddi: 251,
    continente: 'África',
  },
  {
    pais: 'Fiji',
    img: Flag_of_Fiji,
    ddi: 679,
    continente: 'Oceania',
  },
  {
    pais: 'Filipinas',
    img: Flag_of_the_Philippines,
    ddi: 63,
    continente: 'Ásia',
  },
  {
    pais: 'Finlândia',
    img: Flag_of_Finland,
    ddi: 358,
    continente: 'Europa',
  },
  {
    pais: 'França',
    img: Flag_of_France,
    ddi: 33,
    continente: 'Europa',
  },
  {
    pais: 'Gabão',
    img: Flag_of_Gabon,
    ddi: 241,
    continente: 'África',
  },
  {
    pais: 'Gâmbia',
    img: Flag_of_The_Gambia,
    ddi: 220,
    continente: 'África',
  },
  {
    pais: 'Gana',
    img: Flag_of_Ghana,
    ddi: 233,
    continente: 'África',
  },
  {
    pais: 'Geórgia',
    img: Flag_of_Georgia,
    ddi: 995,
    continente: 'Ásia',
  },
  {
    pais: 'Gibraltar',
    img: Flag_of_Gibraltar,
    ddi: 350,
    continente: 'Europa',
  },
  {
    pais: 'Granada',
    img: Flag_of_Grenada,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Grécia',
    img: Flag_of_Greece,
    ddi: 30,
    continente: 'Europa',
  },
  /*   {
    pais: 'Groenlândia',
    img: Flag_of_Groenlandia
    ddi: 299,
    continente: 'América do Norte',
  }, */
  /*   {
    pais: 'Guadalupe',
    img: Flag_of_Guadalupe
    ddi: 590,
    continente: 'América Central',
  }, */
  {
    pais: 'Guam',
    img: Flag_of_Guam,
    ddi: 1,
    continente: 'Oceania',
  },
  {
    pais: 'Guatemala',
    img: Flag_of_Guatemala,
    ddi: 502,
    continente: 'América Central',
  },
  {
    pais: 'Guiana',
    img: Flag_of_Guyana,
    ddi: 592,
    continente: 'América do Sul',
  },
  /*   {
    pais: 'Guiana Francesa',
    img: Flag_of_Guyana_France
    ddi: 594,
    continente: 'América do Sul',
  }, */
  {
    pais: 'Guiné',
    img: Flag_of_Guinea,
    ddi: 224,
    continente: 'África',
  },
  {
    pais: 'GuinéBissau',
    img: Flag_of_Guinea_Bissau,
    ddi: 245,
    continente: 'África',
  },
  {
    pais: 'Guiné Equatorial',
    img: Flag_of_Equatorial_Guinea,
    ddi: 240,
    continente: 'África',
  },
  {
    pais: 'Haiti',
    img: Flag_of_Haiti,
    ddi: 509,
    continente: 'América Central',
  },
  {
    pais: 'Honduras',
    img: Flag_of_Honduras,
    ddi: 504,
    continente: 'América Central',
  },
  {
    pais: 'Hong Kong',
    /* img: Flag_of_Hong_Kong, */
    ddi: 852,
    continente: 'Ásia',
  },
  {
    pais: 'Hungria',
    img: Flag_of_Hungary,
    ddi: 36,
    continente: 'Europa',
  },
  {
    pais: 'Iêmen',
    img: Flag_of_Yemen,
    ddi: 967,
    continente: 'Ásia',
  },
  {
    pais: 'Ilhas Cayman',
    img: Flag_of_the_Cayman_Islands,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Ilha Christmas',
    img: Flag_of_South_Africa,
    ddi: 672,
    continente: 'Oceania',
  },
  /*   {
    pais: 'Ilhas Cocos',
    img: Flag_of_the_Cocos_Islands
    ddi: 672,
    continente: 'Oceania',
  }, */
  {
    pais: 'Ilhas Cook',
    img: Flag_of_the_Cook_Islands,
    ddi: 682,
    continente: 'Oceania',
  },
  {
    pais: 'Ilhas Féroe',
    img: Flag_of_South_Africa,
    ddi: 298,
    continente: 'Europa',
  },
  {
    pais: 'Ilha Heard e Ilhas McDonald',
    img: Flag_of_Australia,
    ddi: 672,
    continente: 'Oceania',
  },
  {
    pais: 'Maldivas',
    img: Flag_of_Maldives,
    ddi: 960,
    continente: 'Ásia',
  },
  {
    pais: 'Ilhas Malvinas',
    img: Flag_of_South_Africa,
    ddi: 500,
    continente: 'América do Sul',
  },
  {
    pais: 'Ilhas Marianas do Norte',
    img: Flag_of_South_Africa,
    ddi: 1,
    continente: 'Oceania',
  },
  {
    pais: 'Ilhas Marshall',
    img: Flag_of_the_Marshall_Islands,
    ddi: 692,
    continente: 'Oceania',
  },
  {
    pais: 'Ilha Norfolk',
    img: Flag_of_South_Africa,
    ddi: 672,
    continente: 'Oceania',
  },
  {
    pais: 'Ilhas Salomão',
    img: Flag_of_the_Solomon_Islands,
    ddi: 677,
    continente: 'Oceania',
  },
  {
    pais: 'Ilhas Virgens Americanas',
    img: Flag_of_South_Africa,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Ilhas Virgens Britânicas',
    img: Flag_of_South_Africa,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Índia',
    img: Flag_of_India,
    ddi: 91,
    continente: 'Ásia',
  },
  {
    pais: 'Indonésia',
    img: Flag_of_Indonesia,
    ddi: 62,
    continente: 'Ásia/Oceania',
  },
  {
    pais: 'Irã',
    img: Flag_of_Iran,
    ddi: 98,
    continente: 'Ásia',
  },
  {
    pais: 'Iraque',
    img: Flag_of_Iraq,
    ddi: 964,
    continente: 'Ásia',
  },
  {
    pais: 'Irlanda',
    img: Flag_of_Ireland,
    ddi: 353,
    continente: 'Europa',
  },
  {
    pais: 'Islândia',
    img: Flag_of_Iceland,
    ddi: 354,
    continente: 'Europa',
  },
  {
    pais: 'Israel',
    img: Flag_of_Israel,
    ddi: 972,
    continente: 'Ásia',
  },
  {
    pais: 'Itália',
    img: Flag_of_Italy,
    ddi: 39,
    continente: 'Europa',
  },
  {
    pais: 'Jamaica',
    img: Flag_of_Jamaica,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Japão',
    img: Flag_of_Japan,
    ddi: 81,
    continente: 'Ásia',
  },
  {
    pais: 'Jordânia',
    img: Flag_of_Jordan,
    ddi: 962,
    continente: 'Ásia',
  },
  {
    pais: 'Kiribati',
    img: Flag_of_Kiribati,
    ddi: 686,
    continente: 'Oceania',
  },
  {
    pais: 'Kosovo',
    img: Flag_of_South_Africa,
    ddi: 383,
    continente: 'Europa',
  },
  {
    pais: 'Kuwait',
    img: Flag_of_Kuwait,
    ddi: 965,
    continente: 'Ásia',
  },
  {
    pais: 'Laos',
    img: Flag_of_Laos,
    ddi: 856,
    continente: 'Ásia',
  },
  {
    pais: 'Lesoto',
    img: Flag_of_Lesotho,
    ddi: 266,
    continente: 'África',
  },
  {
    pais: 'Letônia',
    /* img: Flag_of_Latvia, */
    ddi: 371,
    continente: 'Europa',
  },
  {
    pais: 'Líbano',
    img: Flag_of_Lebanon,
    ddi: 961,
    continente: 'Ásia',
  },
  {
    pais: 'Libéria',
    img: Flag_of_Liberia,
    ddi: 231,
    continente: 'África',
  },
  {
    pais: 'Líbia',
    img: Flag_of_Libya,
    ddi: 218,
    continente: 'África',
  },
  {
    pais: 'Liechtenstein',
    img: Flag_of_Liechtenstein,
    ddi: 423,
    continente: 'Europa',
  },
  {
    pais: 'Lituânia',
    img: Flag_of_Lithuania,
    ddi: 370,
    continente: 'Europa',
  },
  {
    pais: 'Luxemburgo',
    img: Flag_of_Luxembourg,
    ddi: 352,
    continente: 'Europa',
  },
  {
    pais: 'Macau',
    img: Flag_of_South_Africa,
    ddi: 853,
    continente: 'Ásia',
  },
  {
    pais: 'República da Macedônia',
    img: Flag_of_South_Africa,
    ddi: 389,
    continente: 'Europa',
  },
  {
    pais: 'Madagascar',
    img: Flag_of_Madagascar,
    ddi: 261,
    continente: 'África',
  },
  {
    pais: 'Malásia',
    img: Flag_of_Malaysia,
    ddi: 60,
    continente: 'Ásia',
  },
  {
    pais: 'Malawi',
    img: Flag_of_Malawi,
    ddi: 265,
    continente: 'África',
  },
  {
    pais: 'Mali',
    img: Flag_of_Mali,
    ddi: 223,
    continente: 'África',
  },
  {
    pais: 'Malta',
    img: Flag_of_Malta,
    ddi: 356,
    continente: 'Europa',
  },
  {
    pais: 'Marrocos',
    img: Flag_of_Morocco,
    ddi: 212,
    continente: 'África',
  },
  /*   {
    pais: 'Martinica',
    img: Flag_of_Martinica
    ddi: 596,
    continente: 'América Central',
  }, */
  {
    pais: 'Maurícia',
    img: Flag_of_Mauritius,
    ddi: 230,
    continente: 'África',
  },
  {
    pais: 'Mauritânia',
    img: Flag_of_Mauritania,
    ddi: 222,
    continente: 'África',
  },
  /*   {
    pais: 'Mayotte',
    img: Flag_of_Mayotte
    ddi: 269,
    continente: 'África',
  }, */
  {
    pais: 'México',
    img: Flag_of_Mexico,
    ddi: 52,
    continente: 'América do Norte',
  },
  {
    pais: 'Estados Federados da Micronésia',
    img: Flag_of_South_Africa,
    ddi: 691,
    continente: 'Oceania',
  },
  {
    pais: 'Moçambique',
    img: Flag_of_Mozambique,
    ddi: 258,
    continente: 'África',
  },
  {
    pais: 'Moldávia',
    img: Flag_of_Moldova,
    ddi: 373,
    continente: 'Europa',
  },
  {
    pais: 'Mônaco',
    img: Flag_of_Monaco,
    ddi: 377,
    continente: 'Europa',
  },
  {
    pais: 'Mongólia',
    img: Flag_of_Mongolia,
    ddi: 976,
    continente: 'Ásia',
  },
  {
    pais: 'Montenegro',
    /* img: Flag_of_Montenegro, */
    ddi: 382,
    continente: 'Europa',
  },
  {
    pais: 'Montserrat',
    img: Flag_of_South_Africa,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Myanmar',
    img: Flag_of_Myanmar,
    ddi: 95,
    continente: 'Ásia',
  },
  {
    pais: 'Namíbia',
    /* img: Flag_of_Namibia, */
    ddi: 264,
    continente: 'África',
  },
  {
    pais: 'Nauru',
    img: Flag_of_Nauru,
    ddi: 674,
    continente: 'Oceania',
  },
  {
    pais: 'Nepal',
    img: Flag_of_Nepal,
    ddi: 977,
    continente: 'Ásia',
  },
  {
    pais: 'Nicarágua',
    img: Flag_of_Nicaragua,
    ddi: 505,
    continente: 'América Central',
  },
  {
    pais: 'Níger',
    img: Flag_of_Niger,
    ddi: 227,
    continente: 'África',
  },
  {
    pais: 'Nigéria',
    img: Flag_of_Nigeria,
    ddi: 234,
    continente: 'África',
  },
  {
    pais: 'Niue',
    img: Flag_of_Niue,
    ddi: 683,
    continente: 'Oceania',
  },
  {
    pais: 'Noruega',
    img: Flag_of_Norway,
    ddi: 47,
    continente: 'Europa',
  },
  {
    pais: 'Nova Caledônia',
    img: Flag_of_South_Africa,
    ddi: 687,
    continente: 'Oceania',
  },
  {
    pais: 'Nova Zelândia',
    img: Flag_of_New_Zealand,
    ddi: 64,
    continente: 'Oceania',
  },
  {
    pais: 'Omã',
    img: Flag_of_Oman,
    ddi: 968,
    continente: 'Ásia',
  },
  {
    pais: 'Países Baixos',
    /* img: Flag_of_the_Netherlands, */
    ddi: 31,
    continente: 'Europa',
  },
  {
    pais: 'Palau',
    img: Flag_of_Palau,
    ddi: 680,
    continente: 'Oceania',
  },
  {
    pais: 'Palestina',
    /* img: Flag_of_Palestine, */
    ddi: 970,
    continente: 'Ásia',
  },
  {
    pais: 'Panamá',
    img: Flag_of_Panama,
    ddi: 507,
    continente: 'América Central',
  },
  {
    pais: 'PapuaNova Guiné',
    img: Flag_of_Papua_New_Guinea,
    ddi: 675,
    continente: 'Oceania',
  },
  {
    pais: 'Paquistão',
    img: Flag_of_Pakistan,
    ddi: 92,
    continente: 'Ásia',
  },
  {
    pais: 'Paraguai',
    img: Flag_of_Paraguay,
    ddi: 595,
    continente: 'América do Sul',
  },
  {
    pais: 'Peru',
    img: Flag_of_Peru,
    ddi: 51,
    continente: 'América do Sul',
  },
  {
    pais: 'Polinésia Francesa',
    img: Flag_of_South_Africa,
    ddi: 689,
    continente: 'Oceania',
  },
  {
    pais: 'Polônia',
    img: Flag_of_Poland,
    ddi: 48,
    continente: 'Europa',
  },
  {
    pais: 'Porto Rico',
    img: Flag_of_South_Africa,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Portugal',
    img: Flag_of_Portugal,
    ddi: 351,
    continente: 'Europa',
  },
  {
    pais: 'Qatar',
    img: Flag_of_Qatar,
    ddi: 974,
    continente: 'Ásia',
  },
  {
    pais: 'Quênia',
    /* img: Flag_of_Kenya, */
    ddi: 254,
    continente: 'África',
  },
  {
    pais: 'Quirguistão',
    img: Flag_of_Kyrgyzstan,
    ddi: 996,
    continente: 'Ásia',
  },
  {
    pais: 'Reino Unido',
    img: Flag_of_the_United_Kingdom,
    ddi: 44,
    continente: 'Europa',
  },
  {
    pais: 'República CentroAfricana',
    img: Flag_of_the_Central_African_Republic,
    ddi: 236,
    continente: 'África',
  },
  {
    pais: 'República Dominicana',
    /* img: Flag_of_the_Dominican_Republic, */
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'República Tcheca',
    img: Flag_of_the_Czech_Republic,
    ddi: 420,
    continente: 'Europa',
  },
  {
    pais: 'Reunião',
    img: Flag_of_France,
    ddi: 262,
    continente: 'África',
  },
  {
    pais: 'Romênia',
    img: Flag_of_Romania,
    ddi: 40,
    continente: 'Europa',
  },
  {
    pais: 'Ruanda',
    img: Flag_of_Rwanda,
    ddi: 250,
    continente: 'África',
  },
  {
    pais: 'Rússia',
    img: Flag_of_Russia,
    ddi: 7,
    continente: 'Europa/Ásia',
  },
  {
    pais: 'Saara Ocidental',
    img: Flag_of_South_Africa,
    ddi: 212,
    continente: 'África',
  },
  {
    pais: 'Samoa',
    img: Flag_of_Samoa,
    ddi: 685,
    continente: 'Oceania',
  },
  {
    pais: 'Samoa Americana',
    img: Flag_of_South_Africa,
    ddi: 1,
    continente: 'Oceania',
  },
  {
    pais: 'Santa Helena território',
    img: Flag_of_South_Africa,
    ddi: 290,
    continente: 'África',
  },
  {
    pais: 'Santa Lúcia',
    img: Flag_of_Saint_Lucia,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'São Cristóvão e Nevis',
    img: Flag_of_Saint_Kitts_and_Nevis,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'São Marinho',
    img: Flag_of_San_Marino,
    ddi: 378,
    continente: 'Europa',
  },
  {
    pais: 'SaintPierre e Miquelon',
    img: Flag_of_France,
    ddi: 508,
    continente: 'América do Norte',
  },
  {
    pais: 'São Tomé e Príncipe',
    img: Flag_of_Sao_Tome_and_Principe,
    ddi: 239,
    continente: 'África',
  },
  {
    pais: 'São Vicente e Granadinas',
    /* img: Flag_of_Saint_Vincent_and_the_Grenadines, */
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Seicheles',
    img: Flag_of_Seychelles,
    ddi: 248,
    continente: 'África',
  },
  {
    pais: 'Senegal',
    img: Flag_of_South_Africa,
    ddi: 221,
    continente: 'África',
  },
  {
    pais: 'Serra Leoa',
    /* img: Flag_of_Sierra_Leone, */
    ddi: 232,
    continente: 'África',
  },
  {
    pais: 'Sérvia',
    /* img: Flag_of_Serbia, */
    ddi: 381,
    continente: 'Europa',
  },
  {
    pais: 'Singapura',
    img: Flag_of_Singapore,
    ddi: 65,
    continente: 'Ásia',
  },
  {
    pais: 'Síria',
    img: Flag_of_Syria,
    ddi: 963,
    continente: 'Ásia',
  },
  {
    pais: 'Somália',
    img: Flag_of_Somalia,
    ddi: 252,
    continente: 'África',
  },
  {
    pais: 'Sri Lanka',
    img: Flag_of_Sri_Lanka,
    ddi: 94,
    continente: 'Ásia',
  },
  {
    pais: 'Suazilândia',
    img: Flag_of_Eswatini,
    ddi: 268,
    continente: 'África',
  },
  {
    pais: 'Sudão',
    img: Flag_of_Sudan,
    ddi: 249,
    continente: 'África',
  },
  {
    pais: 'Sudão do Sul',
    /* img: Flag_of_South_Sudan, */
    ddi: 211,
    continente: 'África',
  },
  {
    pais: 'Suécia',
    img: Flag_of_Sweden,
    ddi: 46,
    continente: 'Europa',
  },
  {
    pais: 'Suíça',
    img: Flag_of_Switzerland,
    ddi: 41,
    continente: 'Europa',
  },
  {
    pais: 'Suriname',
    img: Flag_of_Suriname,
    ddi: 597,
    continente: 'América do Sul',
  },
  {
    pais: 'Tadjiquistão',
    /* img: Flag_of_Tajikistan, */
    ddi: 992,
    continente: 'Ásia',
  },
  {
    pais: 'Tailândia',
    img: Flag_of_Thailand,
    ddi: 66,
    continente: 'Ásia',
  },
  {
    pais: 'República da China',
    img: Flag_of_China,
    ddi: 886,
    continente: 'Ásia',
  },
  {
    pais: 'Tanzânia',
    img: Flag_of_Tanzania,
    ddi: 255,
    continente: 'África',
  },
  /*   {
    pais: 'Território Britânico do Oceano Índico',
    img: Flag_of_Ocean_Indian
    ddi: 246,
    continente: 'África',
  }, */
  {
    pais: 'TimorLeste',
    /* img: Flag_of_East_Timor, */
    ddi: 670,
    continente: 'Ásia',
  },
  {
    pais: 'Togo',
    img: Flag_of_Togo,
    ddi: 228,
    continente: 'África',
  },
  {
    pais: 'Tokelau',
    img: Flag_of_South_Africa,
    ddi: 690,
    continente: 'Oceania',
  },
  {
    pais: 'Tonga',
    img: Flag_of_Tonga,
    ddi: 676,
    continente: 'Oceania',
  },
  {
    pais: 'Trinidad e Tobago',
    img: Flag_of_Trinidad_and_Tobago,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Tunísia',
    img: Flag_of_Tunisia,
    ddi: 216,
    continente: 'África',
  },
  {
    pais: 'Turcas e Caicos',
    img: Flag_of_South_Africa,
    ddi: 1,
    continente: 'América Central',
  },
  {
    pais: 'Turquemenistão',
    img: Flag_of_Turkmenistan,
    ddi: 993,
    continente: 'Ásia',
  },
  {
    pais: 'Turquia',
    img: Flag_of_Turkey,
    ddi: 90,
    continente: 'Ásia//Europa',
  },
  {
    pais: 'Tuvalu',
    img: Flag_of_Tuvalu,
    ddi: 688,
    continente: 'Oceania',
  },
  {
    pais: 'Ucrânia',
    img: Flag_of_Ukraine,
    ddi: 380,
    continente: 'Europa',
  },
  {
    pais: 'Uganda',
    img: Flag_of_Uganda,
    ddi: 256,
    continente: 'África',
  },
  {
    pais: 'Uruguai',
    img: Flag_of_Uruguay,
    ddi: 598,
    continente: 'América do Sul',
  },
  {
    pais: 'Uzbequistão',
    img: Flag_of_Uzbekistan,
    ddi: 998,
    continente: 'Ásia',
  },
  {
    pais: 'Vanuatu',
    img: Flag_of_Vanuatu,
    ddi: 678,
    continente: 'Oceania',
  },
  /*   {
    pais: 'Vaticano',
    img: Flag_of_Vatican_City
    ddi: 379,
    continente: 'Europa',
  }, */
  {
    pais: 'Venezuela',
    img: Flag_of_Venezuela,
    ddi: 58,
    continente: 'América do Sul',
  },
  {
    pais: 'Vietnã',
    img: Flag_of_Vietnam,
    ddi: 84,
    continente: 'Ásia',
  },
  {
    pais: 'Wallis e Futuna',
    img: Flag_of_France,
    ddi: 681,
    continente: 'Oceania',
  },
  {
    pais: 'Zâmbia',
    img: Flag_of_Zambia,
    ddi: 260,
    continente: 'África',
  },
  {
    pais: 'Zimbábue',
    img: Flag_of_Zimbabwe,
    ddi: 263,
    continente: 'África',
  },
];
