import { moneyFormat } from "../helpers";

const SimgleItem = ({ price, type, id, eliminarItem, editItem }) => {

    const HandleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm(`Borrar la suscripciòn de ${type}`);
        if(answer){
            eliminarItem(id);
        }
    }

    const HandleEdit = e => {
        e.preventDefault();
        editItem(id);
    }
    // ruta de las imagenes
    const urlImage = `/public/img/${type}.png`;
    return (
        <div className="single-item">
            <img src={ urlImage } alt="Services" />
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" className="delete" onClick={HandleDelete} >Borrar</a>
            <a href="" className="edit" onClick={HandleEdit} >Editar</a>
        </div>
    );
}

export default SimgleItem;