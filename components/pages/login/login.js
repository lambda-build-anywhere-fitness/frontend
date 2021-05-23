import React from 'react';
import LoginForm from '../../forms/login.js';

// ==============================================
// ==============================================

const LoginPage = ({setLoggedIn, setRole}) => <LoginForm setLoggedIn={setLoggedIn} setRole={setRole}></LoginForm>;

// ==============================================
// ==============================================

export default LoginPage;