import axios from 'axios';
import { CarModel } from '../Components/CardView/props';
import { CAR_API_BASE_URL } from '../Constants/car';

interface ApiResponse {
    cars: CarModel[]
}

export const fetchGetCarData = async (id: number): Promise<CarModel | null> => {
    try {
        const response = await axios.get<ApiResponse>(`${CAR_API_BASE_URL}`);
        console.log("API Response Data:", response.data); // Log para verificar a resposta da API
        const carData = response.data.cars.find((car) => car.id === id) || null;
        console.log("Car Data Found:", carData); // Log para verificar o dado encontrado
        return carData;
    } catch (error) {
        console.log("Error ao buscar dados da API", error);
        return null;
    }
}
