// import { collection, query, where, getDocs } from "firebase/firestore";
import { app } from "@/firebase/config";
import { collection, query, getDocs, getFirestore, Firestore } from "firebase/firestore";

const firestore = getFirestore(app)

export default async function FindProducts(params) {

    // const collectionRef = collection(db,'product')

    // const q = query(collectionRef);

    const querySnapshot =  await getDocs(collection(firestore, "product"));

    let data;
    querySnapshot.forEach((doc) => {
        data.append(doc.data())
    });

    return data

}
