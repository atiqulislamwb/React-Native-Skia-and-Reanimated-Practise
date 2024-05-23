import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 25, fontWeight: '600', alignSelf: 'center'}}>
        Skia & Reanimated
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
        }}>
        <View style={{flex: 1}}>
          <PrimaryButton
            title="🕒 Gradient Clock"
            onPress={() => navigation.navigate('GradientClock' as never)}
          />
          <PrimaryButton
            title="🫧 Chasing Bubble"
            onPress={() => navigation.navigate('ChasingBubble' as never)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
