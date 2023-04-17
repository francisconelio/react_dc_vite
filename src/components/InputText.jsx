export function InputText(props) {
    console.log(props)
    return (
    <input type={props.type} name={props.name} id={props.nome} placeholder={props.placeholder} />
    );
}

//export default InputText