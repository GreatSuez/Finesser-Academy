import { StyleSheet,ScrollView, Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as React from 'react';
import AddNewPost from '../components/community/UserPost';

const CommunityScreen = () => {
  return (
    <ScrollView
    >
      <Text>CommunityScreen</Text>
      <AddNewPost />
    </ScrollView>
  )
}

export default CommunityScreen