import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlowers } from "../context/flowerSlice";
import AddItemForm from "../components/AddItemForm";

function Admin() {
  const { flowerList } = useSelector((state) => state.flower);
  const [showAddItem, setShowAddItem] = useState(false);
  const [editFlower, setEditFlower] = useState(null);
  const dispatch = useDispatch();

  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  function handleClose() {
    setShowAddItem(false);
    setEditFlower(null);
  }

  function handleEditFlower(flower) {
    setEditFlower(flower);

    setShowAddItem(true);
  }

  async function deleteItem(flower) {
    try {
      const res = await fetch(
        `http://localhost:8080/flower/delete/${flower?.id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        },
      );
      dispatch(fetchFlowers());
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // console.log(editFlower);
  });

  return (
    <>
      {showAddItem && (
        <AddItemForm
          className="flex"
          onClose={handleClose}
          initialData={editFlower}
        />
      )}
      <div>
        {!showAddItem && (
          <button onClick={() => setShowAddItem(true)}>Add Item</button>
        )}
        <h1>Admin Page</h1>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="border-b border-gray-600 bg-gray-100 uppercase text-xs tracking-wider text-left">
              <th className="p-3 w-1/5">Name</th>
              <th className="p-3 w-1/6">Image</th>
              <th className="p-3 w-16">Price</th>
              <th className="p-3" w-16>
                Description
              </th>
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
                  <td className="p-3">
                    {flower.variants.map((element) => {
                      return (
                        <img
                          src={element?.imageUrl}
                          className="w-16 h-16 object-cover rounded mb-2 border-gray-800 border-2"
                        />
                      );
                    })}
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
                          <span className="w-16 text-gray-600 shrink-0">
                            ${variant?.price}
                          </span>
                        </div>
                      );
                    })}
                  </td>
                  <td className="p-3 ">
                    {flower?.variants.map((variant, index) => {
                      return (
                        <div
                          key={index}
                          className="flex py-1 border-b last:border-none"
                        >
                          <span className="text-gray-600 wrap-break-word ">
                            {variant?.description}
                          </span>
                        </div>
                      );
                    })}
                  </td>
                  <td className="align-middle">
                    <button
                      onClick={() => {
                        handleEditFlower(flower);
                      }}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="text-red-500 disabled: bg-red-400"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteItem(flower);
                      }}
                    >
                      DELETE
                    </button>
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
