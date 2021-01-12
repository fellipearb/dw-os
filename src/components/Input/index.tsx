import InputStyle from './index.style';

function Input(props: any) {
    const { id, name, type, value, onChange, placeholder, label } = props;

    return (
        <>
            { label ? <label htmlFor={id}>{label}</label> : '' }
            <InputStyle 
                id={id} 
                name={name} 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
}

export default Input;