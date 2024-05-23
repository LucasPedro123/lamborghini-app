// Arquivo Style.tsx
import styled from 'styled-components/native';

export const ImageContainer = styled.View`
  flex: 1;
  margin-block: 20px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const LogoContainer = styled.View`
  height: 200px;
  width: 100%;
  align-items: center;
`;

export const ImageLogo = styled.Image`
  flex: 1;
  width: 65%;
  resize: contain;
`;

export const CarBrand = styled.Text`
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  font-style: italic;
`;

export const CarName = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const ImageComponent = styled.Image`
  margin-bottom: 10px;
  flex: 1;
  align-self: center;
  width: 300px;
`;

export const PriceLabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 10px;
  align-items: center;
  margin-top: 10px;
`;

export const PriceLabel = styled.Text`
  color: #fff;
  font-size: 22px;
`;
