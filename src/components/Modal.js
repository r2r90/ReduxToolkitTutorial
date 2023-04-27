import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your cart?</h4>
        <div className="btn-container">
          <button onClick={clearHandler} className="btn confirm-btn">
            confirm
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            className="btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
