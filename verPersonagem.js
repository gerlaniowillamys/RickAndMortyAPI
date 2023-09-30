import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { getPersonagem } from "./getPersonagem";
import { styles } from "./Style";

export default function VerPersonagem() {
    const [personagem, setPersonagem] = useState(null);
    const [nome, setNome] = useState('');
    const [load, setLoad] = useState(false);

    async function carregaPersonagem() {
        try {
            const resultado = await getPersonagem(nome);
            setPersonagem(resultado.data.results[0]);
        } catch (error) {
            console.error("Erro ao carregar personagem:", error);
            setPersonagem(null);
        }
    }

    return (
        <View style={styles.container}>
            {personagem ? (
                <View key={personagem.id}>
                    <Image source={{ uri: personagem.image }} style={styles.image} />
                    <Text style={styles.text}>Nome: {personagem.name}</Text>
                    <Text style={styles.text}>Espécie: {personagem.species}</Text>
                    <Text style={styles.text}>Status: {personagem.status}</Text>
                    <Text style={styles.text}>Gênero: {personagem.gender}</Text>
                </View>
            ) : (
                <View>
                    <ActivityIndicator size='large' color='blue' />
                    <Text style={styles.text}>Nome: Não encontrado</Text>
                    <Text style={styles.text}>Espécie: Não encontrado</Text>
                    <Text style={styles.text}>Status: Não encontrado</Text>
                    <Text style={styles.text}>Gênero: Não encontrado</Text>
                </View>
            )}
            <TextInput
                style={styles.textinput}
                placeholder="Digite o nome do personagem..."
                onChangeText={(name) => setNome(name)}
                value={nome}
            />
            <TouchableOpacity style={styles.button} onPress={carregaPersonagem} >
                {load ? (
                    
                    <ActivityIndicator size='large' color='blue' />
                    
                ) : (
                    <Text Text style={styles.buttonText}>Buscar</Text>
                )}
            </TouchableOpacity>
        </View >
    );
}
