import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlowers, categories } from "../context/flowerSlice";
const flowerCreate = {
  name: "",
  imageUrl: "",
  variants: [
    {
      type: "",
      price: 0,
      description: "",
    },
  ],
  sku: "",
  description: "",
  categories: [],
};

function AddItemForm({ onClose, initialData }) {
  const dispatch = useDispatch();
  const [flower, setFlower] = useState(
    initialData ? initialData : flowerCreate,
  );

  function toggleCategories(cat) {
    const isSelected = flower.categories.includes(cat);
    if (isSelected) {
      setFlower({
        ...flower,
        categories: flower.categories.filter((c) => c !== cat),
      });
    } else {
      setFlower({ ...flower, categories: [...flower.categories, cat] });
    }
    console.log(flower.categories);
  }

  function handleUpdateBase(field, value) {
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

  function deleteVariant(position) {
    const update = flower.variants.filter(
      (element, index) => index !== position,
    );
    console.log(update);
    setFlower({ ...flower, variants: update });
  }
  // Look into how this works
  const takenTypes = flower.variants.map((v) => v.type).filter((t) => t !== "");

  // async function deleteItem() {
  //   try {
  //     const res = await fetch(
  //       `http://localhost:8080/flower/delete/${flower?.id}`,
  //       {
  //         method: "DELETE",
  //         headers: { "Content-Type": "application/json" },
  //       },
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  async function saveItem() {
    for (const v of flower.variants) {
      if (v.type === "") {
        alert("Please select a type for all variants.");
        return;
      }
    }
    console.log("FLOWER CATEGORY");

    console.log(flower.categories);
    console.log("FLOWER OBJECT");
    console.log(flower);

    const sortedFlower = {
      ...flower,
      variants: [...flower.variants].sort((a, b) => {
        const order = ["Standard", "Deluxe", "Premium", ""];
        return order.indexOf(a.type) - order.indexOf(b.type);
      }),
    };
    console.log("sortedFlower OBJECT");
    console.log(sortedFlower);
    if (flower?.id) {
      try {
        const res = await fetch("http://localhost:8080/flower/addFlower", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sortedFlower),
        });
        if (!res.ok) {
          throw new Error("Failed to save new Flower");
        }
        const data = await res.json();
        console.log("DATA");

        console.log(data);

        dispatch(fetchFlowers());
        onClose();
        alert("Item saved!");
      } catch (err) {
        console.log(err);
      }
    }

    if (!flower?.id) {
      try {
        const res = await fetch("http://localhost:8080/flower/addFlower", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sortedFlower),
        });
        if (!res.ok) {
          throw new Error("Failed to save new Flower");
        }

        const data = await res.json();
        console.log("DATA");
        console.log(data);
        alert("Item saved!");
        dispatch(fetchFlowers());
        onClose();
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="flex fixed z-50 inset-0 items-center justify-center bg-black-75">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-amber-200 rounded-lg p-8 w-full max-w-lg relative"
      >
        <button
          type="button"
          className="absolute top-2 right-2"
          onClick={() => onClose()}
        >
          ❌
        </button>
        <label className="flex items-center gap-1 mb-2">
          Product Name:
          <input
            required
            className="border mt-1 "
            type="text"
            value={flower.name}
            onChange={(e) => {
              handleUpdateBase("name", e.target.value);
            }}
          />
        </label>
        <label className="flex items-center gap-1 mb-2">
          Image URL:
          <input
            required
            className="border mt-1 "
            type="text"
            value={flower.imageUrl}
            onChange={(e) => {
              handleUpdateBase("imageUrl", e.target.value);
            }}
          />
        </label>
        <label className="flex items-center gap-1 mb-2">
          SKU:
          <input
            required
            className="border mt-1 "
            type="text"
            value={flower.sku}
            onChange={(e) => {
              handleUpdateBase("sku", e.target.value);
            }}
          />
        </label>
        <div>
          {categories.map((element) => {
            const isSelected = flower.categories.includes(element);

            return (
              <button
                key={element}
                type="button"
                className={`rounded-full px-3 py-1 ${isSelected ? "bg-amber-500 text-white border-amber-600" : "bg-gray-200 text-gray-700 border-gray-300"}`}
                onClick={(e) => {
                  toggleCategories(element);
                }}
              >
                {element}
              </button>
            );
          })}
        </div>
        {flower.variants.map((variant, index) => (
          <div key={index}>
            {flower.variants.length > 1 && (
              <button
                type="button"
                onClick={() => {
                  deleteVariant(index);
                }}
              >
                ❌
              </button>
            )}
            <label>Type: </label>
            <select
              placeholder="im a placeholder"
              value={variant.type}
              onChange={(e) => {
                handleVariantChange("type", e.target.value, index);
              }}
            >
              <option value="">Select Type</option>
              <option
                value="Standard"
                disabled={
                  takenTypes.includes("Standard") && variant.type !== "Standard"
                }
              >
                Standard
              </option>
              <option
                value="Deluxe"
                disabled={
                  takenTypes.includes("Deluxe") && variant.type !== "Deluxe"
                }
              >
                Deluxe
              </option>
              <option
                value="Premium"
                disabled={
                  takenTypes.includes("Premium") && variant.type !== "Premium"
                }
              >
                Premium
              </option>
            </select>
            <label>Price Add-on: </label>
            <input
              required
              type="number"
              min={0}
              max={9999}
              step={0.01}
              placeholder="im a placeholder"
              value={variant.price}
              onChange={(e) => {
                handleVariantChange("price", e.target.value, index);
              }}
            />
            <label>Description: </label>
            <input
              required
              placeholder="im a placeholder"
              value={variant.description}
              onChange={(e) => {
                handleVariantChange("description", e.target.value, index);
              }}
            />
          </div>
        ))}
        <div className="flex justify-between">
          <button
            type="button"
            className="disabled: bg-red-400"
            onClick={() => addVariant()}
            disabled={flower.variants.length >= 3}
          >
            ADD VARIANT
          </button>
          <button
            type="button"
            className="disabled: bg-red-400"
            onClick={(e) => {
              e.preventDefault();
              saveItem();
            }}
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;
