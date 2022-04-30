import * as  React from 'react'
import Index from '../components/account'
import { RootTabScreenProps } from '../types';

const AccountScreen = ({ navigation }: RootTabScreenProps<'Account'>) => {
  return (
    <Index navigation={navigation} />
  )
}

export default AccountScreen;