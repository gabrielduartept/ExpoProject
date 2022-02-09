import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, StyleSheet, SafeAreaView, View, Text } from 'react-native';

export const RestaurantsScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar />
            </View>
            <View style={styles.list}>
                <Text> List </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    search: {
        padding: 16,
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: 'blue',
    },
});