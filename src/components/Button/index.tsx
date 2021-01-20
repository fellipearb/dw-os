import Button from './index.style';

function Input(props: any) {
    const { id, value, onClick, children } = props;

    return (
        <>
            <Button 
                id={id}
                value={value}
                onClick={onClick}
            >{children}</Button>
        </>
    );
}

export default Input;