import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const style = StyleSheet.create({
  btn_nav : {
    color:'red',
    height:40
  },
  view_nav: {
    height:56 ,
    width: 340,
    backgroundColor: '#A476EF',
    borderRadius:36,
    flex: 0, 
    flexDirection:'row', 
    alignItems:'center',
    justifyContent: 'space-around',
    marginBottom: 2,
  }
});

export default function Navbar({navigation}) {
  const theme = {
    Button: {
      titleStyle: {
        color: '#FFFFFF',
      },
    },
  };

  return (
    <View style={style.view_nav}>
   	  <ThemeProvider theme={theme}>
        <Button 
          title="Accueil"
          style={style.btn_nav}
          icon={<Icon name="home" size={25} color="white" />}
          onPress={ () => navigation.navigate('Home')}
        />
        
        <Button 
          title=""
          style={style.btn_nav}
          icon={<Icon name="history" size={25} color="white" />}
          onPress={ () => navigation.navigate('History')}
        />

        <Button 
          title=""
          style={style.btn_nav}
          icon={<Icon name="gear" size={25} color="white" />}
          onPress={ () => navigation.navigate('Parameter')}
        />
    </ThemeProvider>
    </View>
  );
}

