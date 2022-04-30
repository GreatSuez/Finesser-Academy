import { StyleSheet, TouchableOpacity,ScrollView,FlatList, Image,StatusBar,SafeAreaView } from 'react-native';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';
import Colors from '../../constants/Colors';
import { ReactElement } from 'react';




const PressableTile = ({ navigation }:{navigation:any}) => {
    const data = [
        {key:'1',cat:'Profile',path:'Profile', icon:''},
        {key:'2',cat:'Wallet',path:'Wallet', icon:''},
        {key:'3',cat:'Settings',path:'Settings', icon:''},
        {key:'4',cat:'About the Academy',path:'About', icon:''},
        {key:'5',cat:'Privacy & Policy',path:'Privacy', icon:''},
        {key:'6',cat:'Logout',path:'Logout', icon:''},
    ];
    return data.map((element) => {
        return (
            <View key={element.key} >
                <TouchableOpacity onPress={() => navigation.navigate(element.path)} style={{backgroundColor:'red', height:100, borderRadius:10,margin: 10}}>
                    <Text style={{textAlign:'center'}} lightColor={Colors.light.tint}>
                        {element.cat}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    })
  }

const Index = ({navigation}:{navigation:any}) => {
  return (
      <SafeAreaView>
        {/* <PressableTile navigation={navigation} /> */}
      </SafeAreaView>
  )
}

export default Index