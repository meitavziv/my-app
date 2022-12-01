import React, { useState } from 'react';
import { Button, Input, message, Modal } from 'antd';
import '../Login/Login.css'
import { login, register } from '../../actions/index'


export default function Login () {

  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const showModal = () => {
    setOpen(true);
  };
  
  const userData = async(params) => { 
    const userLogin = await ((params === 'login') ? login({'user': userName, 'password':password}) : register({'user': userName, 'password':password}))
    console.log(userLogin)
    if (userLogin){
     console.log('in')
     localStorage.setItem('user', userName)
     setTimeout(() => {
       setOpen(false);
       setConfirmLoading(false);
     }, 1000);
     }
     else {
       setConfirmLoading(false)
       message.info('נסה שוב, אחד מהפרטים שהזנת שגויים')
     }
   }

  const handleLogin = async() => {
    console.log(userName, password)
    setConfirmLoading(true);
    userData('login')
  };
  
  const handleRegister = async() => {
    console.log(userName, password)
    setConfirmLoading(true)
    userData('register')
  }
  
  return (
    <>
      <Modal
        title="התחברות"
        open={open}
        className='modal-login'
        confirmLoading={confirmLoading}
        footer={[
        <Button className='login-button' key="submit" type="primary" loading={confirmLoading} onClick={handleRegister}>
        הרשמה
        </Button>,
        <Button className='login-button' key="submit" type="primary" loading={confirmLoading} onClick={handleLogin}>
        כניסה
        </Button>
        ]}
      >
        <div className='user'> שם משתמש: </div><Input type='text' placeholder='שם משתמש' onChange={(e) => setUserName(e.target.value)}/> <br/><br/>
        <div className='password'> סיסמא: </div><Input type='password' placeholder='סיסמא' onChange={(e) => setPassword(e.target.value)}/>
        
      </Modal>
    </>
  );
};