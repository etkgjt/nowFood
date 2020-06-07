import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList,
    Image,
    TouchableHighlight,
    Dimensions,
    TextInput

} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const data = {
    name: 'Mì Xào Trứng & Mì Ý',
    addr: '160/3 Võ Thị Sáu, P.8, Quận 3, TP.HCM',
    start: '15:00',
    end: '22:00',
    pics: 'https://www.foody.vn/ho-chi-minh/mi-xao-bo-trung-mi-y',
    rating: 5,
    menu: [
        {
            foodName: 'Mì Ý',
            price: 40000,
        },
        {
            foodName: 'Nui xào bò',
            price: 54000,
        },
        {
            foodName: 'Mỳ xào hải sản',
            price: 30000,
        },
        {
            foodName: 'Mỳ thêm',
            price: 5000,
        },
        {
            foodName: 'Bò thêm',
            price: 15000,
        }

    ]
}
const Header = () =>
    <View style={styles.header}>
        <TouchableOpacity>

        </TouchableOpacity>
        <Text></Text>
    </View>
function renderItems(data) {
    let arr = [];
    arr = data.map((item) =>
        <TouchableOpacity style={styles.foodBtn}>
            <Image
                source={require('../Pics/login.jpg')}
                style={styles.btnImg}
            />
            <Text style={{ marginVertical: 8, fontSize: 15, marginLeft: 10 }} >{item.foodName}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 10 }}>{item.price}</Text>
        </TouchableOpacity>

    )
    return arr;
}
class FoodDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />

                <ScrollView>
                    <View style={styles.mainView}>
                        <Image
                            style={styles.avatarImg}
                            source={require('../Pics/login.jpg')}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 5 }}>{data.name}</Text>
                        <Text style={{ padding: 5 }}>{data.rating}</Text>

                        <Text style={{ fontWeight: 'bold', padding: 5 }}>Mở cửa: {data.start}</Text>
                        <Text style={{ fontWeight: 'bold', padding: 5 }}>Đóng cửa: {data.end}</Text>

                        <View style={{ width: screenWidth, height: 1, backgroundColor: 'lightgray', marginVertical: 10 }}></View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 5 }}>Menu</Text>
                        <View style={styles.mainMenu}>
                            {renderItems(data.menu)}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: screenWidth,
        height: screenHeight * 0.1,
        backgroundColor: 'pink',

    },
    mainView: {
        flex: 1,

    },
    avatarImg: {
        width: screenWidth,
        height: 150,
        resizeMode: 'center',
    },
    popularView: {
        flexDirection: 'row',
        width: screenWidth,
        padding: 5,
        //flexDirection: 'column',
        flexWrap: 'wrap',

        justifyContent: 'space-around'

    },
    mainMenu: {
        width: screenWidth,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    foodBtn: {
        margin: 10,

        width: screenWidth * 0.4,
        height: screenWidth * 0.5,
        //borderRadius: 5,
        backgroundColor: 'white',
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        //borderWidth: 1,
    },
    btnImg: {
        width: '100%',
        height: '70%',
        resizeMode: 'center',
        borderRadius: 5,

    }

})
export default FoodDetails;