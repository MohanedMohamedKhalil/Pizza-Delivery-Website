import { useDispatch } from "react-redux";
import Button from "../../ui-components/Button";
import { deleteItem } from "../../store/cartSlice";
import deleteSound from "../../assets/deleteSound.wav";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDelete() {
    new Audio(deleteSound).play();
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteItem;
