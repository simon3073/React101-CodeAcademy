// useState colorPicker
// import the default export and the named export `useState` from the 'react' library
import React, { useState } from 'react';

export default function ColorPicker() {
	// call useState and assign its return values to `color` and `setColor`
	const [color, setColor] = useState();
	const divStyle = { backgroundColor: color };

	return (
		<div style={divStyle}>
			<p>The color is {color}</p>
			<button onClick={() => setColor('Aquamarine')}>Aquamarine</button>
			<button onClick={() => setColor('BlueViolet')}>BlueViolet</button>
			<button onClick={() => setColor('Chartreuse')}>Chartreuse</button>
			<button onClick={() => setColor('CornflowerBlue')}>CornflowerBlue</button>
		</div>
	);
}

// useState colorPicker with default arg
import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
 const [color, setColor] = useState('Tomato');

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

// Previous state
import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const goBack = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
  const goToNext = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);

  const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick={goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
    </nav>
  );
}

// arrays in state
import React, { useState } from "react";
 
const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];
 
export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);
 
  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };
 
  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}

// objects in state
export default function Login() {
  const [formState, setFormState] = useState({});
 
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({ ...prev, [name]: value }));
	// callback function on set state, "...prev" sets up the new object from its previous, then next value updates only what is necessary
  };
 
  return (
    <form>
      <input
        value={formState.firstName}
        onChange={handleChange}
        name="firstName"
        type="text"
      />
      <input
        value={formState.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
    </form>
  );
}


import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form>
      <input
        onChange={handleChange}
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <input
        onChange={handleChange}
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input
        onChange={handleChange}
        value={profile.bday || ''}
        type="date"
        name="bday"
      />
      <input
        onChange={handleChange}
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button onSubmit={handleSubmit} type="submit">Submit</button>
    </form>
    
  );
}

// call effects only once >> dependency array
import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');
  const handleChange = ({ target }) => setName(target.value);

  useEffect(() => {
    const intervalId = setInterval(() => { setTime((prev) => prev + 1) }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type='text'/>
    </>
  );
}

