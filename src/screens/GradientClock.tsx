import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  Canvas,
  Rect,
  rotate,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');
console.log(width, height);

const GradientClock = () => {
  const centerX = width / 2;
  const centerY = height / 2;
  const centerVec = vec(centerX, centerY);
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(2, {
        duration: 4000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);
  const animatedRotation = useDerivedValue(() => {
    return [{rotate: Math.PI * rotation.value}];
  }, [rotation]);

  return (
    <View style={styles.container}>
      <Canvas style={styles.container}>
        <Rect x={0} y={0} width={width} height={height}>
          <SweepGradient
            c={centerVec}
            origin={centerVec}
            colors={['white', 'grey', '#222222', 'black']}
            start={0}
            end={360}
            transform={animatedRotation}
          />
        </Rect>
      </Canvas>
      <Text style={styles.dayText}>DAY</Text>
      <Text style={styles.nightText}>NIGHT</Text>
    </View>
  );
};

export default GradientClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dayText: {
    position: 'absolute',
    top: 70,
    fontSize: 90,
    fontWeight: '100',
    letterSpacing: 8,
    alignSelf: 'center',
  },
  nightText: {
    position: 'absolute',
    bottom: 70,
    fontSize: 90,
    fontWeight: '100',
    letterSpacing: 8,
    alignSelf: 'center',
    color: '#fff',
  },
});
