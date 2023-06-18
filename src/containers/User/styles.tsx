
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    item: {
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },

    expandedSpace: {
        flex: 1
    },

    separator: {
        height: 10,
        backgroundColor: 'transparent',
    },
});

export default styles;