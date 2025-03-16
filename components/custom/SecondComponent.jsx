import { View } from 'react-native'

export default function SecondComponent(){
    return (
        <View testID="id-2" style={{
            width: 20,
            height: 20,
            position: 'absolute',
            //top: '100%',
            backgroundColor: "blue",
        }}>
        </View>
    )
}