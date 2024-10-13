import React from 'react'
import {
	Text,
	StyleSheet,
	View,
	TextInput,
	Pressable,
	TouchableOpacity
} from 'react-native'
import * as Haptics from 'expo-haptics'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Color } from '../../../types/Color'

const PhoneSignup = ({ navigation, route }): React.JSX.Element => {
	const [error, setError] = React.useState<string | null>(null)
	const [input, setInput] = React.useState<string>('')

	const submit = function () {
		if (input.trim().length === 0) {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
			setError('Field is required')
			return
		}
		navigation.navigate('phone_verification')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading} children='Phone Sign Up' />
			<Text
				style={styles.label}
				accessibilityLabel='phone'
				children='Input phone number'
			/>
			<View
				style={[
					styles.inputBorder,
					{
						borderColor: error ? 'red' : 'transparent'
					}
				]}
			>
				<TextInput
					style={styles.input}
					onChangeText={value => {
						setInput(value)
						setError(null)
					}}
					inputMode='tel'
				/>
			</View>
			{error && <Text style={styles.invalid} children={error} />}
			<Pressable
				style={styles.button}
				android_ripple={{ color: Color.lightBlue }}
				onPress={() => submit()}
			>
				<Text
					style={{
						color: '#fff',
						fontSize: 12,
						fontFamily: 'IBMPlexSans-Medium'
					}}
					children='Done'
				/>
			</Pressable>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 80,
		paddingHorizontal: 20,
		backgroundColor: '#fff'
	},
	heading: {
		fontSize: 15,
		color: Color.textBlack,
		fontFamily: 'IBMPlexSans-Medium'
	},
	button: {
		paddingHorizontal: 60,
		paddingVertical: 12,
		borderRadius: 5,
		marginTop: 20,
		margin: 'auto',
		textAlignVertical: 'center',
		backgroundColor: Color.primaryBlue
	},
	label: {
		fontSize: 12,
		marginTop: 20,
		color: Color.textBlack,
		fontFamily: 'IBMPlexSans-Regular'
	},
	input: {
		color: '#000',
		fontSize: 12,
		borderRadius: 7,
		borderWidth: 1.5,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderStyle: 'solid',
		borderColor: 'white',
		backgroundColor: Color.lightBlue
	},
	inputBorder: {
		marginTop: 10,
		borderRadius: 7,
		borderWidth: 1.5,
		borderStyle: 'solid'
	},
	invalid: {
		fontSize: 10,
		color: 'red',
		fontFamily: 'IBMPlexSans-Regular'
	}
})

export default PhoneSignup
