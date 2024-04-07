import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Alert } from 'react-native';

import { styles } from './HomeStyles';
import BatSinal from '../../../assets/batsinal.png';
import { Button } from '../../components/Button/Button';
import { InputSection } from '../../components/InputSection/InputSection';
import { styles as ipStyles } from '../../components/InputSection/InputStyles';

export function Home() {

  const [screeen1, setScreen1] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [observation, setObservation] = useState("");

  const handleScreen = ()=>{
    setScreen1(!screeen1);
  }
  const handleSendInfo = ()=>{
    Alert.alert("info",`name:${name}\nphone:${phone}\nlocation:${location}\nobservation:${observation}`)
    handleScreen();
  }
  return (
    screeen1 ?
      (
        <View style={styles.container1}>
          <Image  
            style={{ marginTop:64, height:140,width:'80%',resizeMode: 'contain'}} 
            source={BatSinal} />
          <Button 
            onPress={handleScreen}
            title={"Activate Bat Sinal"} />
        </View>) : 
          
      (
        <View style={styles.container2}>
          <Text style={styles.text} >Nome</Text>
          <InputSection  onChangeText={(value)=>setName(value)} />
          <Text style={styles.text} >Telefone</Text>
          <InputSection onChangeText={(value)=>setPhone(value)} keyboardType='phone-pad' />
          <Text style={styles.text}>Localização</Text>
          <InputSection onChangeText={(value)=>setLocation(value)} customHeight={200} multiline={true}/>
          <Text style={styles.text} >Observação</Text>
          <InputSection onChangeText={(value)=>setObservation(value)} customHeight={200} multiline={true}/>
          <Button 
            onPress={handleSendInfo}
            title={"Send"} />
        </View> 
      )
  )
}