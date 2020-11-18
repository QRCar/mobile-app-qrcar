import React, { useState, useEffect, useRef } from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import { Camera } from 'expo-camera';
export default function CameraScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
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
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
            marginBottom: 50,
        }}>
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={async() => {
            if(cameraRef){
              let photo = await cameraRef.takePictureAsync('photo');
              console.log('photo', photo);
             // navigation.navigate('Image', { photo: photo} );
            }
          }}>
            <View style={{
              borderWidth: 2,
              borderRadius: '50%',
              borderColor: 'white',
              height: 50,
              width: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            >
              <View style={{
                borderWidth: 2,
                borderRadius: '50%',
                borderColor: 'white',
                height: 40,
                width:40,
                backgroundColor: 'white'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
