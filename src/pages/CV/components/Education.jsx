import { React, useState, useEffect } from "react";
import s from "../adminCv/AdminCV.module.css";
import { ButtonToolbar, DatePicker, Form, IconButton } from "rsuite";
import EditIcon from "@rsuite/icons/Edit";
import db from "../../../Firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Input, Whisper, Tooltip, SelectPicker } from "rsuite";
import CloseIcon from '@rsuite/icons/Close';
import CheckIcon from '@rsuite/icons/Check';

const EducationComp = () => {
  const collectionRef = collection(db, "education");
  const [formValues, setFormValues] = useState({
    uni: "",
    faculty: "",
    year1: "",
    year2: "",
    description: "",
  });

  const [edit, setEdit] = useState(false);
  const [edu, setEdu] = useState([]);

  useEffect(() => console.log(formValues), [formValues]);
  useEffect(() => console.log(edu), [edu]);

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
      setEdu(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  const handleSubmit = () => {
    setEdu((prevState) => [...prevState, ...[formValues]]);
    setEdit((prevState) => !prevState);
    addInfo();
  };

  const deleteEdu = async(eduId) => {
    const docRef = doc(db, "education", eduId)
    try {await deleteDoc(docRef);
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    edu?.length > 0 && console.log(edu);
  }, [edu]);

  return (
    <>
      <Form>
        <div>
          {edit ? (
            <>
              <div className={s.inputsContainer}>
                <h4>Education</h4>
                <Input
                  style={{ width: "350px", marginTop: "10px" }}
                  placeholder="University"
                  value={formValues.uni}
                  onChange={(value) => setState("uni", value, setFormValues)}
                />

                <Input
                  style={{ width: "350px", marginTop: "10px" }}
                  placeholder="Faculty/Specialty"
                  value={formValues.faculty}
                  onChange={(value) =>
                    setState("faculty", value, setFormValues)
                  }
                />

                <DatePicker
                  format="yyyy-MM"
                  ranges={[]}
                  placeholder="Start Date"
                  style={{ width: "350px", marginTop: "10px" }}
                  value={formValues.year1}
                  onChange={(value) =>
                    setState("year1", value, setFormValues)
                  }
                />
                <DatePicker
                  format="yyyy-MM"
                  ranges={[]}
                  placeholder="End Date"
                  style={{ width: "350px", marginTop: "10px" }}
                  value={formValues.year2}
                  onChange={(value) =>
                    setState("year2", value, setFormValues)
                  }
                />
                <Whisper
                  trigger="focus"
                  speaker={<Tooltip>Optionally</Tooltip>}
                >
                  <Input
                    style={{ width: "350px", marginTop: "10px" }}
                    placeholder="Details"
                    value={formValues.description}
                    onChange={(value) =>
                      setState("description", value, setFormValues)
                    }
                  />
                </Whisper>

                <ButtonToolbar>
                  <IconButton
                  style={{marginTop: "10px"}}
                    icon={<CheckIcon />}
                    onClick={handleSubmit}
                  />
                </ButtonToolbar>
              </div>
            </>
          ) : (
            <div className={s.eduContainer}>
              <div className={s.btn}>
                <h4>Education</h4>
                <IconButton icon={<EditIcon />} onClick={handleSubmit} />
              </div>
            </div>
          )}

          {edu?.length > 0 &&
            edu?.map((item) => (
              <div className={s.eduContainer}>
                <div key={item.id} className={s.eduItem}>
                  <h5>{item.uni}</h5>
                  <h6>{item.faculty}</h6>
                  <h6>
                    {item.year1} {item.year2}
                  </h6>
                  <p>{item.description}</p>
                </div>
                <IconButton icon={<CloseIcon />} onClick={()=>deleteEdu(item.id)} className={s.deleteBtn}/>
              </div>
            ))}
        </div>
      </Form>
   </>
  );
};

export default EducationComp;
