import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Color } from '../../../types/Color'

const DeviceLinking = ({ navigation }): React.JSX.Element => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading} children='Pair with another device' />
			<View style={styles.wrapper}>
				<Pressable
					style={styles.button}
					android_ripple={{
						color: Color.lightBlue,
						radius: 37
					}}
					onPress={() => navigation.navigate('device_pair')}
				>
					<MaterialCommunityIcons
						name='qrcode-scan'
						size={35}
						color={Color.lightBlue}
					/>
				</Pressable>
				<Text
					style={styles.label}
					children='Press the above icon to scan the QR code on the other device'
				/>
			</View>
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
		marginTop: -70,
		borderRadius: 23,
		paddingVertical: 15,
		paddingHorizontal: 17,
		verticalAlign: 'center',
		backgroundColor: Color.primaryBlue
	},
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	label: {
		fontSize: 11,
		marginTop: 20,
		textAlign: 'center',
		color: Color.textBlack,
		fontFamily: 'IBMPlexSans-Regular'
	}
})

export default DeviceLinking
