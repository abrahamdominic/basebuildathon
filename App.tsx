import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstScreen from './screens/onboarding/first.tsx'
import SecondScreen from './screens/onboarding/second.tsx'
import ThirdScreen from './screens/onboarding/third.tsx'

const App = (): React.JSX.Element | null => {
	const [fontLoaded, setFontLoaded] = useState<boolean>(false)

	useEffect((): void => {
		;(async function (): Promise<void> {
			await Font.loadAsync({
				'IBMPlexSans-Medium': require('./assets/fonts/IBM_Plex_Sans/IBMPlexSans-Medium.ttf'),
				'IBMPlexSans-Regular': require('./assets/fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf')
			})
			setFontLoaded(true)
		})()
	}, [])

	if (!fontLoaded) {
		return null
	}

	const Stack = createNativeStackNavigator()

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Onboarding_First_Screen'>
				{/* Welcome Onboard Screens */}
				<Stack.Group
					screenOptions={{
						headerShown: false,
						animation: 'slide_from_right'
					}}
				>
					<Stack.Screen
						name='Onboarding_First_Screen'
						component={FirstScreen}
					/>
					<Stack.Screen
						name='Onboarding_Second_Screen'
						component={SecondScreen}
					/>
					<Stack.Screen
						name='Onboarding_Third_Screen'
						component={ThirdScreen}
					/>
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
