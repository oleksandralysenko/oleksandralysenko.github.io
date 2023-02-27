import React from "react";
import s from "../adminCv/AdminCV.module.css";
import { useState } from "react";
import { Button, Form, Input, IconButton, ButtonToolbar } from "rsuite";
import CheckIcon from '@rsuite/icons/Check';
import EditIcon from "@rsuite/icons/Edit";

import AdminCV from "../adminCv/AdminCV";
import db from "../../../Firebase";

import {
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect } from "react";

// import { useAppDispatch, useTypedSelector } from "../../../redux/store";

const PersonalComp = () => {
  const collectionRef = collection(db, "personal");

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    position: "",
  });
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState([]);
  useEffect(() => console.log(formValues), [formValues]);
  useEffect(() => console.log(name), [name]);

  const setState = (key, value, callback) => {
    callback((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
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
      console.log(snapshot);
      setName(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  const handleSubmit = () => {
    setName((prevState) => [...prevState, ...[formValues]]);
    setEdit((prevState) => !prevState);
    addInfo();
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    name?.length > 0 && console.log(name);
  }, [name]);


  return (
    <>
      <Form>
        <div>
          {edit ? (
            <>
              <div className={s.inputsContainer}>
                <Input
                  placeholder="First name"
                  value={formValues.firstname}
                  onChange={(value)=>setState("firstname", value, setFormValues)}/>

                <Input
                  placeholder="Last name"
                  value={formValues.lastname}
                  onChange={(value)=>setState("lastname", value, setFormValues)}
                />

                <Input
                  placeholder="Position"
                  value={formValues.position}
                  onChange={(value)=>setState("position", value, setFormValues)}
                />
                <ButtonToolbar>
                  <IconButton
                    size="md"
                    icon={<CheckIcon />}
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
