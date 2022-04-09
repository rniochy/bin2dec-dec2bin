import React, {useState} from 'react';

import  './calculatorbintodec.css'

const matchBinaryRegex = new RegExp("^(0|1)(0|1)+(0|1)$");

const Calculatorbintodec = () => {
    const [valueToConvert, setvalueToConvert] = useState('');
    const [typeInput, setTypeInput] = useState();
    const [result_binary, setResult_binary] = useState('');
    const [result_decimal, setResult_decimal] = useState('');

    const reverseString = (value) => {
        let reversedString = "";
        for(let i=value.length-1; i >= 0 ; i--){
            reversedString += value.charAt(i);
        }  return reversedString;
     } 

     /** Functions to convert */
    const convertToBinaryFunction = (value) => {
        const result = document.getElementsByName('binary_answer');
        let sumValue = "";
        value = parseInt(value);
        
        while(value >= 2){
           sumValue += value % 2;
           value = Math.floor(value / 2);  

        }
             sumValue+= value;
             setResult_decimal(reverseString(sumValue));
}
    
    const convertToDecimalFunction = (value) =>{
        let  reversedString  =  reverseString(value);
        let cont = value.length-1;
        let sumValue =0;
        while(cont >= 0){
            sumValue += (parseInt(reversedString.charAt(cont))) * Math.pow(2, cont--);
        }
            setResult_binary(sumValue);
    }
     /** Handler Focus */
     const onFocusHandlerBinary = () =>{
        setResult_binary('');
     }
     /** Handlers */
     const onFocusHandlerDecimal = () =>{
        setResult_decimal('');
     }
     /** Handler to get user value */
    const onChangeHandler = (e) => {
        const {value, name} = e.target;
        setvalueToConvert(value);
        setTypeInput(name);
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        if(typeInput === 'binary_value'){
            if(valueToConvert.length < 8 || !matchBinaryRegex.test(valueToConvert)){
                alert("The numbers must be greater then 8 and only numbers 0 and 1");
             } else  {
                 convertToDecimalFunction(valueToConvert);
             }
                
            }  else {
                convertToBinaryFunction(valueToConvert);
        }   
    }
    
    return (
        <div className='container_conversor'>
                 <header className='header_conversor'>
                        <h1>Conversor</h1>
                        <ul>
                            <li><h5><span>*</span>  Binary number to Decimal number </h5></li>
                            <li><h5><span>*</span>  Decimal number to Binary number  </h5></li>
                        </ul>
                 </header>
                <div>
                    <section className='sectio_conatiner_conversor'>
                        <article>
                             <label>Binary to Decimal</label>
                             <input type="text" onChange={onChangeHandler} onFocus={onFocusHandlerBinary} name='binary_value' maxLength="8" placeholder='Type the  binary number'/>
                             <input type="text" name='binary_answer' readOnly value={result_binary} />
                             <input type="submit" onClick={onClickHandler} value="convert"/>
                        </article>

                        <article>
                             <label>Decimal to Binary</label>
                             <input type="text" onChange={onChangeHandler} onFocus={onFocusHandlerDecimal} name='decimal_value' maxLength="8" placeholder='Type the  decimal number'/>
                             <input type="text" name='decimal_answer'  value={result_decimal} readOnly/>
                             <input type="submit" onClick={onClickHandler} value={"convert"}/>
                        </article>

                    </section>
                </div>
                 <footer className='footer_conversor'>
                     <small>Rodrigo Lima - rniochy &copy;</small>

                 </footer>
        </div>
    );
}
export default Calculatorbintodec;
