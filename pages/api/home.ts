import { database } from "../../src/store/firebase";
import { collection, getDocs } from "firebase/firestore";

const dbInstance = collection(database, "items");

export async function getHomeData() {
  const querySnapshot = await getDocs(dbInstance);
  return querySnapshot.forEach((doc) => {
    console.log(doc.data);
    return {
      ...doc,
    };
  });
}
