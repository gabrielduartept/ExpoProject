/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Title = styled.Text`
        paddingLeft:16px;
        fontSize: 20px;
        fontWeight: 500;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            'https://cdn.pixabay.com/photo/2016/11/18/19/13/buildings-1836478_960_720.jpg'
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;
    return(
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
            <Title>{name}</Title>
        </Card>
    );
};

const styles = StyleSheet.create({
    card:{
        backgroundColor: "white"
    },
    cover:{
        padding: 20,
        backgroundColor: "white"
    }
});

