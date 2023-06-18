import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { UserAddress } from '../../redux';
import ImagePath from '../../utilities/constants/imagePath'


const RMapView = ({ latitude, longitude }: UserAddress) => {
    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    image={ImagePath.marker}
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude,
                    }}
                />
            </MapView>
        </View>
    );
};

export default RMapView;
