import React, { useState } from "react";
import { View , Text, StyleSheet, Alert, Button, TouchableOpacity, TextInput} from 'react-native';
import * as yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Formik } from "formik";
const validationscheema=yup.object().shape({
    passwordlength:yup.number().required().min(4,'Minimum length should be 4').max(16,'Maximum length should be 16')
})
export const MainContent=()=>{
    const [password,setpassword]=useState('');
    const [useUppecCae,setuseUpperCase]=useState(true);
    const [useLowerCase,setuseLowerCase]=useState(false);
    const [useNumbers,setuseNumbers]=useState(false);
    const [useSpecialChar,setuseSpecialChar]=useState(false);
    const generatepassword=(passwordlength:number)=>{
        let chars="";
        if(useUppecCae){
            chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if(useLowerCase){
            chars+='abcdefghijklmnopqrstuvwxyz'
        }
        if(useNumbers){
            chars+='0123456789'
        }
        if(useSpecialChar){
            chars+='!@#$%^&*()_+='
        }

        const password=createpassword(chars,passwordlength);
        setpassword(password);
    }
    function createpassword(chars:string,poasswordlength:number){
        let password=""
        for(let i=0;i<poasswordlength;i++){
            password+=chars.charAt(Math.floor(Math.random()*chars.length))
        }
        console.log(password);
        return password;
    }

    return (
        <View>
            <Formik
            initialValues={{passwordlength:''}}
            validationSchema={validationscheema}
            onSubmit={(data)=>{
                generatepassword(+data.passwordlength)
            }}
            >
             {
                ({
                    values,
                    handleSubmit,
                    handleReset,
                    handleChange,
                    touched,
                    errors,
                    isValid
                }:any)=>(
                    <>
                    <View style={styles.inputcontainer}>
                      <View >
                      <Text style={styles.label}>Enter password length</Text>
                        {
                            touched.passwordlength && errors.passwordlength && (
                                <Text style={styles.errormessage}>{errors.passwordlength}</Text>
                            )
                        }
                      </View>
                      <TextInput style={styles.passwordlength} keyboardType="numeric" placeholderTextColor={'gray'} placeholder="Ex. 8"  value={values.passwordlength} onChangeText={handleChange('passwordlength')} />
                    </View>
                    <View style={styles.checkboxcontainer}>
                    <BouncyCheckbox
                    disableBuiltInState
                     textComponent={<Text style={{color:'white',marginLeft:10}}>Includes Uppercase</Text>}
                     isChecked={useUppecCae}
                     onPress={()=>setuseUpperCase(!useUppecCae)}
                     fillColor="blue"
                     unfillColor="gray"
                    />
                     <BouncyCheckbox
                     disableBuiltInState
                     textComponent={<Text style={{color:'white',marginLeft:10}}>Includes Lowercase</Text>}
                     isChecked={useLowerCase}
                     onPress={()=>setuseLowerCase(!useLowerCase)}
                     fillColor="blue"
                     unfillColor="gray"
                    />
                    <BouncyCheckbox
                    disableBuiltInState
                     textComponent={<Text style={{color:'white',marginLeft:10}}>Includes Specialcharacters</Text>}
                     isChecked={useSpecialChar}
                     onPress={()=>setuseSpecialChar(!useSpecialChar)}
                     fillColor="blue"
                     unfillColor="gray"
                    />
                    <BouncyCheckbox
                    disableBuiltInState
                     textComponent={<Text style={{color:'white',marginLeft:10}}>Includes Numbers</Text>}
                     isChecked={useNumbers}
                     onPress={()=>setuseNumbers(!useNumbers)}
                     fillColor="blue"
                     unfillColor="gray"
                    />
                    </View>
                    <View style={styles.formactions}>
                      <TouchableOpacity disabled={!isValid} onPress={handleSubmit} style={[styles.button,{backgroundColor:'red'}]}><Text style={{color:'white'}}>GENERATE PASSWORD</Text></TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                         setuseUpperCase(true);
                         setuseLowerCase(false);
                         setuseNumbers(false);
                         setuseSpecialChar(false);
                        handleReset();
                        setpassword('');
                      }} style={[styles.button,{backgroundColor:'blue'}]}><Text style={{color:'white'}}>RESET</Text></TouchableOpacity>
                    </View>
                    </>
                )
             }
            </Formik>
            {
                password && (
                    <View style={styles.passwordcontainer}>
                    <Text style={{color:'black',fontWeight:'bold',margin:8}}>Press to coapy the password</Text>
                   <Text style={{color:'blue',margin:10}}>YOUR GENERATED PASSWORD</Text>
                     <Text selectable={true} style={{color:'black',fontWeight:'bold'}}>{password}</Text>
                </View>
                )
            }
        </View>
    )
}

const styles=StyleSheet.create({
    label:{
        color:'white'
    },
    passwordlength:{
        padding: 8,
        width: '30%',
        borderBottomWidth:1,
        borderColor: 'blue',
        color:'white'
    },
    errormessage: {
        fontSize: 12,
        color: 'red',
        marginTop:8
      },
      inputcontainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10
      },
      checkboxcontainer:{
        marginTop:15,
        height:200,
        flex:1,
        justifyContent:'space-between'
      },
      formactions:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:15
      },
      button:{
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius:15,
        width:200,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:8
      },
      passwordcontainer:{
         width:'100%',
         padding:10,
         borderRadius:20,
         backgroundColor:'white',
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         marginTop:12

      }
})