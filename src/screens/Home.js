import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends React.Component{

    render(){
        
        return(
            <ScrollView style={{
                backgroundColor:"#F8F8F8",
                paddingHorizontal:20
            }}>
                <Text style={{
                    marginTop:40,
                    fontWeight:"bold"
                }}>Hello osman</Text>
                <Text style={{fontSize:18,marginTop:13}}>Find your dream jobs</Text>

                <View style={{
                    backgroundColor:"#FFF",
                    borderRadius:5,
                    padding:5,
                    flexDirection:"row",
                    alignItems:"center",
                    marginTop:20
                }}>
                    <TextInput
                    placeholder="What are you looking for.?"
                    style={{
                        paddingHorizontal:20
                    }}
                    />
                   <View style={{
                        backgroundColor:"#000000",
                        width:30,
                        height:30,
                        borderRadius:8,
                        marginLeft:120,
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                        <Image source={require('../images/searc.png')}/>
                    </View>

                </View>

                <Text style={{
                    fontWeight:"bold",
                    marginTop:20,
                    fontSize:15
                 }}>Most Popular</Text>

                 
                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                 <View style={{
                     backgroundColor:"#FFF",
                     height:200,
                     width:150,
                     borderRadius:20,
                     marginTop:35
                 }}>
                     <Image source={require('../images/dev.png')} style={{width:150, height:150}}/>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Detail')}
                    >
                    <View style={{
                         backgroundColor:"#000",
                         height:60,
                         borderRadius:20,
                         marginTop:-10,
                         paddingHorizontal:15,
                         paddingVertical:8
                     }}>
                         <Text style={{color:"#FFF", fontWeight:"bold", fontSize:13}}>Software Developer</Text>
                         <View style={{flexDirection:"row", marginTop:4}}>
                           <View style={{
                               backgroundColor:"#3E3C3C",
                                paddingHorizontal:5,
                                alignItems:"center",
                                justifyContent:"center",
                                borderRadius:5
                                }}>
                           <Text style={{
                                 color:"#B0B0B0",
                                 fontWeight:"bold",
                                 fontSize:13
                             }}>Full Time</Text>
                           </View>
                             <Text style={{
                                 color:"#B0B0B0",
                                 fontWeight:"bold",
                                 fontSize:13,
                                 marginLeft:25
                             }}>$50/h</Text>
                         </View>
                     </View>
                    </TouchableOpacity>
                 </View>

                 <View style={{
                     backgroundColor:"#FFF",
                     height:200,
                     width:150,
                     borderRadius:20,
                     marginTop:35,
                     marginLeft:10
                 }}>
                     <Image source={require('../images/driver.png')} style={{width:150, height:150}}/>
                     <View style={{
                         backgroundColor:"#000",
                         height:60,
                         borderRadius:20,
                         marginTop:-10,
                         paddingHorizontal:15,
                         paddingVertical:8
                     }}>
                         <Text style={{color:"#FFF", fontWeight:"bold", fontSize:13}}>Car Driver</Text>
                         <View style={{flexDirection:"row", marginTop:4}}>
                            <View style={{
                               backgroundColor:"#3E3C3C",
                                paddingHorizontal:5,
                                alignItems:"center",
                                justifyContent:"center",
                                borderRadius:5
                                }}>
                            <Text style={{
                                 color:"#B0B0B0",
                                 fontWeight:"bold",
                                 fontSize:13
                             }}>Full Time</Text>
                            </View>
                             <Text style={{
                                 color:"#B0B0B0",
                                 fontWeight:"bold",
                                 fontSize:13,
                                 marginLeft:25
                             }}>$50/h</Text>
                         </View>
                     </View>
                 </View>

                 <View style={{
                     backgroundColor:"#FFF",
                     height:200,
                     width:150,
                     borderRadius:20,
                     marginTop:35,
                     marginLeft:10
                 }}>
                     <Image source={require('../images/accountant.png')} style={{width:150, height:150}}/>
                     <View style={{
                         backgroundColor:"#000",
                         height:60,
                         borderRadius:20,
                         marginTop:-10,
                         paddingHorizontal:15,
                         paddingVertical:8
                     }}>
                         <Text style={{color:"#FFF", fontWeight:"bold", fontSize:13}}>Accountant</Text>
                         <View style={{flexDirection:"row", marginTop:4}}>
                         <View style={{
                               backgroundColor:"#3E3C3C",
                                paddingHorizontal:5,
                                alignItems:"center",
                                justifyContent:"center",
                                borderRadius:5
                                }}>
                             <Text style={{
                                 color:"#B0B0B0",
                                 fontWeight:"bold",
                                 fontSize:13
                             }}>Full Time</Text>
                             </View>
                             <Text style={{
                                 color:"#B0B0B0",
                                 fontWeight:"bold",
                                 fontSize:13,
                                 marginLeft:25
                             }}>$50/h</Text>
                         </View>
                     </View>
                 </View>

                 </ScrollView>

                 <Text style={{
                     fontWeight:"bold",
                     marginTop:20,
                     fontSize:15
                 }}>Nearby jobs</Text>

                 <View style={{
                     backgroundColor:"#FFF",
                     marginTop:20,
                     flexDirection:"row",
                     borderRadius:10,
                     height:60,
                     alignItems:"center",
                     paddingHorizontal:20
                 }}>
                     <View style={{
                         backgroundColor:"#DFDFDF",
                         width:50,
                         height:50,
                         borderRadius:5,
                         alignItems:"center",
                         justifyContent:"center"
                     }}>
                         <Image source={require('../images/pentool.png')} style={{width:40, height:40}}/>
                     </View>
                     <View style={{
                         paddingHorizontal:20
                     }}>
                         <Text style={{
                             fontWeight:"bold",
                             fontSize:13
                         }}>Graphics Designer</Text>
                         <View style={{
                             backgroundColor:"#DFDFDF",
                             borderRadius:5,
                             width:70,
                             alignItems:"center",
                             justifyContent:"center"
                         }}>
                         <Text style={{color:"#000"}}>Part Time</Text>
                         </View>
                         <Text style={{
                             fontWeight:"bold",
                              fontSize:18,
                              marginLeft:230,
                              marginTop:-25
                              }}>$5/h</Text>
                     </View>
                 </View>


                 <View style={{
                     backgroundColor:"#FFF",
                     marginTop:20,
                     flexDirection:"row",
                     borderRadius:10,
                     height:60,
                     alignItems:"center",
                     paddingHorizontal:20
                 }}>
                     <View style={{
                         backgroundColor:"#DFDFDF",
                         width:50,
                         height:50,
                         borderRadius:5,
                         alignItems:"center",
                         justifyContent:"center"
                     }}>
                         <Image source={require('../images/dine.png')} style={{width:40, height:40}}/>
                     </View>
                     <View style={{
                         paddingHorizontal:20
                     }}>
                         <Text style={{
                             fontWeight:"bold",
                             fontSize:13
                         }}>Sheff</Text>
                         <View style={{
                             backgroundColor:"#DFDFDF",
                             borderRadius:5,
                             width:70,
                             alignItems:"center",
                             justifyContent:"center"
                         }}>
                         <Text style={{color:"#000"}}>Part Time</Text>
                         </View>
                         <Text style={{
                             fontWeight:"bold",
                              fontSize:18,
                              marginLeft:218,
                              marginTop:-25
                              }}>$5/h</Text>
                     </View>
                 </View>

                 <View style={{
                     backgroundColor:"#FFF",
                     marginTop:20,
                     flexDirection:"row",
                     borderRadius:10,
                     height:60,
                     alignItems:"center",
                     paddingHorizontal:20
                 }}>
                     <View style={{
                         backgroundColor:"#DFDFDF",
                         width:50,
                         height:50,
                         borderRadius:5,
                         alignItems:"center",
                         justifyContent:"center"
                     }}>
                         <Image source={require('../images/add.png')} style={{width:40, height:40}}/>
                     </View>
                     <View style={{
                         paddingHorizontal:20
                     }}>
                         <Text style={{
                             fontWeight:"bold",
                             fontSize:13
                         }}>Nurse</Text>
                         <View style={{
                             backgroundColor:"#DFDFDF",
                             borderRadius:5,
                             width:70,
                             alignItems:"center",
                             justifyContent:"center"
                         }}>
                         <Text style={{color:"#000"}}>Part Time</Text>
                         </View>
                         <Text style={{
                             fontWeight:"bold",
                              fontSize:18,
                              marginLeft:218,
                              marginTop:-15
                              }}>$5/h</Text>
                     </View>
                 </View>


                 <View style={{
                     backgroundColor:"#FFF",
                     marginTop:20,
                     flexDirection:"row",
                     borderRadius:10,
                     height:60,
                     alignItems:"center",
                     paddingHorizontal:20
                 }}>
                     <View style={{
                         backgroundColor:"#DFDFDF",
                         width:50,
                         height:50,
                         borderRadius:5,
                         alignItems:"center",
                         justifyContent:"center"
                     }}>
                         <Image source={require('../images/sitter.png')} style={{width:30, height:30}}/>
                     </View>
                     <View style={{
                         paddingHorizontal:20
                     }}>
                         <Text style={{
                             fontWeight:"bold",
                             fontSize:13
                         }}>Baby Sitter</Text>
                         <View style={{
                             backgroundColor:"#DFDFDF",
                             borderRadius:5,
                             width:70,
                             alignItems:"center",
                             justifyContent:"center"
                         }}>
                         <Text style={{color:"#000"}}>Part Time</Text>
                         </View>
                         <Text style={{
                             fontWeight:"bold",
                              fontSize:18,
                              marginLeft:230,
                              marginTop:-15
                              }}>$5/h</Text>
                     </View>
                 </View>


            </ScrollView>
        );
    }
}