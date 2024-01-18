import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { firestore } from "../config";

export const getData = async () => {
  const allItems = await getDocs(collection(firestore, "test"));
  return allItems.docs.map((doc) => console.log(doc.data()));
};

export const postData = async (data) => {
  console.log(data);
  return await setDoc(doc(firestore, "test", `${Date.now()}`), data, { merge: true });
};
