/************** TYLER'S CODE START */

// hooks are reusable functions that you can reuse in your components 
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { useState, useEffect} from "react";
import {projectStorage} from '../Firebase/config'


const useStorage = (file)=>{

    const[progress, setProgress ] = useState(0);
    const[error, setError] = useState(null);
    // img url we get back after the img has been uploaded 
    const[url, setUrl] = useState(null);

// this function runs every time the file is changed
    useEffect(()=>{
// refernces
const storageRef = ref(projectStorage,file.name);
const uploadTask = uploadBytesResumable(storageRef, file)
uploadTask.on('state_changed', (snap)=>{
    let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    setProgress(percentage);
}, (err)=> {
    setError(err);
}, async() => { 
    const url = await getDownloadURL(uploadTask.snapshot.ref);
    // set url after img loads
    setUrl(url);
})
    },[file])
    
    return{progress, url, error}


}

export default useStorage;

/************** TYLER'S CODE END */