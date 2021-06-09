import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Detail extends React.Component{

    render(){
        
        return(

            <View style={{
                backgroundColor:"#f8f8f8",
                height:"100%",
                paddingHorizontal:20
            }}> 

            <ImageBackground source={require('../images/dev2.png')} style={{
                width:"100%",
                 height:250,
                  marginLeft:50
                  }}>
                      <View style={{
                          backgroundColor:"#000",
                          height:30,
                          width:40,
                          marginLeft:-50,
                          marginTop:30,
                          alignItems:"center",
                          justifyContent:"center"
                      }}>
                          <TouchableOpacity
                          onPress={()=>this.props.navigation.goBack()}
                          >
                          <Image source={require('../images/back.png')} style={{width:25, height:10}}/>
                          </TouchableOpacity>
                      </View>
            </ImageBackground>

                <View style={{
                    backgroundColor:"#FFF",
                    padding:10
                }}>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center"
                }}>
                <View>
                <Text style={{
                    fontSize:18,
                    fontWeight:"bold"
                }}>
                    Software Developer
                </Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={{
                        fontWeight:"bold",
                         color:"#000",
                          opacity:0.6,
                          fontSize:14
                          }}>Dhanmondi-27,</Text>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:13,
                        color:"#B8B8B8",
                        marginLeft:8
                    }}>Dhaka, Bangladesh</Text>
                </View>
                </View>
                <View style={{
                    backgroundColor:"#DFDFDF",
                    height:32,
                    width:32,
                    borderRadius:5,
                    marginLeft:50,
                    marginTop:5,
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <Image source={require('../images/favourite.png')} style={{
                        height:24,
                        width:24,
                        opacity:0.5
                    }}/>
                </View>
                </View>
                <View style={{
                    flexDirection:"row",
                    paddingVertical:20
                }}>
                <Image source={require('../images/1.jpg')} style={{width:30, height:30}}/>
                <Image source={require('../images/2.jpg')} style={{width:30, height:30}}/>
                <Image source={require('../images/3.jpg')} style={{width:30, height:30}}/>
                <Image source={require('../images/4.jpg')} style={{width:30, height:30}}/>
                <Text style={{
                    fontWeight:"bold",
                    color:"#B8B8B8",
                    paddingHorizontal:10,
                    fontSize:18
                }}>4 Friends Work Here</Text>
                </View>
                </View>

                <View style={{
                    flexDirection:"row",
                    marginTop:20
                }}>
                    <View style={{
                        backgroundColor:"#FFF",
                        paddingVertical:10,
                        paddingHorizontal:20,
                        borderRadius:8
                    }}>
                    <Text style={{
                        fontWeight:"bold",
                        color:"#B8B8B8",
                        fontSize:15,
                    }}>Experience</Text>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:18
                    }}>Minimun 2 year</Text>
                    </View>
                    <View style={{
                        backgroundColor:"#FFF",
                        paddingVertical:10,
                        paddingHorizontal:20,
                        marginLeft:35,
                        borderRadius:8,
                        width:160
                    }}>
                    <Text style={{
                        fontWeight:"bold",
                        color:"#B8B8B8",
                        fontSize:15
                    }}>Type</Text>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:18
                    }}>Full Time</Text>
                    </View>
                </View>

                <View style={{
                    backgroundColor:"#FFF",
                    borderRadius:15,
                    padding:20,
                    marginTop:20
                }}>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:20,
                        
                    }}>Job Description</Text>
                    <Text style={{
                            fontWeight:"bold",
                            color:"#B2B2B2"
                        }}> 
                            Amet minim mollit non deserunt ulliamco est sit aliqua dolor
                            do amet sit. Vellit officoa consequat duis enim velit mollit. Extertation venoima consequat sunt notserud amet.
                        </Text>
                </View>


                <View style={{
                    width:"100%",
                    alignItems:"flex-end"
                }}>
                    <View style={{
                        backgroundColor:"#000",
                        alignItems:"center",
                        justifyContent:"center",
                        width:80,
                        height:50,
                        marginTop:5,
                        borderRadius:17
                    }}>
                        <Image source={require('../images/for.png')}/>
                        <Text style={{color:"#FFF"}}>Apply</Text>
                    </View>
                </View>

            </View>
        );
    }
}