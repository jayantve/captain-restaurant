
import { app } from "@/firebase/config";
import { collection, query, getDocs, getFirestore, Firestore } from "firebase/firestore";

const db = getFirestore(app)

export default async function FindProducts() {

    // const collectionRef = collection(db,'product')

    // const q = query(collectionRef);

    const querySnapshot =  await getDocs(collection(db, "product"));

    let data = querySnapshot.forEach((doc) => { data.append(doc.data()) });

    return data

}
