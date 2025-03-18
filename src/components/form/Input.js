import style from './Input.module.css';

function Input({type, text, name, placeholder, handleOnchange, value}) {
 return (  
     <div className={style.form_control}>
        <label htmlFor={name}>{text}:</label>
        <input 
        type={type}
         name={name}
          placeholder={placeholder}
           onChange={handleOnchange}
            value={value}
             />
    </div>
 )
}
export default Input