import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from '@expo/vector-icons/Feather'
import { Link } from '@react-navigation/native'
import { Color } from '../../types/Color'

const SignupOption = ({ navigation, route }): React.JSX.Element => {
	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={styles.heading}
				children='Select an option below to create an account'
			/>
			<TouchableOpacity
				style={[
					styles.component,
					{
						marginTop: 30
					}
				]}
				onPress={() =>
					navigation.navigate('email_signup', {
						userType: route.params.userType
					})
				}
			>
				<MaterialCommunityIcons
					name='email-outline'
					size={28}
					color={Color.textBlack}
					style={styles.iconBox}
				/>
				<Text style={styles.label} children='E-mail' />
			</TouchableOpacity>
			<View style={styles.hrLine} />
			<TouchableOpacity
				style={styles.component}
				onPress={() =>
					navigation.navigate('phone_signup', {
						userType: route.params.userType
					})
				}
			>
				<Feather
					name='smartphone'
					size={28}
					color={Color.textBlack}
					style={styles.iconBox}
				/>
				<Text style={styles.label} children='Phone number' />
			</TouchableOpacity>
			<Text style={styles.existingText}>
				Already have an account?{' '}
				<Link
					children={'Login'}
					to={{ screen: 'email_signup' }}
					style={styles.existingTextLink}
				/>
			</Text>
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
	},
	existingText: {
		fontSize: 11,
		marginTop: 20,
		color: Color.textBlack,
		fontFamily: 'IBMPlexSans-Regular'
	},
	existingTextLink: {
		color: Color.primaryBlue
	}
})

export default SignupOption
