export default function AddToCartButton({
  hasSizesOrExtras, onClick, basePrice, image
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <button
        type="button"
          src={'./pizza-image-png.png'}>
          <div onClick={onClick}>
            Add to cart ₴{basePrice}
          </div>
        </button>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-red-600 text-white rounded-full px-8 py-2"
    >
      <span>Add to cart (from ₴{basePrice})</span>
    </button>
  );
}