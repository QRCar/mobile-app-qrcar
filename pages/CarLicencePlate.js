import React, { useState, useEffect, useRef } from 'react';
import {Text, View, TouchableOpacity, Dimensions, Alert, ActivityIndicator, StyleSheet} from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';
import FormData from 'form-data';
import env from './../static/env.js'
import global from './../static/global.js'

function insertCar(license_number){
  return axios({
      url: `${env.CAR_URL_API}/api/cars`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      data: { "cars": {"license":license_number,"user_id":global.user.id} }
    });
}

function upload (image) {
    var formData = new FormData();
    formData.append('picture_car', {
      uri: Platform.OS === 'android' ? `file:///${image.uri}` : image.uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    return axios({
      url: `${env.OCR_URL_API}/ocr`,
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
}

const localStyle = StyleSheet.create({
  mainView : { flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end', marginBottom: 50, },
})

export default function CameraScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [waitForImageAnalyse, setWaitForImageAnalyse] = useState(false)
  
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

const mainView = () => {
  let current;
  if(waitForImageAnalyse){
      current = 
        <View style={localStyle.mainView}>
          <ActivityIndicator size="large" color="#ffffff" />
          <Text style={{fontSize:32, color: 'white', textAlign:'center'}}> Analyse de l'image </Text> 
        </View>;
      
  } else { 
    current =
      <View style={localStyle.mainView}>
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={async() => {
          if(cameraRef){
            let photo = await cameraRef.takePictureAsync('photo');
            setWaitForImageAnalyse(true)
            upload(photo).then(res => {
              Alert.alert( 'Votre plaque est correcte ?', res.data == '' ? 'Error try again':res.data, [ 
                { text: 'Valider', onPress: () => {
                  setWaitForImageAnalyse(false);
                  insertCar(res.data).then(res=>navigation.navigate('PersonalData')).catch(err => Alert.alert(err.toString()))
                  
                } },
                { text: 'Reprendre', onPress: () => {setWaitForImageAnalyse(false)}, style: 'cancel' }, 
              ],
              { cancelable: false } );
            })
            .catch(err => {Alert.alert(`Response status : ${err.toString()}`)})
          }
        }}>
        <View style={{ borderWidth: 2, borderRadius: 50, borderColor: 'white', height: 50, width: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <View style={{ borderWidth: 2, borderRadius: 50, borderColor: 'white', height: 40, width:40, backgroundColor: 'white'}} />
        </View>
        </TouchableOpacity>
      </View>;
  }
  return current
}


  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref);
      }} autoFocus="on">
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          position: 'absolute',
          left: 0, right: 0, alignItems: 'center',
          top: (Dimensions.get('window').height / 2) - 100,
        }}>
          <View style={{
            height: 100,
            width: Dimensions.get('window').width - 50,
            margin: 'auto',
            borderColor: '#ffffff',
            borderWidth: 2,
            borderRadius: 15
          }} />

        </View>
        {mainView()}
      </Camera>
    </View>
  );
}
