import { View, Pressable } from 'react-native'
import SecondComponent from '@/components/custom/SecondComponent'

export default function FirstComponent(){
    return (
        <Pressable style={{width: 10, height: 10, display: 'flex', flexDirection: 'row'}}>
            <View style={{width: 10, height: 10, display: 'flex', flexDirection: 'row', position: "relative"}} testID="id-1">
                <SecondComponent></SecondComponent>
            </View>
        </Pressable>
    )
}