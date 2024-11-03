import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Color } from '../../../types/Color'

const DevicePaired = ({ navigation }): React.JSX.Element => {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require('../../../assets/link-devices.png')}
				style={styles.icon}
				resizeMode='center'
			/>
			<Text
				style={styles.header}
				children='Both devices have been paired!'
			/>
			<Text style={styles.text}>
				You will be redirected in{' '}
				<Text style={{ color: Color.primaryBlue }} children='5' /> seconds
			</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	icon: {
		height: 250,
		marginTop: -80
	},
	header: {
		fontSize: 15,
		marginTop: 20,
		color: Color.textBlack,
		fontFamily: 'IBMPlexSans-Medium'
	},
	text: {
		fontSize: 12,
		marginTop: 10,
		color: Color.textBlack,
		fontFamily: 'IBMPlexSans-Regular'
	}
})

export default DevicePaired
