import { useState } from "react";
import { useSelector } from "react-redux";
const flowerCreate = {
  name: "BUBBAS",
  imageUrl: "",
  variants: [
    {
      type: "",
      price: 0,
      description: "",
    },
  ],
  SKU: "",
  description: "",
  categories: [],
};

function AddItemForm() {
  const [flower, setFlower] = useState(flowerCreate);
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
  // To add another/return a input field, think about how React needs to re-render to update the view. Maybe try adding another variant to flower
  const takenTypes = flower.variants.map((v) => v.type);

  async function saveItem() {
    try {
      const res = await fetch("http://localhost:8080/flower/addFlower", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flower),
      });
      if (!res.ok) {
        throw new Error("Failed to save new Flower");
      }
      const data = await res.json();
      console.log("Saved:", data);
      alert("Item saved!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex fixed z-50 inset-0 items-center justify-center bg-black-75">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-amber-200 rounded-lg p-8 w-full max-w-lg"
      >
        <label className="flex items-center gap-1 mb-2">
          Product Name:
          <input
            className="border mt-1 "
            type="text"
            value={flower.name}
            onChange={(e) => {
              handleUpdateBase("name", e.target.value);
            }}
          />
        </label>
        {/* <input
          className="border"
          type="number"
          value={flower.price}
          onChange={(e) => {
            handleUpdateBase("price", e.target.value);
          }}
        /> */}

        <label className="flex items-center gap-1 mb-2">
          Image URL:
          <input
            className="border mt-1 "
            type="text"
            value={flower.imageUrl}
            onChange={(e) => {
              handleUpdateBase("imageUrl", e.target.value);
            }}
          />
        </label>
        <label className="flex items-center gap-1 mb-2">
          Description:
          <input
            className="border mt-1 "
            type="text"
            value={flower.description}
            onChange={(e) => {
              handleUpdateBase("description", e.target.value);
            }}
          />
        </label>

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
                Delux
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
              placeholder="im a placeholder"
              value={variant.price}
              onChange={(e) => {
                handleVariantChange("price", e.target.value, index);
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
        <div className="flex justify-between">
          <button
            className="disabled: bg-red-400"
            onClick={() => addVariant()}
            disabled={flower.variants.length >= 3}
          >
            ADD VARIANT
          </button>
          <button
            className="disabled: bg-red-400"
            onClick={(e) => {
              e.preventDefault();
              saveItem();
            }}
          >
            Save Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;
