import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    imageContainer: {
        flex: 1, 
        marginVertical: 20,
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    logoContainer: {
        height: 200,
        width: "100%",
        alignItems: 'center',
    },
    imageLogo: {
        flex: 1,
        width: "65%",
        resizeMode: 'contain',
    },
    carBrand: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 18,
        fontStyle: "italic"
    },
    carName: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    image: {
        flex: 1,
        marginBottom: 10,
        width: "100%",
        height: "100%"

    },
    priceLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    priceLabel:{
        color: '#fff',
        fontSize: 22
    }
})