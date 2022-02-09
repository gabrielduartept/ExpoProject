import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  Text, 
  View, 
  Platform,
  StatusBar } from 'react-native';

// const isAndroid = Platform.OS ==='android';
console.log(StatusBar.currentHeight)
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 16, backgroundColor:"green"}}>
          <Text>Header</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor:"blue"}}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
