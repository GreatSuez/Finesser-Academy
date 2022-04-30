import { StyleSheet,ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Categories from '../components/exploreScreen/Categories';
import RecentCourses from '../components/exploreScreen/RecentCourses';
import First from '../components/exploreScreen/Carousel';
import {BannerData} from '../components/exploreScreen/BannerData'
import { keyboardDismissHandlerManager } from 'native-base';

export default function ExploreScreen({ navigation }: RootTabScreenProps<'Explore'>) {
  return (
    <ScrollView bounces={true} style={styles.container}>
      <First />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <RecentCourses title="Feature Courses" />
      <Categories  />
      <RecentCourses title="Top Free Courses" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
