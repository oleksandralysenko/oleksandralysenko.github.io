import React from "react";
import s from "../adminCv/AdminCV.module.css";
import { useState } from "react";
import { Button, Form, Input, IconButton, ButtonToolbar } from "rsuite";
import CheckOutlineIcon from "@rsuite/icons/CheckOutline";
import EditIcon from "@rsuite/icons/Edit";

import AdminCV from "../adminCv/AdminCV";
import { db, storage } from "../../../Firebase.jsx";

import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";

import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect } from "react";

// import { useAppDispatch, useTypedSelector } from "../../../redux/store";

const PersonalComp = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    position: "",
  });
  const [edit, setEdit] = useState(false);
  
  const handleInputChange = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };
  // const getInfo = () => {
  //   onSnapshot(collectionRef, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     dispatch(
  //       getData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //     );
  //   });
  // };

// const useEffect(()=> {
//   getInfo();
// }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
      console.log(formValues)
  }

  //     const addInfo = async () => {
  //         const collectionRef = collection(db, "users")

  //         try{
  //         const docRef = await addDoc(collectionRef, formValues)
  //         console.log(docRef)
  //         } catch(e){
  //             console.log(e)
  //         }
  //     }

// useEffect(()=>{
//   setFormValues()
//   console.log(formValues)
// }, [])

// useEffect(()=>{
//   console.log(formValues)
// }, [formValues])


  return (
    <>
      <Form
      onSubmit={handleSubmit}
      >
        <div>
          {edit ? (
            <>
              <div className={s.inputsContainer}>
                <Input
                  placeholder="First name"
                  value={formValues.firstname}
                  onChange={(e)=>handleInputChange("firstname", e.target.value)}
                />

                <Input
                  placeholder="Last name"
                  value={formValues.lastname}
                  onChange={(e)=>handleInputChange("lastname", e.target.value)}
                />

                <Input
                  placeholder="Position"
                  value={formValues.position}
                  onChange={(e)=>handleInputChange("position", e.target.value)}
                />
                <ButtonToolbar>
                  <IconButton
                    size="md"
                    icon={<CheckOutlineIcon />}
                    onClick={() => setEdit((prevState) => !prevState)}
                  ></IconButton>
                </ButtonToolbar>
              </div>
            </>
          ) : (
            <div className={s.headerContainer}>
              <h1>
                {formValues.firstname} {formValues.lastname}
              </h1>
              <h3>{formValues.position}</h3>
              <IconButton
                icon={<EditIcon />}
                size="md"
                onClick={() => setEdit((prevState) => !prevState)}
              ></IconButton>
            </div>
          )}
        </div>
      </Form>
    </>
  );
};

export default PersonalComp;
