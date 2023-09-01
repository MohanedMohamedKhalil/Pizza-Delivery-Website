import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "../../store/cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
