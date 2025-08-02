import { View } from 'react-native'
import Header from './Header' // your custom header component
import SearchWithToggle from './Input'

import React, { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <View className="flex-1 bg-white">
      <Header />
      <View className="px-3 mt-1 space-y-3 flex-1">
        <SearchWithToggle />
        {children}
      </View>
      
    </View>
  )
}
