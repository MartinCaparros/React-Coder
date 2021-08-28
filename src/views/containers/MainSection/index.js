import React from 'react';
import { Container} from './styled';
import { ItemCount } from 'views/components';

const MainSection = () => {

    const item = new Promise ((res) => {
        setTimeout(()=>{

            res({ id:1, title:"Zapatilla Adidas", description:"Running shoe for professional", price:16500, pictureUrl:"" })
        }, 2000)
    })
    const itemList = new Promise ((res) => {
        setTimeout(()=>{
            res([
                {id:2, title:"Zapatilla Nike", description:"Running shoe for professional", price:16500, pictureUrl:"" },
                {id:3, title:"Zapatilla UnderArmor", description:"Running shoe for professional", price:16500, pictureUrl:"" },
                {id:4, title:"Zapatilla Adidas", description:"Running shoe for professional", price:16500, pictureUrl:"" },
                {id:5, title:"Zapatilla Puma", description:"Running shoe for professional", price:16500, pictureUrl:"" }])
        }, 2000)

    })
    return (
        <Container>
            <ItemCount
                item={item}
            />
            <button
                onClick={item}
            >
                Mostrar Item
            </button>
            <button
                onClick={itemList}
            >
                Mostrar Lista
            </button>
        </Container>
    )
}

export default MainSection