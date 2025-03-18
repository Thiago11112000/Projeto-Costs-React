import style from './Select.module.css';

function Select({ text, name, options, handleOnchange, value }) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnchange} value={value}>
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default Select;
