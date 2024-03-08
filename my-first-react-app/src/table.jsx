import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function UseEffect(){
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("https://dummyjson.com/products").then(response => response.json()).then(data => setData(data.products))}, []);

    const handleTdClick = (index) => {
        const clickedData = data[index];
        const details = `
            Title: ${clickedData.title}
            Description: ${clickedData.description}
            Price: ${clickedData.price}
            Discount Percentage: ${clickedData.discountPercentage}
            Rating: ${clickedData.rating}
            Stock: ${clickedData.stock}
            Brand: ${clickedData.brand}
            Category: ${clickedData.category}
        `;
        alert(index + 1);
        navigate(`/${index + 1}`);

       const confirmed = window.confirm(`Details for index ${index + 1}:\n\n${details}`);
        if (confirmed) {} 
    };

    return (
        <>
            <table style={{ textAlign: "center" }} border={1}>
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
                    {data?.map((val, index) => (
                        <tr key={`tr-${index}`} onClick={() => handleTdClick(index)}>
                            <td>{index + 1}</td>
                            <td>{val?.title}</td>
                            <td>{val?.description}</td>
                            <td>{val?.price}</td>
                            <td>{val?.discountPercentage}</td>
                            <td>{val?.rating}</td>
                            <td>{val?.stock}</td>
                            <td>{val?.brand}</td>
                            <td>{val?.category}</td>
                            <td><img src={val?.thumbnail} style={{ width: "50px", height: "50px" }} alt={`thumbnail-${index}`} /></td>
                            <td>
                                {val?.images.map((img, imageIndex) => (
                                    <img
                                        key={`image-${imageIndex}`}
                                        src={img}
                                        style={{ width: "50px", height: "50px" }}
                                        alt={`image-${imageIndex}`} 
                                    />
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UseEffect;