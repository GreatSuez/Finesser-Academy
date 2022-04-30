import { Image } from 'react-native';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';
import first from '../../assets/images/goatyourpace.jpg'
import sec from '../../assets/images/Learnfromthebest.jpg'
import thrd from '../../assets/images/takevideocourses.png'



const Carousell = () => {
    const data = [
        {key:'1',img:first,tit:'Go at Your Own Pace',des:'Lifetime access to purchased courses, \n anytime, anywhere'},
        {key:'2',img:sec,tit:'Learn from the Best',des:'Approachable expert-instructors, \n vetted by learners'},
        {key:'3',img:thrd,tit:'Take Video Courses',des:'From dancing to coding \n and everything in between'},
    ]
    const handleNextPage = (index: number) => {
        console.log(index);
    };
  return data.map((e)=>{
    return (
        // <Carousel key={e.key} autoplay pageInfo onAnimateNextPage={handleNextPage}>
            <View style={{}} key={e.key}>
                <View style={{ justifyContent:'center',alignItems:'center'}}>
                    <Image source={e.img} style={{width:90, height:90}} width={20} height={20} />
                </View>
                <View style={{padding:10}}>
                    <Text style={{textAlign:'center', fontWeight:'bold', fontSize:19}}>{e.tit}</Text>
                    <MonoText style={{textAlign:'center', fontSize:16}}>{e.des}</MonoText>
                </View>
            </View>
        // </Carousel>

      )
  })
}

const First = () => {
    return (
      <View>
        <Text>Carousel</Text>
        <View style={{display:'flex', flexDirection:'row'}}>
            {Carousell()}
        </View>
      </View>
    )
};


export default First