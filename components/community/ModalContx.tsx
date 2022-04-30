import { View, Text } from 'react-native'
import React from 'react'



const ModalCont = () => {
    const data = [
        {
          id: 0,
          iconSize: 40,
          isSelect: false,
          color: "#b2b6c4",
          text: "Işık Hatası",
          iconName: "feedback_junction_alt1"
        },
        {
          id: 1,
          iconSize: 40,
          isSelect: false,
          color: "#b2b6c4",
          text: "Trafik Kazası",
          iconName: "feedback_accident_alt1"
        },
        {
          id: 2,
          iconSize: 40,
          isSelect: false,
          color: "#b2b6c4",
          text: "Kavşak Arızası",
          iconName: "feedback_light_alt1"
        },
        {
          id: 3,
          iconSize: 40,
          isSelect: false,
          color: "#b2b6c4",
          text: "Yaya Butonu Arızası",
          iconName: "feedback_pedestrian_alt1"
        }
    ];
    
    return data.map((e)=>{
        return (
            <View key={e.id}>
              <Text>ModalContx</Text>
            </View>
          )
    })
  }

const ModalContx = () => {
  return (
    <View>
      <Text>ModalContx</Text>
    </View>
  )
}

export default ModalContx