import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 

export const fetchProducts = async () => {
    const productsCollection = collection(db, "products"); 
    try {
        const snapshot = await getDocs(productsCollection);
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return products; 
    } catch (error) {
        console.error("Error fetching products: ", error);
        return null; 
    }
};
