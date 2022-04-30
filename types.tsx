/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import { ViewProps, TextProps, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

export interface CarouselProps {
  children: ReactNode;
  autoplay?: boolean;
  delay?: number;
  currentPage?: number;
  style?: ViewProps['style'];
  pageStyle?: ViewProps['style'];
  contentContainerStyle?: ViewProps['style'];
  pageInfo?: boolean;
  pageInfoBackgroundColor?: string;
  pageInfoTextStyle?: TextProps['style'];
  pageInfoBottomContainerStyle?: ViewProps['style'];
  pageInfoTextSeparator?: string;
  bullets: boolean;
  bulletsContainerStyle?: TextProps['style'];
  bulletStyle?: TextProps['style'];
  arrows?: boolean;
  arrowsContainerStyle?: TextProps['style'];
  arrowStyle?: TextProps['style'];
  leftArrowStyle?: TextProps['style'];
  rightArrowStyle?: TextProps['style'];
  leftArrowText?: string;
  rightArrowText?: string;
  chosenBulletStyle?: TextProps['style'];
  onAnimateNextPage?: (index: number) => void;
  onPageBeingChanged?: (index: number) => void;
  swipe?: boolean;
  isLooped?: boolean;
}

export interface StateProps {
  currentPage?: number;
  size: { width: number; height: number };
  childrenLength?: number;
  contents?: any;
}

export type ScrollEvent = NativeSyntheticEvent<NativeScrollEvent>;

export interface ScrollTo {
  offset: number;
  animated: boolean;
  nofix?: boolean;
}
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Welcome: undefined;
  CourseDetails: undefined;
  Create: undefined;
  Search: undefined;
  Settings: undefined;
  About: undefined;
  Profile: undefined;
  Privacy: undefined;
  Wallet: undefined;
  Logout: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Explore: undefined;
  MyCourses: undefined;
  Community: undefined;
  Account: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
