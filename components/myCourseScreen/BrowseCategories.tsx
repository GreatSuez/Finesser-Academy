import { StyleSheet, TouchableOpacity,ScrollView,FlatList, Image,StatusBar,Animated, Easing, SectionList } from 'react-native';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';
import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';

const DisplayScreen = () => {
  const [display, setDisplay] = React.useState('All Courses')
  
  // create a handleClick function
  const handleClick = (displayState:any) => {
    setDisplay(displayState)
  }
  return (
    <View>
            {(() => {
              switch (display) {
                case 'All courses':
                  return <Start handleClick={handleClick} />
                case 'Favorite courses':
                  return <Playing handleClick={handleClick} />
                case 'Archived courses':
                  return <Won handleClick={handleClick} />
                case 'Downloads':
                  return <Lost handleClick={handleClick} />
                default:
                  return null
              }
            })()}
    </View>
  )
}


const BrowseCategories = () => {
  return (
    <View>
        <View style={{margin:10}}>
            <Text style={{fontWeight:'bold',fontSize:24}}>Browse Categories</Text>
        </View>
        {NoCourseScreen()}
    </View>
  )
};

const NoCourseScreen = () => {
    const data =[
        {key:'1',icon:'music',cat:'Development',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
        {key:'2',icon:'music',cat:'Music Production',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
        {key:'3',icon:'bus',cat:'Business',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
        {key:'4',icon:'music',cat:'Finance Mngmt',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
        {key:'5',icon:'anchor',cat:'Office Productivity',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
        {key:'6',icon:'key',cat:'Lifestyle',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
        {key:'7',icon:'music',cat:'Movie Production',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
        {key:'8',icon:'anchor',cat:'Photography & Video',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
        {key:'9',icon:'music',cat:'Development',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
        {key:'10',icon:'music',cat:'Finance & Accounting',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
        {key:'11',icon:'music',cat:'Development',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
      ];
    return data.map((element) => {
        return (
            <View key={element.key} style={{flex:1}}>
                <TouchableOpacity>
                    <View style={{flexDirection:'row',margin:10,alignItems:'center'}}>
                        <FontAwesome name={element.icon} color='#fff' size={25} />
                        <Text style={{marginHorizontal:10,fontWeight:'bold'}}>{element.cat}</Text>
                    </View>
                </TouchableOpacity>
            </View>
          )
    })
  }

export default BrowseCategories;