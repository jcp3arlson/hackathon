import React, { useState } from 'react';
import './Header.css'; 
import logo from './Assets/apartment_logo.svg'



function Header() {
  const [showDropdownUni, setShowDropdownUni] = useState(false);
  const [showDropdownSem, setShowDropdownSem] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');




  const universities = ['UCLA', 'USC', 'Duke']; //REPLACE WITH PULL FROM DATABASE
  const semesters = ['Spring 2024', 'Winter', 'Fall 2024']; //REPLACE WITH PULL FROM DATABASE

  const selectUniversity = (university) => {
    setSelectedUniversity(university);
    setShowDropdownUni(false);
  };

  const selectSemester = (semester) => {
    // Handle selecting semester (if needed)
    setShowDropdownSem(false);
  };


  const toggleDropdownUni = () => {
    setShowDropdownUni(!showDropdownUni);
  };

  const toggleDropdownSem = () => {
    setShowDropdownSem(!showDropdownSem);
  };
  
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Subletify" />
      </div>
      <div className="header__container">
        <div className="header__buttons">
          <button className='university_button' onClick={toggleDropdownUni}>{selectedUniversity || 'University'}
</button>
          {showDropdownUni && (
            <div className="university_dropdown">
              <ul>
                {universities.map((university, index) => (
                  <li key={index} onClick={() => selectUniversity(university)}>{university}</li>
                ))}
              </ul>
            </div>
          )}         
          <button className='semester_button' onClick={toggleDropdownSem}>Semester</button>
          {showDropdownSem && (
            <div className="semester_dropdown">
              <ul>
                {semesters.map((semester, index) => (
                  <li key={index} onClick={() => selectSemester(semester)}>{semester}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="header__user">
        <div className="login">Login</div>
      </div>
    </header>
  );
}

export default Header;