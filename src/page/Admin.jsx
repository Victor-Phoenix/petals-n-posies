import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlowers } from "../context/flowerSlice";

const flowerCreate = {
  name: "BUBBAS",
  price: 0,
  imageUrl: "",
  variants: [
    {
      type: "",
      priceAdd: 0,
      description: "",
    },
  ],
  SKU: "",
  description: "",
  categories: [],
};

// TIP: Would be helpful to create a empty flower Object to use as a template
function AddItemForm() {
  const [flower, setFlower] = useState(flowerCreate);
  function handleUpdateBase(field, value) {
    // console.log(flowerCreate.name);
    setFlower({ ...flower, [field]: value });
  }
  function handleVariantChange(field, value, index) {
    const updatedVariant = flower.variants.map((variant, i) =>
      i === index ? { ...variant, [field]: value } : variant,
    );

    setFlower({ ...flower, variants: updatedVariant });
  }

  function addVariant() {
    const newVariant = {
      type: "",
      description: "",
      price: 0,
    };
    setFlower({ ...flower, variants: [...flower.variants, newVariant] });
  }
  // To add another/return a input field, think about how React needs to re-render to update the view. Maybe try adding another variant to flower
  const takenTypes = flower.variants.map((v) => v.type);
  return (
    <div className="flex fixed z-50 inset-0 items-center justify-center bg-black-75">
      <div className="bg-blue-900 rounded-lg p-8 w-full max-w-lg">
        <input
          className="border"
          type="text"
          value={flower.name}
          onChange={(e) => {
            handleUpdateBase("name", e.target.value);
          }}
        />
        <input
          className="border"
          type="number"
          value={flower.price}
          onChange={(e) => {
            handleUpdateBase("price", e.target.value);
          }}
        />
        <input
          className="border"
          type="text"
          value={flower.imageUrl}
          onChange={(e) => {
            handleUpdateBase("imageUrl", e.target.value);
          }}
        />
        <input
          className="border"
          type="text"
          value={flower.description}
          onChange={(e) => {
            handleUpdateBase("description", e.target.value);
          }}
        />

        {flower.variants.map((variant, index) => (
          <div>
            <label>Type: </label>
            <select
              placeholder="im a placeholder"
              value={variant.type}
              onChange={(e) => {
                handleVariantChange("type", e.target.value, index);
              }}
            >
              <option
                value="Standard"
                disabled={
                  variant.type !== "Standard" && takenTypes.includes("Standard")
                }
              >
                Standard
              </option>
              <option
                value="Deluxe"
                disabled={
                  variant.type !== "Deluxe" && takenTypes.includes("Deluxe")
                }
              >
                Delux
              </option>
              <option
                value="Premium"
                disabled={
                  variant.type !== "Premium" && takenTypes.includes("Premium")
                }
              >
                Premium
              </option>
            </select>
            <label>Price Add-on: </label>
            <input
              placeholder="im a placeholder"
              value={variant.priceAdd}
              onChange={(e) => {
                handleVariantChange("priceAdd", e.target.value, index);
              }}
            />
            <label>Description: </label>
            <input
              placeholder="im a placeholder"
              value={variant.description}
              onChange={(e) => {
                handleVariantChange("description", e.target.value, index);
              }}
            />
          </div>
        ))}
        <button
          className="disabled: bg-red-400"
          onClick={() => addVariant()}
          disabled={flower.variants.length >= 3}
        >
          ADD VARIANT
        </button>
      </div>
    </div>
  );
}
function Admin() {
  const { flowerList } = useSelector((state) => state.flower);
  const [showAddItem, setShowAddItem] = useState(false);
  const dispatch = useDispatch();

  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);
  // console.log(flowerList);

  return (
    <>
      {showAddItem && <AddItemForm className="flex" />}
      <div>
        {!showAddItem && (
          <button onClick={() => setShowAddItem(true)}>Add Item</button>
        )}
        <h1>Admin Page</h1>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="border-b border-gray-600 bg-gray-100 uppercase text-xs tracking-wider text-left">
              <th className="p-3 w-1/5">Name</th>
              <th className="p-3 w-1/12">Price</th>
              <th className="p-3 w-1/6">Image Url</th>
              <th className="p-3"> Variants</th>
            </tr>
          </thead>

          <tbody>
            {flowerList.map((flower) => {
              return (
                <tr
                  className=" border-t border-gray-200 align-top"
                  key={flower.id}
                >
                  <td className="p-3">{flower.name}</td>
                  <td className="p-3">{flower.price}</td>
                  <td className="p-3">
                    <img
                      src={flower.imageUrl}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>

                  <td className="p-3 ">
                    {flower?.variants.map((variant, index) => {
                      return (
                        <div
                          key={index}
                          className="flex py-1 border-b last:border-none"
                        >
                          <span className="w-20 font-semibold shrink-0">
                            {variant?.type}
                          </span>

                          <span className="w-16 text-gray-600 shrink-0">
                            {variant?.priceAdd}
                          </span>
                          <span className="text-gray-600 wrap-break-word ">
                            {variant?.description}
                          </span>
                        </div>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
//   return (
//     <div className="p-6">
//       {showAddItem && <AddItemForm />}
//       {!showAddItem && (
//         <button
//           className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//           onClick={() => setShowAddItem(true)}
//         >
//           + Add Item
//         </button>
//       )}
//       <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
//       <table className="w-full border border-gray-200 rounded text-sm">
//         <thead>
//           <tr className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
//             <th className="p-3 text-left w-1/6">Name</th>
//             <th className="p-3 text-left w-1/12">Price</th>
//             <th className="p-3 text-left w-1/6">Image</th>
//             <th className="p-3 text-left w-2/5">Variants</th>
//           </tr>
//         </thead>
//         <tbody>
//           {flowerList.map((flower) => (
//             <tr
//               key={flower.id}
//               className="border-t border-gray-200 hover:bg-gray-50"
//             >
//               <td className="p-3 font-medium">{flower.name}</td>
//               <td className="p-3 text-gray-600">${flower.price}</td>
//               <td className="p-3">
//                 <img
//                   src={flower.imageUrl}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//               </td>
//               <td className="p-3 align-top w-2/5">
//                 {flower?.variants.map((variant, index) => (
//                   <div
//                     key={index}
//                     className="flex gap-4 py-1 border-b last:border-none text-sm"
//                   >
//                     <span className="w-20 font-semibold shrink-0 text-gray-800">
//                       {variant?.type}
//                     </span>
//                     <span className="w-16 shrink-0 text-gray-500">
//                       +${variant?.priceAdd}
//                     </span>
//                     <span className="text-gray-600 break-words max-w-[300px]">
//                       {variant?.description}
//                     </span>
//                   </div>
//                 ))}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
