import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstScreen from './screens/onboarding/first'
import SecondScreen from './screens/onboarding/second'
import ThirdScreen from './screens/onboarding/third'
import SignupPrompt from './screens/components/signup_prompt'
import SignupOption from './screens/components/signup_option'
import EmailSignup from './screens/components/email/signup'
import EmailVerified from './screens/components/email/verified'
import EmailVerification from './screens/components/email/verification'
import PhoneSignup from './screens/components/phone/signup'
import PhoneVerified from './screens/components/phone/verified'
import PhoneVerification from './screens/components/phone/verification'
import LoginOption from './screens/components/login_option'
import EmailLogin from './screens/components/email/login'
import PhoneLogin from './screens/components/phone/login'
import LoginVerified from './screens/components/login_verified'
import LoginVerification from './screens/components/login_verification'
import DeviceLinking from './screens/components/device_linking/linking'
import DevicePair from './screens/components/device_linking/pair'
import DevicePaired from './screens/components/device_linking/paired'

const App = (): React.JSX.Element | null => {
	const [fontLoaded, setFontLoaded] = useState<boolean>(false)

	useEffect((): void => {
		;(async function (): Promise<void> {
			await Font.loadAsync({
				'IBMPlexSans-Bold': require('./assets/fonts/IBM_Plex_Sans/IBMPlexSans-Bold.ttf'),
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
			<StatusBar backgroundColor='#fff' barStyle='dark-content' />

			<Stack.Navigator
				initialRouteName='onboarding_first_screen'
				screenOptions={{ headerShown: false }}
			>
				{/* WELCOME ONBOARD SCREENS */}
				<Stack.Group screenOptions={{ animation: 'slide_from_right' }}>
					<Stack.Screen
						name='onboarding_first_screen'
						component={FirstScreen}
					/>
					<Stack.Screen
						name='onboarding_second_screen'
						component={SecondScreen}
					/>
					<Stack.Screen
						name='onboarding_third_screen'
						component={ThirdScreen}
					/>
					<Stack.Screen name='signup_prompt' component={SignupPrompt} />
				</Stack.Group>

				{/* SIGNUP SCREENS */}
				<Stack.Group screenOptions={{ animation: 'fade_from_bottom' }}>
					<Stack.Screen name='signup_option' component={SignupOption} />
					<Stack.Screen name='email_signup' component={EmailSignup} />
					<Stack.Screen name='email_verified' component={EmailVerified} />
					<Stack.Screen
						name='email_verification'
						component={EmailVerification}
					/>
					<Stack.Screen name='phone_signup' component={PhoneSignup} />
					<Stack.Screen name='phone_verified' component={PhoneVerified} />
					<Stack.Screen
						name='phone_verification'
						component={PhoneVerification}
					/>
				</Stack.Group>

				{/* LOGIN SCREENS */}
				<Stack.Group screenOptions={{ animation: 'fade_from_bottom' }}>
					<Stack.Screen name='login_option' component={LoginOption} />
					<Stack.Screen name='email_login' component={EmailLogin} />
					<Stack.Screen name='phone_login' component={PhoneLogin} />
					<Stack.Screen name='login_verified' component={LoginVerified} />
					<Stack.Screen
						name='login_verification'
						component={LoginVerification}
					/>
				</Stack.Group>

				{/* DEVICE LINKING SCREENS */}
				<Stack.Group screenOptions={{ animation: 'fade_from_bottom' }}>
					<Stack.Screen name='device_linking' component={DeviceLinking} />
					<Stack.Screen name='device_paired' component={DevicePaired} />
					<Stack.Screen name='device_pair' component={DevicePair} />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
