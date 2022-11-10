import { collection, getDocs } from "firebase/firestore";
import { database } from "../store/firebase";

export async function useFirebaseMutipleData(path: string){
  const query = await getDocs(collection(database, path));

  if(!query.empty) {
    return {
      status: true,
      data: query
    };
  }
  else {
    return {
      status: false,
      data: null
    };
  }
}