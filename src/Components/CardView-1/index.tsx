import React, { useEffect, useState } from 'react';
import { Text, View, Button, Image } from 'react-native';

// styles
import { styles } from './style';

// images
import logo from '../../../assets/logo-lamborghini.png';

// Components
import Divider from '../Divider';
import BuyButton from '../BuyButton';

import { CarModel } from './props';
import { handeleNextItem, handelePreviousItem, loadCarData } from './actions';
import { CAR_ASSESTS_BASE_URL } from '../../Constants/car';

export default function CardView() {
    const [carData, setCarData] = useState<CarModel | null>(null);

    useEffect(() => {
        (async () => {
            await loadCarData(1, setCarData);

            console.log("ID: ",carData?.id)
        })();
    }, []);

    useEffect(() => {
        console.log("Car Data in State:", carData); // Log para verificar o estado atualizado
    }, [carData]);

    const RenderCarDetails = () => (
        <View style={styles.logoContainer}>
            <Text style={styles.carBrand}>{carData?.releaseYear}</Text>
            <Text style={styles.carName}>{carData?.carName}</Text>
        </View>
    );

    const RenderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image source={logo} style={styles.imageLogo} />
        </View>
    );

    const RenderCarImage = () => (
        <Image
            style={styles.image}
            source={
                {uri: `${CAR_ASSESTS_BASE_URL}${carData?.id}.png`}
            }
        />
    );

    const RenderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title='<' color={"#01A6B3"} onPress={() => { handelePreviousItem(carData, setCarData)}} />
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title='>' color={"#01A6B3"} onPress={() => { handeleNextItem(carData, setCarData)}} />
        </View>
    );

    return (
        <View style={styles.imageContainer}>
            {RenderLogoBox()}
            <Divider />
            {RenderCarDetails()}
            {RenderCarImage()}
            <BuyButton />
            {RenderPriceControls()}
        </View>
    );
}
