import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ProductList() {
  // if (!Array.isArray(flowerList)) return <p>No Products Found</p>;
  const { flowerList, selectedCategory } = useSelector((state) => state.flower);
  const displayedFlowers =
    selectedCategory === "all"
      ? flowerList
      : flowerList.filter((flower) =>
          flower.categories.includes(selectedCategory),
        );
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div className="grid grid-cols-4 gap-6 px-4">
        {displayedFlowers.map((item) => {
          return (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow-sm p-4"
            >
              <Link to={`/product/${item.id}`}>
                <div className="shrink-0 w-full ">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className=" object-cover rounded-md"
                  />
                </div>
              </Link>
              <div className="mt-4">
                <span>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                </span>
                <span>
                  <p className="text-gray-600">
                    Price: {item.variants[0].price}
                  </p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductList;
