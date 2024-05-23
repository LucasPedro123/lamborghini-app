import { fetchGetCarData } from "../../Api/getCars"
import { CarModel } from "./props"

export const handelePreviousItem = async (cardData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        if (cardData && cardData?.id > 1) {
            const idDecrement = cardData.id - 1
            loadCarData(idDecrement, setCarData)
        }
    } catch (error) {
        console.log(error)
    }
}
export const handeleNextItem = async (cardData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        if (cardData && cardData?.id < 10) {
            const idDecrement = cardData.id + 1
            loadCarData(idDecrement, setCarData)
            
        }
    } catch (error) {
        console.log(error)
    }
}

export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    const response = await fetchGetCarData(id);
    try {
        setCarData(response);
    } catch (e) {
        console.log(e);
        setCarData(null);
    }
}