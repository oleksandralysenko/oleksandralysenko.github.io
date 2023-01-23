import { React, useState } from "react";
import s from "../adminCv/AdminCV.module.css";
import { IconButton, ButtonToolbar } from "rsuite";
import EditIcon from "@rsuite/icons/Edit";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import CheckOutlineIcon from "@rsuite/icons/CheckOutline";
import { Form, Input, Whisper, Tooltip, SelectPicker } from "rsuite";

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
  const [formValues, setFormValues] = useState({
    language: "",
    level: "",
    description: "",
  });

  const [edit, setEdit] = useState(false);
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");

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
                  value={language}
                  onChange={(value) => setLanguage(value)}
                />

                <SelectPicker
                  placeholder="Level"
                  data={data}
                  style={{ width: 224 }}
                  onChange={(value) => setLevel(value)}
                />

                <Whisper
                  trigger="focus"
                  speaker={<Tooltip>Optionally</Tooltip>}
                >
                  <Input
                    style={{ height: "50px", width: "225px" }}
                    placeholder="Description"
                    value={description}
                    onChange={(value) => setDescription(value)}
                  />
                </Whisper>

                <ButtonToolbar>
                  <IconButton icon={<AddOutlineIcon />} />
                  <IconButton
                    icon={<CheckOutlineIcon />}
                    onClick={() => setEdit((prevState) => !prevState)}
                  />
                </ButtonToolbar>
              </div>
            </>
          ) : (
            <div className={s.langContainer}>
              <div className={s.btn}>
                <h4>Languages</h4>
                <IconButton
                  icon={<EditIcon />}
                  onClick={() => setEdit((prevState) => !prevState)}
                />
              </div>
              <div>
                <h5>
                  {language}
                  <p>{level}</p>
                </h5>
                <h6>{description}</h6>
              </div>
            </div>
          )}
        </div>
      </Form>
    </>
  );
};

export default LanguagesComp;
