const necessaryGradeToBeApproved = 7;
const studentGrade = 10;

const numberOfAbsensesToFailSchool = 100;
const studentNumberOfAbsenses = 109;

function checkIfStudentPassedTheSchoolYear() {
  if (studentGrade < necessaryGradeToBeApproved) {
    return {
      error: true,
      message: 'Student was not approved because his grade was below the necessary.',
    };
  } else {
    if (studentNumberOfAbsences > numberOfAbsencesToFailSchool) {
      return {
        error: true,
        message: 'Student was not approved because of his absenses',
      };
    } else {
      return { error: false, message: 'Student was approved :)' };
    }
  }
}

console.log(checkIfStudentPassedTheSchoolYear());

//Exemplos para mapeamento de valores:

function getDayOfWeek(dayNumber) {
  let day;
  if (dayNumber === 1) {
    day = 'Sunday';
  } else if (dayNumber === 2) {
    day = 'Monday';
  } else if (dayNumber === 3) {
    day = 'Tuesday';
  } else if (dayNumber === 4) {
    day = 'Wednesday';
  } else if (dayNumber === 5) {
    day = 'Thursday';
  } else if (dayNumber === 6) {
    day = 'Friday';
  } else if (dayNumber === 7) {
    day = 'Saturday';
  } else {
    day = 'Invalid day';
  }
  return day;
}


import React, { useState } from 'react';

const InputComponent = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const borderColor = isFocused ? 'blue' : 'gray';
  const color = isFocused ? 'blue' : 'black';

  return (
    <div>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          borderColor: borderColor,
          color: color,
        }}
      />
    </div>
  );
};

export default InputComponent;