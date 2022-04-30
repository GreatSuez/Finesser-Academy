import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, StatusBar,TouchableOpacity} from "react-native";
import AnimatedAccordion from "@dev-event/react-native-accordion";
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

const Accordeon = () => {
  const accordionRef = useRef<typeof AnimatedAccordion>(null);

  const [show, setShow] = useState<boolean>(false);

  const handleContentTouchable = useCallback(() => {
    return <Text style={styles.title}>Sample header</Text>
  }, []);

  const handleContent = useCallback(() => {
    return <Text style={styles.message}>Sample content</Text>
  }, []);

  const handleOpenAccordion = useCallback(() => {
    accordionRef.current?.openAccordion();
  }, []);

   return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleOpenAccordion}
          >
            <Text>Open Accordion</Text>
          </TouchableOpacity>
          <AnimatedAccordion
            ref={accordionRef}
            sizeIcon={16}
            styleChevron={styles.icon}
            renderContent={handleContent}
            onChangeState={(isShow:any) => setShow(isShow)}
            styleTouchable={styles.touchable}
            activeBackgroundIcon={'#f57f17'}
            inactiveBackgroundIcon={'#f57f17'}
            handleContentTouchable={handleContentTouchable}
          />
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  content:{
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  touchable: {
    backgroundColor: '#181829',
    height: 50,
  },
  title: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  message: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  icon: {
    height: 24,
    width: 24,
  },
  button: {
    padding: 16,
  },
});

export default Accordeon