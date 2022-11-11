import { info } from "console";
import { addDoc, collection, onSnapshot, doc, deleteDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RedirectRoutes } from "../../common/routes/AppRoutes";
import db from "../../Firebase";

// import { getCharacter, postPostToPlaceholder } from "../../../api/apiCalls";

// export const getCharacter = () =>
//     instance.get(Endpoints.CHARACTER)

// export const postPostToPlaceholder = (data) =>
//     axios.post('https://jsonplaceholder.typicode.com/posts', data)

interface User {
  age: string;
  agree: boolean;
  firstname: string;
  lastname: string;
  id: string;
}

interface InitialData {
  firstname: string;
  lastname: string;
  age: string;
  agree: boolean;
}
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
}

const Forms = () => {
  const collectionRef = collection(db, "users")
  const [editId, setEditId] = useState<string>("")
  const [formValues, setFormValues] = useState<InitialData>({
    firstname: "",
    lastname: "",
    age: "",
    agree: false,
  });
  const [editFormValues, setEditFormValues] = useState<InitialData>({
    firstname: "",
    lastname: "",
    age: "",
    agree: false,
  });
  // const [data, setData] = useState<{info: Info, results: Character[]}>();
  const [users, setUsers] = useState<User[]>([]);
  const handleInputChange = (key: string, value: string) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };
  const addInfo = async () => {
    try {
      const docRef = await addDoc(collectionRef, formValues);
      console.log(docRef);
    } catch (e) {
      console.log(e);
    }
  };
  const getInfo = () => {
    onSnapshot(collectionRef, (snapshot) => {
      //ts@ignore
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

const deleteUser = async (userId: string) => {
    const docRef = doc(db, "users", userId)
    try{
        await deleteDoc(docRef);
    }
    catch(e){
        console.log(e)
    }
}

const editUser = async (user: User) => {
    const docRef = doc(db, "users", user.id)
    try{
        await setDoc(docRef, {
            firstname: user.firstname,
            lastname: user.lastname,
            age: user.age,
            agree: user.agree,
        });
    }
    catch(e){
        console.log(e)
    }
}

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    addInfo();
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    users?.length > 0 && console.log(users);
  }, [users]);


const handleEditUser = (user: User) => {

}

const handleEdit = (user: User) => {
if(user.id===editId){
editUser(user)
}
else {
    setEditId(user.id)
    setEditFormValues(user)
}
}

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Firstname
          <input
            type="text"
            name="firstname"
            value={formValues.firstname}
            onChange={(e) => handleInputChange("firstname", e.target.value)}
          />
        </label>
        <br />
        <label>
          Lastname
          <input
            type="text"
            name="lastname"
            value={formValues.lastname}
            onChange={(e) => handleInputChange("lastname", e.target.value)}
          />
        </label>
        <br />
        <label>
          Age
          <input
            type="number"
            name="age"
            value={formValues.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
          />
        </label>
        <br />
        <label>
          Age
          <input
            type="checkbox"
            name="agree"
            value={formValues.agree}
            onChange={(e) => handleInputChange("agree", e.target.checked)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {users?.length > 0 &&
        users?.map((item) => (
          <div key={item.id}>
            {editId !== item.id ? <p>
              {item.firstname} {item.lastname}
            </p> 
            : <>
        <input 
        type="text" 
        value={editFormValues.firstname} 
        onChange={(e)=>setEditFormValues({
            ...editFormValues,
            firstname: e.target.value
        })}/>

        <input 
        type="text" 
        value={editFormValues.lastname}
        onChange={(e)=>setEditFormValues({
            ...editFormValues,
            lastname: e.target.value
        })}/>
        
           </>
        }
            <button 
            onClick={()=>deleteUser(item.id)}>Delete
            </button>
            <button 
            onClick={()=> handleEdit(item)>{editId !== item.id ? "Edit" : "Save"
            </button>

          </div>
        ))} */}
    </>
  );
};

export default Forms;
