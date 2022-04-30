
import { StyleSheet, TouchableOpacity,ScrollView,FlatList, Image,StatusBar } from 'react-native';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';
import img from '../../assets/images/android/mipmap-xxxhdpi/ic_launcher.png'





const Career = () => {
  const data =[
    {key:'1',img:img,cat:'Development',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
    {key:'2',img:img,cat:'Music Production',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
    {key:'3',img:img,cat:'Business',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
    {key:'4',img:img,cat:'Finance Mngmt',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
    {key:'5',img:img,cat:'Office Productivity',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
    {key:'6',img:img,cat:'Lifestyle',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
    {key:'7',img:img,cat:'Movie Production',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
    {key:'8',img:img,cat:'Photography & Video',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
    {key:'9',img:img,cat:'Development',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
    {key:'10',img:img,cat:'Finance & Accounting',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
    {key:'11',img:img,cat:'Development',dis:'/',desc:'Finesser Academy best course', name: 'Erich Andreas', ratings:'4star',price:'CI 41,900.00',feat:'Bestseller'},
  ];
  return data.map((element) =>{
    return (
      <View key={element.key} style={{display:'flex', margin:10, marginTop:10}} >
        <View style={{width:200,backgroundColor:'#f57f17', borderRadius:10}}>
          <View style={{height:150,borderRadius:10}}>
            <Image source={element.img} style={{width:200,height:150 }} />
          </View>
          <View style={{backgroundColor:'transparent',borderRadius:10,padding:10}}>
            <Text style={{fontWeight:'bold',fontSize:17,borderColor:'#f57f17'}}>{element.cat}</Text>
            <Text style={{fontWeight:'bold',fontSize:15,borderColor:'#f57f17'}}>{element.desc}</Text>
            <MonoText style={{fontSize:14}}>{element.name}</MonoText>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:17,borderColor:'#f57f17', borderLeftWidth:4}}>{element.price}</Text>
          </View>
        </View>
      </View>
    );
    return <View>{Career()}</View>;
  });
}


const RecentCourses = ({title}:{title:string}) => {
  return (
    <View style={{borderRadius:10, margin:10}}>
        <View style={{display: 'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
          <Text style={{fontWeight:'bold',fontSize:24}}>{title}</Text>
          <TouchableOpacity>
            <Text style={{fontWeight:'bold',fontSize:15 }}>See All</Text>
          </TouchableOpacity>
        </View>
       <ScrollView bounces={true} horizontal={true} contentContainerStyle={styles.contentContainer}>
            {Career()}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});

export default RecentCourses;