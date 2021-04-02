import * as React from 'react';
import { Animated, Image, StyleSheet } from 'react-native';

const Splash = () => {
  const animated = new Animated.ValueXY(0, 0);
  const duration = 250; // make this 200 - 250 for non demo purposes when working

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: { x: 30, y: -30 },
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animated, {
          toValue: { x: -30, y: 30 },
          duration: duration,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX: animated.x }, { translateY: animated.y }] },
      ]}
    >
      <Image
        source={require('../assets/icons/shaker/yellowLarge.png')}
        style={styles.shaker}
      />
    </Animated.View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shaker: {
    height: 300,
    width: 300,
  },
});
