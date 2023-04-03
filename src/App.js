import React, {useState,useRef} from 'react'
import './App.css';

function App() {

const [errorString, setErrorString] = useState('Fill in the field');
const [changeClassFirst, setchangeClassFirst] = useState('span-default');
const [changeClassSecond, setchangeClassSecond] = useState('span-default');
const [changeClassThird, setchangeClassThird] = useState('span-default');
const inputRef = useRef();

const clear = () =>{
  inputRef.current.value = '';
  setErrorString('Fill in the field');
  setchangeClassFirst('span-default');
  setchangeClassSecond('span-default');
  setchangeClassThird('span-default');
}
  const val = () =>{
    if(inputRef.current.value.length === 0){
      setchangeClassFirst('span-default');
      setchangeClassSecond('span-default');
      setchangeClassThird('span-default');
    }
    if(inputRef.current.value.search(/[a-z]/) > -1){
      setchangeClassFirst('span-easy');
      setchangeClassSecond('span-default');
      setchangeClassThird('span-default');
      setErrorString('Password must contain uppercase letters and numbers');
    }
    if(inputRef.current.value.search(/[0123456789]/) > -1){
      setchangeClassFirst('span-easy');
      setchangeClassSecond('span-default');
      setchangeClassThird('span-default');
      setErrorString('The password must contain uppercase and lowercase letters');
    }
    if(inputRef.current.value.search(/[0123456789]/) > -1 && inputRef.current.value.search(/[a-z]/) > -1 ){
      setchangeClassFirst('span-medium');
      setchangeClassSecond('span-medium');
      setchangeClassThird('span-default');
      setErrorString('Password must contain uppercase letters');
    } 
    if(inputRef.current.value.search(/[A-Z]/) >-1 && inputRef.current.value.search(/[0123456789]/) > -1){
      setchangeClassFirst('span-easy');
      setchangeClassSecond('span-default');
      setchangeClassThird('span-default');
      setErrorString('The password must contain lowercase letters');
    } 
    if(inputRef.current.value.search(/[A-Z]/) >-1 && inputRef.current.value.search(/[0123456789]/) > -1 && inputRef.current.value.search(/[a-z]/) > -1){
      setchangeClassFirst('span-medium');
      setchangeClassSecond('span-medium');
      setchangeClassThird('span-default');
      setErrorString('Password must be at least 8 characters long');
    }if(inputRef.current.value.search(/[A-Z]/) >-1 && inputRef.current.value.search(/[0123456789]/) > -1 && inputRef.current.value.search(/[a-z]/) > -1 && inputRef.current.value.length > 8){
      setchangeClassFirst('span-strong');
      setchangeClassSecond('span-strong');
      setchangeClassThird('span-strong');
      setErrorString('strong password');

    }
  }
return (
  <div className="App">
     <div className="App__block">
      <input placeholder='your password' ref={inputRef} onChange={val}/>
      <div className='App__status'>
        <span className={changeClassFirst}></span>
        <span className={changeClassSecond}></span>
        <span className={changeClassThird}></span>
      </div>
       <p>{errorString}</p>
       <div>
         <button>Press</button>
         <button onClick={clear}>Clear</button>
       </div>
     </div>
   </div>
);

}
export default App;

