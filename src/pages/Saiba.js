import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Saiba() {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled' 
        style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.parag}>O SEN-Eye é um aplicativo inovador desenvolvido pela SEN.AI em colaboração com o INPE e outros parceiros para monitoramento de catástrofes naturais e análises climáticas no Brasil. Utilizando dados de satélites avançados, como o Landsat-8 e o Sentinel-2, e algoritmos de machine learning, o aplicativo oferece diversas funcionalidades:</Text>
                <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>• Previsão do Tempo: </Text>Fornecendo previsões meteorológicas precisas para preparação e resposta rápida a eventos climáticos.</Text>
                <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>• Detecção de Enchentes e Inundações: </Text>Identificação rápida de áreas em risco ou já afetadas, utilizando análise de imagens de satélite e dados hidrológicos.</Text>
                <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>• Identificação de Queimadas: </Text>Uso de imagens infravermelhas e outros sensores para monitorar e combater incêndios em áreas de preservação.</Text>
                <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>• Emissão de Alertas:</Text>Alertas automáticos são enviados às autoridades e população local em caso de perigos iminentes.</Text>
                <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>• Auxílio em Resgate: </Text>O aplicativo ajuda na coordenação de equipes de resgate em áreas afetadas por desastres.</Text>
                <Text style={styles.parag}>O SEN-Eye representa um avanço significativo na prevenção de desastres naturais, protegendo comunidades, economizando recursos e salvando vidas através da tecnologia de ponta e da resposta rápida a emergências. Este projeto reforça o compromisso da SEN.AI com a inovação e segurança, fazendo do SEN-Eye um aliado crucial na gestão de crises ambientais no Brasil.</Text>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
    },

    parag: {
        marginVertical: 10,
    },

    text: {
        margin: 5,
    },

    container: {
        padding: 20,
        margin: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },

    scroll: {
        backgroundColor: 'white',
    },
}) 