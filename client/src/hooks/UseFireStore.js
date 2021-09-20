import { useState, useEffect } from "react";
import { projectFirestore } from "../Firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    
    
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        // displays images my most recently uploaded
        .orderBy('desc')
        // fires a callback function every time a change occurs in the collection 
        .onSnapshot((snap) => {
            // create an array of documents then return
            let documents = [];
            snap.forEach(doc => {
                doc.push({...doc.data(), id: doc.id})
            });
            setDocs(documents)
        })
        // unsubscribe form the collection when we no longer use it
        return () => unsub();
    }, [collection])
    return {docs}
}