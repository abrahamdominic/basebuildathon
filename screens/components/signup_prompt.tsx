import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Color } from '../../components/Color'

const SignupPrompt = (): React.JSX.Element => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading} children='Who are you Signing up as?' />
			<View
				style={[
					styles.component,
					{
						marginTop: 30
					}
				]}
			>
				<MaterialCommunityIcons
					name='bank-check'
					size={28}
					color='black'
					style={styles.iconBox}
				/>
				<Text style={styles.label} children='Sign up as Manufacturer' />
			</View>
			<View style={styles.hrLine} />
			<View style={styles.component}>
				<FontAwesome6
					name='person-walking-luggage'
					size={28}
					color='black'
					style={styles.iconBox}
				/>
				<Text style={styles.label} children='Sign up as Customer' />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 80,
		paddingHorizontal: 20
	},
	heading: {
		fontSize: 15,
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
		fontFamily: 'IBMPlexSans-Regular'
	},
	iconBox: {
		padding: 5,
		borderRadius: 8,
		backgroundColor: '#d2d2d2'
	},
	hrLine: {
		width: '100%',
		height: 3,
		marginVertical: 15,
		backgroundColor: '#d2d2d2'
	}
})

export default SignupPrompt
