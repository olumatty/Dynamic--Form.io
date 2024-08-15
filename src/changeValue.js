const Change  = ({setUsername}) => {

    const handleClick = () =>{
        setUsername("Yogo")

    }
    return (  
        <button onClick={handleClick}>Click Me</button>
    );
}
 
export default Change ;