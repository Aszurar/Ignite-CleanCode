const necessaryGradeToBeApproved = 7;
const studentGrade = 10;

const numberOfAbsencesToFailSchool = 100;
const studentNumberOfAbsences = 109;

function checkIfStudentPassedTheSchoolYear() {
  if (studentGrade < necessaryGradeToBeApproved) {
    return {
      error: true,
      message: 'Student was not approved because his grade was below the necessary.',
    };
  }

  if (studentNumberOfAbsences > numberOfAbsencesToFailSchool) {
    return {
      error: true,
      message: 'Student was not approved because of his absences',
    };
  }

  return {
    error: false,
    message: 'Student was approved :)',
  };
}

console.log(checkIfStudentPassedTheSchoolYear());

//Exemplos para mapeamento de valores:
function getDayOfWeek(dayNumber) {
  const days = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  };
  const dayOfWeek = days[dayNumber];
  return dayOfWeek || 'Invalid day';
}

import React, { useState } from 'react';

const InputComponent = () => {
  const [focus, setFocus] = useState('blurred');

  const handleFocus = () => {
    setFocus('focused');
  };

  const handleBlur = () => {
    setFocus('blurred');
  };

  const colors = {
    focused: {
      borderColor: 'blue',
      color: 'blue',
    },
    blurred: {
      borderColor: 'gray',
      color: 'black',
    },
  };

  const { borderColor, color } = colors[focus];

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
