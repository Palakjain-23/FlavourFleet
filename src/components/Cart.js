import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handelClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
            {cartItems.length === 0 ? (
                    <h1>Your Cart is empty. Add Items</h1>
                ) : (
                    <div>
                        <button
                            className="p-2 m-2 bg-black text-slate-50 rounded-lg"
                            onClick={handelClearCart}
                        >
                            Clear Cart
                        </button>
                        <ItemList items={cartItems} />
                    </div>
                )}
            </div>
        </div>
    )
}
export default Cart;