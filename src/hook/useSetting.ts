import { doc, getDoc } from "firebase/firestore";
import { database } from "../store/firebase";
import { useDocument } from "react-firebase-hooks/firestore";

export function useSetting() {
  const ref = doc(database, "setting", "sQBZqxpwn45QrmH5tzhJ");
  const [value, loading, error] = useDocument(ref, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return {
    value: loading ? null : value?.data(),
    loading,
    error,
  };
}
