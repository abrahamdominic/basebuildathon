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
import { Color } from '../../types/Color'

const LoginVerification = ({ navigation, route }): React.JSX.Element => {
	const [error, setError] = React.useState<string | null>(null)
	const [otp, setOtp] = React.useState<number[]>([
		'',
		'',
		'',
		'',
		''
	] as number[])
	const inputs = React.useRef([])

	const handleChange = (value, index) => {
		setError(null)
		// Update the OTP array with the new value
		const newOtp = [...otp]
		newOtp[index] = value
		setOtp(newOtp)

		// Automatically move to the next input
		if (value && index < inputs.current.length - 1) {
			inputs.current[index + 1].focus()
		} else if (value) {
			inputs.current[index].blur()
		}
	}

	const handleKeyPress = (e, index) => {
		// Automatically move to the next input
		if (otp[index].length === 1 && e.nativeEvent.key !== 'Backspace') {
			inputs.current[index + 1].focus()
		}

		// Move to the previous input if backspace is pressed and the current field is empty
		if (e.nativeEvent.key === 'Backspace' && index > 0) {
			inputs.current[index - 1].focus()
		}
	}

	const submit = function () {
		let input = otp.join('')

		if (input.length < 5) {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
			setError('Invalid OTP code')
			return
		}
		navigation.navigate('login_verified')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading} children='Account Verification' />
			<Text
				style={styles.label}
				accessibilityLabel='email'
				children='A five digit code has been sent to your mail, input them for verification.'
			/>
			<View style={styles.inputWrapper}>
				{otp.map((digit, index) => (
					<View
						key={index}
						style={[
							styles.inputBorder,
							{
								borderColor: error ? 'red' : 'transparent'
							}
						]}
					>
						<TextInput
							ref={input => (inputs.current[index] = input)}
							style={styles.input}
							inputMode='numeric'
							maxLength={1}
							textAlign='center'
							onChangeText={value => handleChange(value, index)}
							onKeyPress={e => handleKeyPress(e, index)}
						/>
					</View>
				))}
			</View>
			{error && <Text style={styles.invalid} children={error} />}
			<Text style={styles.resend}>
				Resend code in{' '}
				<Text style={{ color: Color.primaryBlue }} children='59s' />
			</Text>
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
					children='Verify'
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
		fontSize: 11,
		marginTop: 20,
		marginBottom: 10,
		color: Color.textBlack,
		fontFamily: 'IBMPlexSans-Regular'
	},
	input: {
		color: '#000',
		fontSize: 17,
		borderRadius: 7,
		borderWidth: 1.5,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderStyle: 'solid',
		borderColor: 'white',
		fontFamily: 'IBMPlexSans-Bold',
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
		marginTop: 3,
		textAlign: 'center',
		fontFamily: 'IBMPlexSans-Regular'
	},
	resend: {
		fontSize: 10,
		marginTop: 12,
		textAlign: 'center',
		color: Color.textBlack,
		fontFamily: 'IBMPlexSans-Regular'
	},
	inputWrapper: {
		gap: 10,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	}
})

export default LoginVerification
