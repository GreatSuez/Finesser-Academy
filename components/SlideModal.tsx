import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { SlideModal }  from 'react-native-slide-modal';

const SlideModall = ({screenContainer,modalContainer,headerTitle}:{modalContainer:any,screenContainer:any,headerTitle:string})=> {
  const [ modalVisible, setModalVisible ] = useState<boolean>(false);

  return (
    <SlideModal
      modalType="iOS Form Sheet"
      // modalType="iOS Bottom Sheet"
      modalVisible={modalVisible}
      screenContainer ={
        <>
          {screenContainer}
        </>
      }
      modalContainer={
        <>
         {modalContainer}
        </>
      }
      modalHeaderTitle={headerTitle}
      pressDone={() => setModalVisible(!modalVisible)}
      pressCancel={() => setModalVisible(!modalVisible)}
      darkMode={false}
      doneDisabled={false}
    />
  );
};

// Exports
export default SlideModall;