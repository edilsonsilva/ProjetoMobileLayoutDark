import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#090909'
    },
    header:{
        flexDirection:'row',
        paddingTop:60,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:30,
        
    },
    perfil:{

    },
    imgperfil:{
        width:60,
        height:60,
        resizeMode:'contain',
        borderRadius:100
    },
    titulo:{
        flex:2
    },
    nome:{
        color:'#989cac',
        fontWeight:'bold',
        fontSize:15,
        padding:10,
    },
    descricao:{
        color:'#989cac',
        paddingLeft:20
    },
    pesquisa:{
        
    },
    imgpesquisa:{
        flex:1,
        width:30,
        height:30,
        resizeMode:'contain',
    }
})