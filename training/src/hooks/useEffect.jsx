import { useEffect, useState } from "react";

function UseEffect(){
    const[click,setClick]=useState(false);
    const[data,setData]=useState();
    // useEffect(()=>{
    //         console.log("useEffect");
    // },[click])
    useEffect(()=>{
            fetch("https://dummyjson.com/products").then(data=>data.json()).then(data=>setData(data.products))
    },[])
    return(
        <>
        {click?<h1>Hello</h1>:""}
        <table style={{width:"100%",textAlign:"center"}} border={1}>
           <thead>
           <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>DiscountPercentage</th>
                    <th>Rating</th>
                    <th>Stock</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Thumbnail</th>
                    <th>Images</th>
            </tr>
           </thead>
           <tbody>
           {
            data?.map((val,index)=>(    
                <tr key={`tr-${index}`}>
                <td>{index+1}</td>
                <td>{val?.title}</td>
                <td>{val?.description}</td>
                <td>{val?.price}</td>
                <td>{val?.discountPercentage}</td>
                <td>{val?.rating}</td>
                <td>{val?.stock}</td>
                <td>{val?.brand}</td>
                <td>{val?.category}</td>
                <td>{val?.thumbnail}</td>
                <td>{val?.images}</td>
            </tr>
            ))
            }
           </tbody>
        </table>
        <button onClick={()=>setClick(!click)}>Click</button>
        </>
    )
}

export default UseEffect;
