import React from 'react';
import "./ProductList.css"
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const {onToggleButton} = useTelegram()

const ProductList = () => {
    return (
        <div>
            ProductList
            <Button onClick={onToggleButton}>Toggle</Button>
        </div>
    );
}


export default ProductList;