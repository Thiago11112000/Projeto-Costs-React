import style from './Select.module.css';

function Select({ text, name, options, handleOnchange, value}) {
 return (  
     <div className={style.form_control}>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name}>
        <option> Selecione uma opção</option>
        </select>
    </div>
 )
}
export default Select