import { StyleSheet, TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';


const list = () => {

const data =[
    {key:'1',cat:'Development',dis:'/'},
    {key:'2',cat:'Music Production',dis:'/'},
    {key:'3',cat:'Business',dis:'/'},
    {key:'4',cat:'Finance Mngmt',dis:'/'},
    {key:'5',cat:'Office Productivity',dis:'/'},
    {key:'6',cat:'Lifestyle',dis:'/'},
    {key:'7',cat:'Movie Production',dis:'/'},
    {key:'8',cat:'Photography & Video',dis:'/'},
    {key:'9',cat:'Development',dis:'/'},
    {key:'10',cat:'Finance & Accounting',dis:'/'},
    {key:'11',cat:'Development',dis:'/'},
];
    return data.map((element) => {
      return (
        <TouchableOpacity key={element.key} >
            <View key={element.key} style={{margin:5, backgroundColor:'transparent',borderRadius:30, padding:17,height:60,borderColor:'#f57f17', borderWidth:3}}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:17,borderColor:'#f57f17', borderLeftWidth:4}}>{element.cat}</Text>
            </View>
        </TouchableOpacity>
      );
      return <View>{list()}</View>;
    });
};
const Categories = () => {
  return (
    <View style={{margin:10}}>
        <Text style={{fontWeight:'bold',fontSize:24}}>Categories</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
            {list()}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 20
    }
});
export default Categories