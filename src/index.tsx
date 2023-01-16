import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign, Octicons } from '@expo/vector-icons'

import { ThemeProvider } from '@emotion/react'

import { BottomTabNavigationOptions } from '@/lib/types/core'

import { CategoriesScreen, CreateCategoryScreen, EditCategoryScreen } from '@/screens/note-categories'
import { NotesScreen, CreateNoteScreen, EditNoteScreen, DetailNoteScreen } from '@/screens/notes'
import { SignUpScreen, SignInScreen } from '@/screens/auth'
import { HomeScreen } from '@/screens/Home'

import { theme } from '@/styles/theme'

const AppStackNavigation = () => {
  const appNavigationOptions: StackNavigationOptions = { headerShown: false }
  const AppNavigation = createStackNavigator()

  return (
    <AppNavigation.Navigator>
      <AppNavigation.Screen name='Home' component={HomeScreen} options={appNavigationOptions} />
      <AppNavigation.Screen name='CreateCategory' component={CreateCategoryScreen} options={appNavigationOptions} />
      <AppNavigation.Screen name='EditCategory' component={EditCategoryScreen} options={appNavigationOptions} />
      <AppNavigation.Screen name='Notes' component={NotesScreen} options={appNavigationOptions} />
      <AppNavigation.Screen name='DetailNote' component={DetailNoteScreen} options={appNavigationOptions} />
      <AppNavigation.Screen name='EditNote' component={EditNoteScreen} options={appNavigationOptions} />
      <AppNavigation.Screen name='SignUp' component={SignUpScreen} options={appNavigationOptions} />
      <AppNavigation.Screen name='SignIn' component={SignInScreen} options={appNavigationOptions} />
    </AppNavigation.Navigator>
  )
}

export const MainApp = () => {
  const TabNavigation = createBottomTabNavigator()
  const commonScreenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <TabNavigation.Navigator initialRouteName='Home'>
          <TabNavigation.Screen
            name='Init'
            component={AppStackNavigation}
            options={{...commonScreenOptions, tabBarIcon: () => <Octicons name='home' size={24} color='black' />}}
          />

          <TabNavigation.Screen
            name='CreateNote'
            component={CreateNoteScreen}
            options={{...commonScreenOptions, tabBarIcon: () => <Octicons name='diff-added' size={24} color='black' />}}
          />

          <TabNavigation.Screen
            name='NoteCategories'
            component={CategoriesScreen}
            options={{...commonScreenOptions, tabBarIcon: () => <AntDesign name='appstore-o' size={24} color='black' />}}
          />
        </TabNavigation.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}
