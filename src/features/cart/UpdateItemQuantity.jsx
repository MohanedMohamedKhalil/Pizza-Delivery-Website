import { useDispatch } from "react-redux";
import Button from "../../ui-components/Button";
import { decreaseQuantity, increaseQuantity } from "../../store/cartSlice";

function UpdateItemQuantity({ pizzaId, itemQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      {itemQuantity && (
        <span className="text-sm font-medium">{itemQuantity}</span>
      )}
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
