import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sawo from 'sawo';

const Login = ({ verify }) => {
  const [login, setLogin] = verify;
  const API_KEY = process.env.REACT_APP_SAWO_API_KEY;
  let navigate = useNavigate();
  useEffect(() => {
    var config = {
      containerID: 'sawo-container',
      identifierType: 'email',
      apiKey: API_KEY,
      onSuccess: (payload) => {
        setLogin(true);
        // TODO: save to authorize
        localStorage.setItem('vt', payload.verification_token);
        payload.verification_token !== '' ? navigate('/home') : navigate('/');
      },
      onFailure: (payload) => {
        setLogin(false);
        console.log(payload);
        window.alert('Login failed');
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();

    return sawo;
  }, [login, setLogin, API_KEY, navigate]);

  return (
    <div className='flex justify-center items-center h-screen bg-pattern 2xl:rounded-md max-w-mw mx-auto'>
      <div
        id='sawo-container'
        style={{ height: '290px', width: '300px' }}
      ></div>
    </div>
  );
};

export default Login;
