import { ref, set } from "firebase/database";
import { db } from "@/firebase/config";

export default function writeProductData(productId, title, description, price, category) {
    set(ref(db, 'products/' + productId), {
        id: productId,
        name: title,
        description: description,
        price: price,
        category: category,
    });
}