import { Link } from "react-router-dom"

const Item = ({id,name,img,price}) => {
    return(
        <div >
        <p>{name}</p>
        <p><img src={img}/></p>
        <p>${price}</p>
        <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}
export default Item

