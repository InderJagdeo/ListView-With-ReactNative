
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },

    item: {
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
    },

    mapContainer: {
        flex: 1,
    },
    
    map: {
        flex: 1,
        borderRadius: 8
    },
});

export default styles;