import { React, useState } from "react";
import s from "../adminCv/AdminCV.module.css";
import { IconButton, ButtonToolbar } from "rsuite";
import EditIcon from "@rsuite/icons/Edit";
import { Form, Input, Whisper, Tooltip, SelectPicker } from "rsuite";
import { useEffect } from "react";
import CheckIcon from "@rsuite/icons/Check";
import CloseIcon from "@rsuite/icons/Close";
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import db from "../../../Firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

const TechSkillsComp = () => {
  const collectionRef = collection(db, "techSkills");

  const [formValues, setFormValues] = useState({
    skill: "",
  });

  const [edit, setEdit] = useState(false);
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => console.log(formValues), [formValues]);
  useEffect(() => console.log(techSkills), [techSkills]);

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
      setTechSkills(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  };

  const deleteSkill = async (skillsId) => {
    const docRef = doc(db, "techSkills", skillsId);
    try {
      await deleteDoc(docRef);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = () => {
    setTechSkills((prevState) => [...prevState, ...[formValues]]);
    setEdit((prevState) => !prevState);
    addInfo();
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    techSkills?.length > 0 && console.log(techSkills);
  }, [techSkills]);

  return (
    <>
      <Form>
        <div>
          {edit ? (
            <>
              <div className={s.inputsContainer}>
                <h4>Technical Stack</h4>
                <Input
                  style={{ width: "225px" }}
                  placeholder="Skills"
                  value={formValues.skill}
                  onChange={(value) =>
                    setState("skill", value, setFormValues)
                  }
                />
                <ButtonToolbar>
                  <IconButton icon={<CheckIcon />} onClick={handleSubmit} />
                </ButtonToolbar>
              </div>
            </>
          ) : (
            <div>
              <div className={s.langContainer}>
                <h4>Technical Stack</h4>
                <IconButton icon={<EditIcon />} onClick={handleSubmit} />
              </div>
            </div>
          )}

          {techSkills?.length > 0 &&
            techSkills?.map((item) => (
              <div className={s.langContainer}>
                <div key={item.id} className={s.langItem}>
                  <h5><ArrowRightLineIcon size="2em"/> {item.skill}</h5>
                </div>
                <div>
                  <IconButton
                    className={s.deleteBtn}
                    icon={<CloseIcon />}
                    onClick={() => deleteSkill(item.id)}
                  />
                </div>
              </div>
            ))}
        </div>
      </Form>
    </>
  );
};

export default TechSkillsComp;
