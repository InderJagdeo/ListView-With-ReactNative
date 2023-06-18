/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    useColorScheme,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux'
import { requestUser, getUserSelector, UserInterface } from '../../redux';
import { RootStackParamList } from '../../navigation/types';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/Entypo';

type Props = NativeStackScreenProps<RootStackParamList, 'User'>;

function User({ navigation }: Props): JSX.Element {
    const dispatch = useDispatch();
    const users = useSelector(getUserSelector);
    const isDarkMode = useColorScheme() === 'dark';
    
    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.white,
    };

    useEffect(() => {
        dispatch(requestUser());
    }, []);

    const handlePress = (user: UserInterface) => {
        navigation.navigate("UserDetail", { user });
    };

    const renderItem = ({ item }: { item: UserInterface }) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.expandedSpace} />
                <Icon name="chevron-thin-right" size={24} />
            </View>
        </TouchableOpacity>
    );

    const ItemSeparator = () => (
        <View style={styles.separator} />
    );

    return (
        <SafeAreaView style={backgroundStyle}>
            <View style={styles.container}>
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={ItemSeparator}
                    keyExtractor={(user) => user.id.toString()}
                />
            </View>
        </SafeAreaView>
    );
}

export default User;
