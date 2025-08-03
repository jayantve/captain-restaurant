import { ref, set } from "firebase/database";
import { db } from "@/firebase/config";
import { addDoc, collection , doc, setDoc } from "firebase/firestore";

export default async function writeProductData(productId, title, description, price, category) {

    addDoc(collection(db,('products')), {
        id: productId,
        name: title,
        description: description,
        price: price,
        category: category,
    });
}