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
    },
    stories:{

    },
    titulostories:{
        color:'#989cac',
        fontSize:30,
        margin:20
    },
    scrollstories:{

    },
    imgstories:{
        width:200,
        height:300,
        resizeMode:'contain',
        borderRadius:40,
        margin:5
    },
    blackbox:{
        backgroundColor:"#090909",
        color:'#989cac',
        fontSize:15,
        padding:10,
        width:50,
        borderRadius:10,
        position:"absolute",
        zIndex:1000,
        top:20,
        left:20,
        textAlign:"center"
    },
    redbox:{
        backgroundColor:"#600",
        color:'#989cac',
        fontSize:15,
        padding:10,
        width:100,
        borderRadius:10,
        position:"absolute",
        zIndex:1000,
        top:20,
        left:20,
        textAlign:"center"
    },
    txticon:{
        flexDirection:"row",
        alignItems:"center"
    },
    txt:{
        color:"#989cac",
        fontSize:20,
        padding:10
    },
    icon:{
        width:18,
        height:18,
        resizeMode:'contain'
    },
    trending:{
        
    },
    cxtitulo:{
        flexDirection:"row",
        alignItems:'center',
        marginTop:30,
        marginBottom:30
    },
    trendingtitulo:{
        fontSize:30,
        color:"#989cac",
        paddingLeft:10
    },
    trendingmore:{
        width:60,
        height:10,
        resizeMode:'contain',
        marginLeft:'auto',
        paddingRight:10
    },
    cxtrendingdetalhe:{
        backgroundColor:"#403d40",
        borderRadius:20,
        padding:20,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    detalheimg:{
        width:'100%',
        height:300,
        borderRadius:10,
        resizeMode:'cover'
    },
    // Bottom foi utilizado para mandar o like para baixo
    detalhelike:{
        backgroundColor:'#ff6',
        padding:10,
        borderWidth:5,
        borderColor:'rgba(255,255,100,0.7)',
        position:'absolute',
        zIndex:1000,
        bottom:0,
        right:0,
        borderBottomRightRadius:10,
        borderTopLeftRadius:5,
        textAlign:'center'
    },
    trendingusuario:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:20
    },
    trendingusuarioimg:{
        width:50,
        height:50,
        borderRadius:20,
        resizeMode:'contain',
        marginRight:10

    },
    trendingusuariotitulo:{
        fontSize:20,
        color:'#989cac',
        fontWeight:'bold'
    },
    trendingusuariosub:{
        color:'#989cac'
    },
    trendingobs:{
        color:'#989cac'
    }


})