import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
/**
 * Queries a Firestore collection for a single document and returns its ID and data.
 *
 * @param {object} db The Firestore database instance.
 * @param {string} collectionPath The path to the collection (e.g., 'users').
 * @param {string} field The field to query on (e.g., 'email').
 * @param {string} value The value to match (e.g., 'john.doe@example.com').
 * @returns {Promise<{ id: string, data: object } | null>} The document ID and data, or null if no document is found.
 */

export default async function getSingleDocumentByQuery(x, y, docid) {
    console.log(docid)
    if (!docid) { return 'null'; }

    try {
        
        const collectionRef = await collection(db, 'products');

        const q = await query(collectionRef, where(x, y, docid));
        
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) { return null; }

        const doc = await querySnapshot.docs[0];

        return  {  id: doc.id,  data: doc.data() };


    } catch (error) { return 'error : ' + error; }
};