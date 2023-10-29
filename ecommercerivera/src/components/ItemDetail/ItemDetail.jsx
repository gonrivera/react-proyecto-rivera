import ItemCount from "../ItemCount/Itemcount"

const ItemDetail = ({name,img,price,stock,description}) => {
    return(
        <div >
        <p>{name}</p>
        <p><img src={img}/></p>
        <p>Descripcion: {description}</p>
        <p>${price}</p>
        <ItemCount stock={stock}/>
        </div>
    )
}
export default ItemDetail