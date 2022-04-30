import { StyleSheet,ScrollView, Image,TouchableOpacity,Pressable, Animated} from 'react-native';

import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../Themed';
import * as React from 'react';
import Img from '../../assets/images/academy-white.png'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSharedValue, useAnimatedStyle, interpolate, Extrapolate, withSpring } from 'react-native-reanimated';

const LikeButton = () => {
    const liked = useSharedValue(0);

    const outlineStyle = useAnimatedStyle(() => {
        return {
        transform: [
            {
            scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
            },
        ],
        };
    });

    const fillStyle = useAnimatedStyle(() => {
        return {
          transform: [{ scale: liked.value }],
          opacity: liked.value,
        };
    });  
    return (
        <Pressable onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
        <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
          <MaterialCommunityIcons
            name={"heart-outline"}
            size={32}
            color={"white"}
          />
        </Animated.View>
  
        <Animated.View style={fillStyle}>
          <MaterialCommunityIcons name={"heart"} size={32} color={"red"} />
        </Animated.View>
      </Pressable>
    );
};

const commentButton = () => {

};

const UserPost = () => {
    const data = [
        {key:'1',img:Img,tit:'Post Title',body:'Post body dfkjdfs skisl slihererrers skdhiuols skudols skjdos skosd skdisd skdisf dskfihdso sfkhudsof kdfuhodf dkfudkf dkufhdlf dkufkdf dkjfdkuf dfkudof dkfubd',cat:'category',timeRead:'6 minutes read',by:'Sola Finesser'},
        {key:'2',img:Img,tit:'Post Title',body:'Post body',cat:'category',timeRead:'6 minutes read',by:'Sola Finesser'},
        {key:'3',img:Img,tit:'Post Title',body:'Post body kvjenvkjneonvoienrv  evoivjoe eoiveov eoivonev eovineveovjpevk[waaleklea refoivjoeive veoivjev eovieove vekvjne evje nve ',cat:'category',timeRead:'6 minutes read',by:'Sola Finesser'},
        {key:'4',img:Img,tit:'Post Title',body:'Post body',cat:'category',timeRead:'6 minutes read',by:'Sola Finesser'},
        {key:'5',img:Img,tit:'Post Title',body:'Post body',cat:'category',timeRead:'6 minutes read',by:'Sola Finesser'},
        {key:'6',img:Img,tit:'Post Title',body:'Post body',cat:'category',timeRead:'6 minutes read',by:'Sola Finesser'},
        {key:'7',img:Img,tit:'Post Title',body:'Post body',cat:'category',timeRead:'6 minutes read',by:'Sola Finesser'},
        {key:'8',img:Img,tit:'Post Title',body:'Post body',cat:'category',timeRead:'6 minutes read',by:'Sola Finesser'},
        {key:'9',img:Img,tit:'Post Title',body:'Post body',cat:'category',timeRead:'6 minutes read',by:'Sola Finesser'},
    ];
  return data.map((e)=>{
    return (
        <View key={e.key} style={{width:'90%',flexDirection:'row',backgroundColor:'transparent',borderRadius:20,marginVertical:10,padding:10}}>
            <View style={{marginRight:10,width:50,height:50,borderRadius:10}}>
                <Image source={e.img} style={{width:50,height:50,borderRadius:10}}/>
            </View>
            <View style={{padding:10,width:'86%',borderRadius:10,backgroundColor:'blue'}}>
                <Text style={{fontWeight:'bold', fontSize:18}}>{e.tit}</Text>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
                    <Text style={{fontWeight:'bold',fontSize:13}}>{e.timeRead}</Text>
                    <Text style={{backgroundColor:'transparent',borderRadius:30,marginHorizontal:5,borderColor:'red',borderWidth:2,fontWeight:'bold',padding:5}}>{e.cat}</Text>
                </View>
                <Text style={{fontWeight:'bold', fontSize:16, width:'100%'}}>{e.body}</Text>
                <View style={{flexDirection:'row'}}>
                    <LikeButton />
                </View>
            </View>
        </View>
      )
  })
}

const AddNewPost = () =>{
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            {UserPost()}
        </View>
    )
}

export default AddNewPost 