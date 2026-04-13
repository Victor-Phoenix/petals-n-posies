// function reducer(state, action) {
//   switch (action.type) {
//     case "loading":
//       return { ...state, isLoading: true };
//     case "flower/loaded":
//       return { ...state, flowerList: action.payload, isLoading: false };
//     case "flower/selected":
//       return { ...state, currentFlower: action.payload, isLoading: false };
//     case "stopLoading":
//       return { ...state, isLoading: false };
//     case "rejected":
//       return { ...state, isLoading: false, error: action.payload };
//     case "category/select":
//       return { ...state, selectedCategory: action.payload };
//     default:
//       throw new Error("unknown action");
//   }
// }
// const ProductContext = createContext();

// function ProductProvider({ children }) {
//   const [{ flowerList, isLoading, selectedCategory, currentFlower }, dispatch] =
//     useReducer(reducer, initialState);

//   useEffect(function () {
//     // console.log("Fetching");
//     async function fetchFlowers() {
//       try {
//         dispatch({ type: "loading" });
//         const res = await fetch(`${BASE_URL}/flowerList`);
//         const data = await res.json();
//         // console.log(data);
//         dispatch({ type: "flower/loaded", payload: data });
//       } catch (err) {
//         // console.log("Error Loading Data");
//       } finally {
//         dispatch({ type: "stopLoading" });
//       }
//     }
//     fetchFlowers();
//   }, []);

//   function handleFilter(category) {
//     dispatch({ type: "category/select", payload: category });
//   }

//   const filteredFlower =
//     selectedCategory === "all"
//       ? flowerList
//       : flowerList.filter((flower) =>
//           flower?.categories.some(
//             (cat) => cat.toLowerCase() === selectedCategory.toLowerCase(),
//           ),
//         );

//   async function getFlower(id) {
//     console.log("Entered getFlower function");
//     if (Number(id) === currentFlower.id) {
//       return;
//     }
//     dispatch({ type: "loading" });
//     try {
//       const res = await fetch(`${BASE_URL}/flowerList/${id}`);
//       const data = await res.json();
//       console.log(data);
//       dispatch({ type: "flower/selected", payload: data });
//     } catch {
//       dispatch({
//         type: "rejected",
//         payload: `Error fetching flower with id: ${id}`,
//       });
//     }
//   }

//   return (
//     <ProductContext.Provider
//       value={{
//         flowerList: filteredFlower,
//         isLoading,
//         selectedCategory,
//         currentFlower,
//         getFlower,
//         onFilter: handleFilter,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// }

// function useProduct() {
//   const context = useContext(ProductContext);
//   if (context === undefined) {
//     throw new Error("useProduct must be used within a ProductProvider");
//   }
//   return context;
// }
// // eslint-disable-next-line react-refresh/only-export-components
// export { ProductProvider, useProduct };
