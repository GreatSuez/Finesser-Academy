import { StyleSheet,ScrollView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import BrowseCategories from '../components/myCourseScreen/BrowseCategories'

const SearchScreen = () => {
  return (
    <View>
      <Text>SearchScreen</Text>
      <BrowseCategories />
    </View>
  )
}

export default SearchScreen