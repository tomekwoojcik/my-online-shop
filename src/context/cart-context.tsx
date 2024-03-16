import { createContext } from "vm";

interface CartContextInterface {

}
  export interface PropsContextModel{
    children: JSX.Element | JSX.Element[]
}
export const CartContext = createContext({} as CartContextInterface);


export const CartProvider = ({ children } : PropsContextModel) => {
    
    

    return (
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}