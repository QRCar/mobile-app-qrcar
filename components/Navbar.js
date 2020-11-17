import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const style = StyleSheet.create({
  btn_nav : {
    height:40
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
  },
  title_btn:{
    color: '#A476EF',
    fontSize:12
  }
});

export default function Navbar({navigation, currentComponent}) {
  return (
    <View style={style.view_nav}>
        <Button 
          title={currentComponent==='Home'?"Accueil":""}
          buttonStyle={[style.btn_nav, currentComponent==='Home'? style.active_btn : {}]}
          icon={<Icon name="home" size={25} color={currentComponent==='Home'?'#A476EF':"white"} />}
          onPress={ () => navigation.navigate('Home')}
          type="clear"
          disabled={currentComponent==='Home' ? true : false}
          titleStyle={style.title_btn}
        />
        
        <Button 
          title={currentComponent==='History'?"Historique":""}
          buttonStyle={[style.btn_nav, currentComponent==='History'? style.active_btn : {}]}
          icon={<Icon name="history" size={25} color={currentComponent==='History'?'#A476EF':"white"} />}
          onPress={ () => navigation.navigate('History')}
          type="clear"
          disabled={currentComponent==='History' ? true : false}
          titleStyle={style.title_btn}
        />

        <Button 
          title={currentComponent==='Parameter'?"Paramètres":""}
          buttonStyle={[style.btn_nav, currentComponent==='Parameter'? style.active_btn : {}]}
          icon={<Icon name="gear" size={25} color={currentComponent==='Parameter'?'#A476EF':"white"} />}
          onPress={ () => navigation.navigate('Parameter')}
          type="clear"
          disabled={currentComponent==='Parameter' ? true : false}
          titleStyle={style.title_btn}
        />
    </View>
  );
}

