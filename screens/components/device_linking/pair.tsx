import React from 'react'
import {
	Text,
	View,
	StyleSheet,
	Pressable,
	Animated,
	Image
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Color, Gradient } from '../../../types/Color'

const DevicePair = ({ navigation }): React.JSX.Element => {
	const transition = React.useRef(new Animated.Value(0)).current

	React.useEffect(
		() =>
			Animated.loop(
				Animated.sequence([
					Animated.timing(transition, {
						toValue: 1,
						duration: 1000,
						useNativeDriver: false
					}),
					Animated.timing(transition, {
						toValue: 0,
						duration: 1000,
						useNativeDriver: false
					})
				])
			).start(),
		[]
	)

	setTimeout(() => navigation.navigate('device_paired'), 3000)

	const styles2 = StyleSheet.create({
		transitionStyle: {
			transform: [
				{
					translateY: transition.interpolate({
						inputRange: [0, 1],
						outputRange: [-20, 250]
					})
				}
			]
		}
	})

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.boxWrapper}>
					<View style={styles.box}>
						<Image
							resizeMode='center'
							style={styles.qrIcon}
							source={require('../../../assets/qr-code.png')}
						/>
					</View>
					<Animated.View
						style={[styles.boxRollerWrapper, styles2.transitionStyle]}
					>
						<LinearGradient
							colors={Gradient.blueGradient}
							style={styles.boxRoller}
						/>
					</Animated.View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 80,
		paddingHorizontal: 20,
		backgroundColor: '#fff'
	},
	wrapper: {
		padding: 10,
		width: '100%',
		height: '100%',
		backgroundColor: Color.lightBlue,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8
	},
	boxWrapper: {
		width: '100%',
		maxWidth: 300,
		maxHeight: 350,
		position: 'relative'
	},
	box: {
		width: '80%',
		height: '80%',
		margin: 'auto',
		maxWidth: 250,
		maxHeight: 300,
		borderRadius: 8,
		borderWidth: 2.5,
		borderColor: Color.midBlue
	},
	boxRoller: {
		width: '100%',
		height: '100%',
		borderBottomWidth: 2,
		borderBottomColor: Color.midBlue
	},
	boxRollerWrapper: {
		width: '100%',
		height: 30,
		position: 'absolute'
	},
	qrIcon: {
		width: '80%',
		margin: 'auto'
	}
})

export default DevicePair
