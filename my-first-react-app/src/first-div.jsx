export function FirstDiv(props){
    console.log(props.title);
    return(
    <h1 style={{backgroundColor:"skyblue", textAlign:"center", padding:"20px", margin:"0px"}}>{props.title || "Header (fixed)"}</h1>
    )
}

// export default FirstDiv;