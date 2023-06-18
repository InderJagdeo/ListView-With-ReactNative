/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    View,
    SafeAreaView,
    useColorScheme,
} from 'react-native';
import styles from './styles';
import { RootStackParamList } from '../../navigation/types';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RenderItem from '../../components/ItemDetail';
import RMapView from '../../components/MapView';

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetail'>;

function UserDetail({ route, navigation }: Props): JSX.Element {

    const user = route.params.user;
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.white,
    };

    useEffect(() => {
        navigation.setOptions({ title: user.name });
    }, [user]);

    const createItem = (key: string, value: string) => {
        return {
            key: key,
            value: value,
        };
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <View style={styles.container}>
                <RenderItem item={createItem('Name', user.name)} />
                <RenderItem item={createItem('Email', user.email)} />
                <RenderItem item={createItem('Phone Number', user.phone)} />
                <RenderItem item={createItem('Website', user.website)} />
                <RenderItem item={createItem('Company', user.company.name)} />
                <RenderItem item={createItem('Address', user.address.street + ", " + user.address.city)} />
                {/* <RMapView
                    latitude={parseInt(user.address.geo.lat)}
                    longitude={parseInt(user.address.geo.lng)}
                /> */}
            </View>
        </SafeAreaView>
    );
}

export default UserDetail;

