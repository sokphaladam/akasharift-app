import { collection, doc, getDocs, query } from "firebase/firestore"
import { useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { database } from "../store/firebase"
import { useFirebaseMutipleData } from "./useFirebase";

export function useCharacter(){
  const [data, setData] = useState<any>(null);
  
  useFirebaseMutipleData('character').then(res => {
    setData(res)
  });

  return data
}