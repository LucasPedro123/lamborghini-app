// Arquivo index.tsx
import React, { useEffect, useState } from 'react';
import { Text, View, Button, Image } from 'react-native';

// Estilos usando Styled Components
import * as S from './style';

// Imagens
import logo from '../../../assets/logo-lamborghini.png';

// Componentes
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

      console.log("ID: ", carData?.id)
    })();
  }, []);

  useEffect(() => {
    console.log("Car Data in State:", carData); // Log para verificar o estado atualizado
  }, [carData]);

  const RenderCarDetails = () => (
    <S.LogoContainer>
      <S.CarBrand>{carData?.releaseYear}</S.CarBrand>
      <S.CarName>{carData?.carName}</S.CarName>
    </S.LogoContainer>
  );

  const RenderLogoBox = () => (
    <S.LogoContainer>
      <S.ImageLogo source={logo} />
    </S.LogoContainer>
  );

  const RenderCarImage = () => (
    <S.ImageComponent
      source={{ uri: `${CAR_ASSESTS_BASE_URL}${carData?.id}.png` }}
    />
  );

  const RenderPriceControls = () => (
    <S.PriceLabelContainer>
      <Button title='<' color={"#01A6B3"} onPress={() => { handelePreviousItem(carData, setCarData) }} />
      <S.PriceLabel>{carData?.price}</S.PriceLabel>
      <Button title='>' color={"#01A6B3"} onPress={() => { handeleNextItem(carData, setCarData) }} />
    </S.PriceLabelContainer>
  );

  return (
    <S.ImageContainer>
      {RenderLogoBox()}
      <Divider />
      {RenderCarDetails()}
      {RenderCarImage()}
      <BuyButton />
      {RenderPriceControls()}
    </S.ImageContainer>
  );
}
