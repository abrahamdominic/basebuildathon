import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Color } from '../../types/Color'

const SignupPrompt = ({ navigation }): React.JSX.Element => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading} children='Who are you Signing up as?' />
			<TouchableOpacity
				style={[
					styles.component,
					{
						marginTop: 30
					}
				]}
				onPress={() =>
					navigation.navigate('signup_option', {
						userType: 'manufacturer'
					})
				}
			>
				<MaterialCommunityIcons
					name='bank-check'
					size={28}
					color={Color.textBlack}
					style={styles.iconBox}
				/>
				<Text style={styles.label} children='Sign up as Manufacturer' />
			</TouchableOpacity>
			<View style={styles.hrLine} />
			<TouchableOpacity
				style={styles.component}
				onPress={() =>
					navigation.navigate('signup_option', { userType: 'consumer' })
				}
			>
				<Ionicons
					name='person-circle-outline'
					size={28}
					color={Color.textBlack}
					style={styles.iconBox}
				/>
				<Text style={styles.label} children='Sign up as Consumer' />
			</TouchableOpacity>
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
	component: {
		gap: 10,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row'
	},
	label: {
		fontSize: 13,
		color: Color.textBlack,
		fontFamily: 'IBMPlexSans-Regular'
	},
	iconBox: {
		padding: 5,
		borderRadius: 8,
		backgroundColor: Color.lightBlue
	},
	hrLine: {
		width: '100%',
		height: 3,
		marginVertical: 15,
		backgroundColor: Color.lightBlue
	}
})

export default SignupPrompt
