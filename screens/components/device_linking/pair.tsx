import React from 'react'
import { Text, View, StyleSheet, Pressable, Animated } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Color, Gradient } from '../../../types/Color'

const DevicePair = ({ navigation }): React.JSX.Element => {
	const width = React.useRef(new Animated.Value(7)).current

	Animated.timing(width, {
		delay: 300,
		duration: 500,
		toValue: 30,
		useNativeDriver: false
	}).start()

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.boxWrapper}>
					<View style={styles.box} />
					<Animated.View style={[styles.boxRollerWrapper, { width }]}>
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
	}
})

export default DevicePair
