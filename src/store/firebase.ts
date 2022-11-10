import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMVZkBPybBM96fqeb5rlCOQceN1tBreuQ",
  authDomain: "akasharift-860aa.firebaseapp.com",
  projectId: "akasharift-860aa",
  storageBucket: "akasharift-860aa.appspot.com",
  messagingSenderId: "691171534430",
  appId: "1:691171534430:web:2e304ca451b91374dc36cf",
  measurementId: "G-Q5GF81C8J1",
  databaseURL: "https://akasharift-860aa.firebaseio.com",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const database = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);

export async function UploadFileToFirebase(file: File) {
  const upload = uploadBytesResumable(
    ref(storage, "akasha_rift/" + file.name),
    file
  );

  upload.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {},
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(upload.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
    }
  );
}
