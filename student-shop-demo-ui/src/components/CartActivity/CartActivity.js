import "./CartActivity.css";

export default function CartActivity({ productRows, onAdd, onRemove }) {
    const itemsPrice = productRows.reduce( (a, c) => a + c.price * c.qty, 0 )
    const taxPrice = itemsPrice * 0.14
    const shippingPrice = itemsPrice > 300 ? 0 : 12
    const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    <div className="CartActivity">
      <div className="table">
        {productRows.length !== 0 && (
          <div className="table-header table-row">
            <span className="col x4">Name</span>
            <span className="col x2"></span>
            <span className="col x4">Cost</span>
          </div>
        )}
        {productRows.map((product) => (
          <div className="table-row" key={product.id}>
            <span className="col x4">{product.name}</span>
            <span className="modify-buttons col x2">
              <button onClick={() => onAdd(product)} className="addBtn">
                +
              </button>
              <button onClick={() => onRemove(product)} className="removeBtn">
                -
              </button>
            </span>
            <span className="col x4">
              {product.qty} x ${product.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {productRows.length !== 0 && (
          <>
            <hr></hr>
            <div className="table">
            <div className="table-row-pricing">
                <span className="col x4">Items Price</span>
                <span className="col x2 text-right">${itemsPrice.toFixed(2)}</span>
            </div>
            <div className="table-row-pricing">
                <span className="col x4">Tax Price</span>
                <span className="col x2 text-right">${taxPrice.toFixed(2)}</span>
            </div>
            <div className="table-row-pricing">
                <span className="col x4">Shipping Price</span>
                <span className="col x2 text-right">${shippingPrice.toFixed(2)}</span>
            </div>
            <div className="table-row-pricing">
                <span className="col x4"><strong>Total Price</strong></span>
                <span className="col x2 text-right"><strong>${totalPrice.toFixed(2)}</strong></span>
            </div>
            </div>
          </>
      )}
    </div>
  );
}
