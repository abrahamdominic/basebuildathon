import * as React from 'react'
import {
	Text,
	View,
	Image,
	Animated,
	Pressable,
	StyleSheet,
	ScrollView,
	Alert
} from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import onBoardImage from '../../assets/onboard3.png'
import { Color, Gradient } from '../../components/Color'

export default function ThirdScreen({ navigation }): React.JSX.Element {
	const width = React.useRef(new Animated.Value(7)).current

	Animated.timing(width, {
		delay: 500,
		duration: 300,
		toValue: 30,
		useNativeDriver: false
	}).start()

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topBox}>
				<View style={[styles.box, { width: 7 }]} />
				<View style={[styles.box, { width: 7 }]} />
				<Animated.View
					style={[styles.box, { width, borderColor: Color.primaryBlue }]}
				/>
			</View>
			<View style={styles.imageWrapper}>
				<Image
					source={onBoardImage}
					style={styles.image}
					resizeMode='center'
				/>
				<LinearGradient
					colors={Gradient.whiteGradient}
					style={styles.upperLayer}
				/>
			</View>
			<ScrollView style={styles.captionWrapper}>
				<Text style={styles.caption}>
					Get rewarded with tokens while caring for yourself.
				</Text>
			</ScrollView>
			<Pressable
				style={styles.button}
				android_ripple={{ color: Color.lightBlue }}
				onPress={() => navigation.navigate('Signup_Prompt')}
			>
				<Text
					style={{
						color: '#fff',
						fontSize: 14,
						fontFamily: 'IBMPlexSans-Medium'
					}}
					children='Get Started'
				/>
			</Pressable>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 30,
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'between',
		alignItems: 'center'
	},
	topBox: {
		gap: 3,
		paddingTop: 60,
		display: 'flex',
		flexDirection: 'row'
	},
	box: {
		borderWidth: 2,
		borderColor: Color.midBlue
	},
	imageWrapper: {
		width: '100%',
		height: '65%',
		marginTop: 10,
		position: 'relative'
	},
	image: {
		width: '100%',
		height: '100%',
		position: 'absolute'
	},
	upperLayer: {
		width: '100%',
		height: 250,
		marginTop: 'auto'
	},
	captionWrapper: {
		width: '90%',
		minHeight: 100,
		marginTop: -85
	},
	caption: {
		fontSize: 14,
		color: Color.fontBlack,
		textAlign: 'center',
		textTransform: 'capitalize',
		fontFamily: 'IBMPlexSans-Regular'
	},
	button: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		marginTop: 'auto',
		marginBottom: 30,
		borderRadius: 7,
		backgroundColor: Color.primaryBlue
	}
})
