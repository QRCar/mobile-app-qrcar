import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const style = StyleSheet.create({
  btn_nav : {
    height:40,
    backgroundColor: null,
  },
  active_btn : {
    borderRadius:36,
    backgroundColor: 'white',
  },
  view_nav: {
    height:56,
    width: '100%',
    backgroundColor: '#A476EF',
    borderRadius:36,
    flex: 0, 
    flexDirection:'row', 
    alignItems:'center',
    justifyContent: 'space-around',
    marginBottom: 2,
    alignSelf:'center',
  }
});

export default function Navbar({navigation, currentComponent}) {
  const theme = {
    Button: {
      titleStyle: {
        color: '#A476EF',
      },
    },
  };

  return (
    <View style={style.view_nav}>
   	  <ThemeProvider theme={theme}>
        <Button 
          title={currentComponent==='Home'?"Accueil":""}
          style={style.btn_nav, currentComponent==='Home'? style.active_btn : null}
          icon={<Icon name="home" size={25} color={currentComponent==='Home'?'#A476EF':"white"} />}
          onPress={ () => navigation.navigate('Home')}
          type="clear"
          disabled={currentComponent==='Home' ? true : false}
        />
        
        <Button 
          title={currentComponent==='History'?"Historique":""}
          style={style.btn_nav, currentComponent==='History'? style.active_btn : null}
          icon={<Icon name="history" size={25} color={currentComponent==='History'?'#A476EF':"white"} />}
          onPress={ () => navigation.navigate('History')}
          type="clear"
          disabled={currentComponent==='History' ? true : false}
        />

        <Button 
          title={currentComponent==='Parameter'?"Paramètres":""}
          style={style.btn_nav, currentComponent==='Parameter'? style.active_btn : null}
          icon={<Icon name="gear" size={25} color={currentComponent==='Parameter'?'#A476EF':"white"} />}
          onPress={ () => navigation.navigate('Parameter')}
          type="clear"
          disabled={currentComponent==='Parameter' ? true : false}
        />
    </ThemeProvider>
    </View>
  );
}

