import * as React from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  Animated,
  StyleSheet,
  Image,
} from 'react-native'
import {LinearGradient} from 'react-native-linear-gradient'
import {Gradients} from '../../components/Colors'

export default function FirstScreen (): React.JSX.Element {
  const width = React.useRef(new Animated.Value(7)).current

  Animated.timing(width, {
    duration: 500,
    toValue: 30,
    useNativeDriver: false,
  }).start()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBox}>
        <Animated.View style={[styles.box, {width, borderColor: 'blue'}]} />
        <View style={[styles.box, {width: 7}]} />
        <View style={[styles.box, {width: 7}]} />
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/onboard1.png')}
          style={styles.image}
          resizeMode='center'
        />
        <LinearGradient
          colors={Gradients.WhiteGradient}
          style={styles.upperLayer}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBox: {
    gap: 3,
    paddingTop: 60,
    display: 'flex',
    flexDirection: 'row',
  },
  box: {
    borderWidth: 2,
    borderColor: 'gray',
  },
  imageWrapper: {
    width: '100%',
    height: '65%',
    marginTop: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  upperLayer: {
    width: '100%',
    height: 200,
    marginTop: 'auto',
  },
})
