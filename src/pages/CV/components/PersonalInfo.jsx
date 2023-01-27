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

// import { useAppDispatch, useTypedSelector } from "../../../redux/store";

const PersonalComp = () => {
  // const [formValues, setFormValues] = useState({
  //   firstname: "name",
  //   lastname: "lastname",
  //   position: "position",
  // });
  const [edit, setEdit] = useState(false);
  const [firstname, setFirstName] = useState("name");
  const [lastname, setLastName] = useState("last name");
  const [position, setPosition] = useState("position");

  // const handleInputChange = (key, value) => {
  //   setFormValues({
  //     ...formValues,
  //     [key]: value,
  //   });
  // };

  // const getInfo = () => {
  //   onSnapshot()
  // }

  // const handleSubmit = (e:any) => {
  //     e.preventDefault();
  //     addInfo();
  // }

  //     const addInfo = async () => {
  //         const collectionRef = collection(db, "users")

  //         try{
  //         const docRef = await addDoc(collectionRef, formValues)
  //         console.log(docRef)
  //         } catch(e){
  //             console.log(e)
  //         }
  //     }
  return (
    <>
      <Form
      // onSubmit={handleSubmit}
      >
        <div>
          {edit ? (
            <>
              <div className={s.inputsContainer}>
                <Input
                  placeholder="First name"
                  value={firstname}
                  onChange={(value) => setFirstName(value)}
                />

                <Input
                  placeholder="Last name"
                  value={lastname}
                  onChange={(value) => setLastName(value)}
                />

                <Input
                  placeholder="Position"
                  value={position}
                  onChange={(value) => setPosition(value)}
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
                {firstname} {lastname}
              </h1>
              <h3>{position}</h3>
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
