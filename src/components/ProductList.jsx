function ProductList({ flowerList }) {
  // console.log(flowerList);
  // if (!Array.isArray(flowerList)) return <p>No Products Found</p>;
  return (
    <div className="products-container">
      <ol className="product-list">
        {flowerList.map((item) => {
          return (
            <div key={item.id} className="item-container">
              <li className="item" style={{ listStyle: "none" }}>
                <a href="#">
                  <h1></h1>
                  <img
                    src={item.imageUrl}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </li>
              <div className="item-name-price">
                <span>
                  <p>{item.name}</p>
                </span>
                <span>
                  <p>Price: {item.price}</p>
                </span>
              </div>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
export default ProductList;
