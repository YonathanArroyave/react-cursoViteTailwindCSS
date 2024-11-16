import { Children, createContext } from 'react';

const ShippingCartContext = createContext()

export const ShippingCartProvider = ({Children}) =>{
    return(
        <ShippingCartContext.Provider>
            {Children}
        </ShippingCartContext.Provider>
    )
}