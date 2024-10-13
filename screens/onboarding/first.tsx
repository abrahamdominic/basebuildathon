import * as React from 'react'
import {
	Text,
	View,
	Image,
	Animated,
	Pressable,
	StatusBar,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Alert
} from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import onBoardImage from '../../assets/onboard1.png'
import { Color, Gradient } from '../../components/Color'

export default function FirstScreen({ navigation }): React.JSX.Element {
	const width = React.useRef(new Animated.Value(7)).current

	Animated.timing(width, {
		delay: 300,
		duration: 500,
		toValue: 30,
		useNativeDriver: false
	}).start()

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topBox}>
				<Animated.View
					style={[styles.box, { width, borderColor: Color.primaryBlue }]}
				/>
				<View style={[styles.box, { width: 7 }]} />
				<View style={[styles.box, { width: 7 }]} />
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
					Easily scan your medications to ensure they're Anthentic.
				</Text>
			</ScrollView>
			<Pressable
				style={styles.button}
				android_ripple={{
					color: Color.lightBlue,
					radius: 32
				}}
				onPress={() => navigation.navigate('Onboarding_Second_Screen')}
			>
				<Feather
					name='arrow-right'
					size={24}
					color='white'
					style={{ margin: 'auto' }}
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
		paddingTop: 90,
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
		height: 200,
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
		width: 50,
		height: 50,
		marginTop: 'auto',
		marginBottom: 30,
		borderRadius: 7,
		backgroundColor: Color.primaryBlue
	}
})
