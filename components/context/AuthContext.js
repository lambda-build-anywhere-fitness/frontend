import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = (props) => {

    const [loginInfo, setLoginInfo] = useState({email:'', password:''})
    const [registerInfo, setRegstierInfo] = useState({email:'', password:'',location:''})
    


    return (
        <AuthContext.Provider
        value={[loginInfo, setLoginInfo, registerInfo, setRegstierInfo,tokenPass, setTokenPass]}>{props.children}
        </AuthContext.Provider>
        )
}