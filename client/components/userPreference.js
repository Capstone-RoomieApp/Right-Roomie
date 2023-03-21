import React, { useState } from "react";
import { fetchUserPreference } from "../store/userPreference";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";


const userPreference = () => {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("cleanlinessRange");
  const dispatch = useDispatch();
  const { id } = useParams;
  const { auth } = useSelector((state) => state);

  const [preference, setPreference] = useState({
    cleanliness: 0,
    allowPets: "",
    smoking: "",
    minAge: 0,
    maxAge: 0,
    drugs: "",
    gender: "",
    workSchedule: "",
    socialLevel: 0,
    noiseLevel: 0,
    overnightGuests: "",
    sexualOrientation: "",
    politicalViews: "",
    religion: "",
    userId: auth.id,
  });

  const onChange = (ev) => {
    let onChange = {
      setPreference: setPreference({
        ...preference,
        [ev.target.name]: ev.target.value,
      }),
      slider: (slider = function (ev) {
        output.innerHTML = ev.value;
      }),
    };
  };
  const getPreference = async (ev) => {
    ev.preventDefault();
    dispatch(fetchUserPreference(preference, id));
    //setPreference(preference);
    //Taking 'preference' from useState
    //and adding the answers from the form and updating the values in preference
  };

  return (
    <div>
      <h2>
        Hi {auth.fullName}!<br></br>
        <br></br>
      </h2>
      <h3>Please fill out the form for your preferences in a roommate:</h3>
      <form onSubmit={getPreference}>
        <div className="slidecontainer">
          <h3 id="cleanlinessRange">
            Cleanliness level you expect: {preference.cleanliness.toString()}
          </h3>
          <input
            name="cleanliness"
            type="range"
            min="0"
            max="5"
            value={preference.cleanliness}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label htmlFor="allowPets">
            <h3>Roommate with pets?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="allowPets"
            value={"Yes"}
          />
          Yes
          <input
            onChange={onChange}
            type="radio"
            name="allowPets"
            value={"No"}
          />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="smoking">
            <h3>Is a roommate that smokes a dealbreaker?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="smoking"
            value={"Yes"}
          />
          Yes
          <input onChange={onChange} type="radio" name="smoking" value={"No"} />
          No
        </div>
        <br></br>
        <div className="slidecontainer">
          <h3 id="minAge">Minimum Age:{preference.minAge}</h3>
          <input
            name="minAge"
            type="range"
            min="18"
            max="100"
            value={preference.minAge}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <div className="slidecontainer">
          <h3 id="maxAge">Maximum Age:{preference.maxAge.toString()}</h3>
          <input
            name="maxAge"
            type="range"
            min=""
            max="100"
            value={preference.maxAge}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label htmlFor="drugs">
            <h3>Is recreational drug use okay?</h3>
          </label>
          <input onChange={onChange} type="radio" name="drugs" value={"Yes"} />
          Yes
          <input onChange={onChange} type="radio" name="drugs" value={"No"} />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="gender">
            <h3>Roommate Gender</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="gender"
            value={(preference.gender = "Male")}
          />
          Male
          <input
            onChange={onChange}
            type="radio"
            name="gender"
            value={(preference.gender = "Female")}
          />
          Female
          <input
            onChange={onChange}
            type="radio"
            name="gender"
            value={(preference.gender = "Transgender")}
          />
          Transgender
          <input
            onChange={onChange}
            type="radio"
            name="gender"
            value={(preference.gender = "Non-binary")}
          />
          Non-binary
          <input
            onChange={onChange}
            type="radio"
            name="gender"
            value={(preference.gender = "No Preference")}
          />
          No Preference
        </div>
        <br></br>
        <div>
          <label htmlFor="workSchedule">
            <h3>What's your prefered work schedule in a roomate?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="workSchedule"
            value={"Weekdays"}
          />
          Weekdays
          <input
            onChange={onChange}
            type="radio"
            name="workSchedule"
            value={"Weekends"}
          />
          Weekends
          <input
            onChange={onChange}
            type="radio"
            name="workSchedule"
            value={"Nights"}
          />
          Nights
          <input
            onChange={onChange}
            type="radio"
            name="workSchedule"
            value={"No Preference"}
          />
          No Preference
        </div>
        <br></br>
        <div className="slidecontainer">
          <h3 id="socialLevel">
            Social level you're comfortable with:{" "}
            {preference.socialLevel.toString()}
          </h3>
          <input
            name="socialLevel"
            type="range"
            min="0"
            max="5"
            value={preference.socialLevel}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <br></br>
        <div className="slidecontainer">
          <h3 id="noiseLevel">
            Noise level you're comfortable with:{" "}
            {preference.noiseLevel.toString()}
          </h3>
          <input
            name="noiseLevel"
            type="range"
            min="0"
            max="5"
            value={preference.noiseLevel}
            className="slider"
            id="myRange"
            onChange={onChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label htmlFor="overnightGuests">
            <h3>Roommate with overnight {`guest(s)`} cool?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="overnightGuests"
            value={"Yes"}
          />
          Yes
          <input
            onChange={onChange}
            type="radio"
            name="overnightGuests"
            value={"No"}
          />
          No
        </div>
        <br></br>
        <div>
          <label htmlFor="sexualOrientation">
            <h3>Do you care about your roomate's sexual orientation?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="sexualOrientation"
            value={"Straight"}
          />
          Striaght
          <input
            onChange={onChange}
            type="radio"
            name="sexualOrientation"
            value={"LGBTQIA+"}
          />
          LGBTQIA+
          <input
            onChange={onChange}
            type="radio"
            name="sexualOrientation"
            value={"No Preference"}
          />
          No Preference
        </div>
        <br></br>
        <div>
          <label htmlFor="politicalViews">
            <h3>Do you care about your roommate's political views?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="politicalViews"
            value={"Democrat"}
          />
          Democrat
          <input
            onChange={onChange}
            type="radio"
            name="politicalViews"
            value={"Republican"}
          />
          Republican
          <input
            onChange={onChange}
            type="radio"
            name="politicalViews"
            value={"No Preference"}
          />
          No Preference
        </div>
        <br></br>
        <div>
          <label htmlFor="religion">
            <h3>Do you care about your roommate's religion?</h3>
          </label>
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Christian"}
          />
          Christian
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Jewish"}
          />
          Jewish
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Muslim"}
          />
          Muslim
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Buddhist"}
          />
          Buddhist
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Hindu"}
          />
          Hindu
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Atheist"}
          />
          Atheist
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"Non-Religious"}
          />
          Non-Religious
          <input
            onChange={onChange}
            type="radio"
            name="religion"
            value={"No Preference"}
          />
          No Preference
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default userPreference;
