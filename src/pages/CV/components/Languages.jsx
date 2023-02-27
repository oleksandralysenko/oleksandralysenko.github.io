import { React, useState } from "react";
import s from "../adminCv/AdminCV.module.css";
import { IconButton, ButtonToolbar } from "rsuite";
import EditIcon from "@rsuite/icons/Edit";
import { Form, Input, Whisper, Tooltip, SelectPicker } from "rsuite";
import { useEffect } from "react";
import CheckIcon from "@rsuite/icons/Check";
import CloseIcon from "@rsuite/icons/Close";

import db from "../../../Firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

const data = [
  "Native",
  "A1 / Beginners",
  "A2 / Pre-intermediate",
  "B1 / Intermediate",
  "B2 / Upper-intermediate",
  "C1 / Advanced",
  "C2 / Proficient",
].map((item) => ({ label: item, value: item }));

const LanguagesComp = () => {
  const collectionRef = collection(db, "languages");

  const [formValues, setFormValues] = useState({
    language: "",
    level: "",
    description: "",
  });

  const [edit, setEdit] = useState(false);
  const [languages, setLanguages] = useState([]);

  useEffect(() => console.log(formValues), [formValues]);
  useEffect(() => console.log(languages), [languages]);

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
      setLanguages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  const deleteLanguage = async (langId) => {
    const docRef = doc(db, "languages", langId);
    try {
      await deleteDoc(docRef);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = () => {
    setLanguages((prevState) => [...prevState, ...[formValues]]);
    setEdit((prevState) => !prevState);
    addInfo();
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    languages?.length > 0 && console.log(languages);
  }, [languages]);
  return (
    <>
      <Form>
        <div>
          {edit ? (
            <>
              <div className={s.inputsContainer}>
                <h4>Languages</h4>
                <Input
                  style={{ width: "225px" }}
                  placeholder="Language"
                  value={formValues.language}
                  onChange={(value) =>
                    setState("language", value, setFormValues)
                  }
                />

                <SelectPicker
                  placeholder="Level"
                  data={data}
                  style={{ width: 224 }}
                  onChange={(value) => setState("level", value, setFormValues)}
                />

                <Whisper
                  trigger="focus"
                  speaker={<Tooltip>Optionally</Tooltip>}
                >
                  <Input
                    style={{ height: "50px", width: "225px" }}
                    placeholder="Description"
                    value={formValues.description}
                    onChange={(value) =>
                      setState("description", value, setFormValues)
                    }
                  />
                </Whisper>

                <ButtonToolbar>
                  <IconButton icon={<CheckIcon />} onClick={handleSubmit} />
                </ButtonToolbar>
              </div>
            </>
          ) : (
            <div className={s.langContainer}>
              <div className={s.btn}>
                <h4>Languages</h4>
                <IconButton icon={<EditIcon />} onClick={handleSubmit} />
              </div>
            </div>
          )}

          {languages?.length > 0 &&
            languages?.map((item) => (
              <div className={s.langContainer}>
                <div key={item.id} className={s.langItem}>
                  <h5>{item.language}</h5>
                  <h6>{item.level}</h6>
                  <p>{item.description}</p>
                </div>
                <div>
                  <IconButton
                    className={s.deleteBtn}
                    icon={<CloseIcon />}
                    onClick={() => deleteLanguage(item.id)}
                  />
                </div>
              </div>
            ))}
        </div>
      </Form>
    </>
  );
};

export default LanguagesComp;
