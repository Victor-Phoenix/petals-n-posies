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
        {displayedFlowers.map((item, index) => {
          return (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md p-4 bg-white"
            >
              <Link to={`/product/${item.id}`}>
                <div className="shrink-0 w-full ">
                  <img
                    src={item.variants?.[0]?.imageUrl}
                    alt={item.name}
                    className="w-96 h-64 object-cover rounded-md hover:transform hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                  </span>
                  <span>
                    <p className="text-gray-600">
                      Price: {item.variants?.[0]?.price ?? "N/A"}
                    </p>
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductList;
