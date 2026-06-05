import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ProductList() {
  // if (!Array.isArray(flowerList)) return <p>No Products Found</p>;
  const { flowerList, selectedCategory, isLoading } = useSelector(
    (state) => state.flower,
  );

  if (isLoading) return <p className="text-center mt-8">Loading products...</p>;
  const displayedFlowers =
    selectedCategory === "all"
      ? flowerList
      : flowerList.filter((flower) =>
          flower.categories.includes(selectedCategory),
        );
  return (
    <div className="w-full mx-auto px-4 py-8  ">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
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
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md hover:transform hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span>
                    <h3 className="text-lg font-medium">
                      {item.name}{" "}
                      <p className="text-gray-600">
                        $ {item.variants?.[0]?.price ?? "N/A"}
                      </p>
                    </h3>
                  </span>
                  <span></span>
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
