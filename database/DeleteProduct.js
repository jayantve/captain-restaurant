import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import getSingleDocumentByQuery from './GetProductById';

/**
 * Deletes a document from a specified Firestore collection.
 *
 * @param {object} db The Firestore database instance.
 * @param {string} collectionPath The path to the collection (e.g., 'users' or 'products').
 * @param {string} docId The ID of the document to delete.
 */
export default async function deleteFirestoreDocument(docId) {
    if (!docId) { return; }
    let docid = docId  
    try {
        
        const id = await getSingleDocumentByQuery('id' ,'==' ,docid)

        if (id) {

            await deleteDoc(doc(db, "products", id.id));

            await console.log(`Document with ID: ${docId} successfully deleted from collection: products`);

            alert('Document deleted!');
        }
        else{ alert("Sorry! , We are not able to delete Document")  }

    } catch (error) {
        alert('Failed to delete document : ' + error)
    }
};
