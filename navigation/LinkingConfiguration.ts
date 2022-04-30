/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Explore: {
            screens: {
              ExploreScreen: 'one',
            },
          },
          MyCourses: {
            screens: {
              MyCourseScreen: 'two',
            },
          },
          Community: {
            screens: {
              CommunityScreen: 'three',
            },
          },
          Account: {
            screens: {
              AccountScreen: 'four',
            },
          },
        },
      },
      Modal: 'modal',
      Welcome: 'welcome',
      CourseDetails: 'details',
      Create: 'create',
      Search: 'search',
      NotFound: '*',
      About:'about',
      Privacy:'privacy',
      Settings:'settings',
      Profile:'profile',
      Wallet:'wallet'
      
    },
  },
};

export default linking;
