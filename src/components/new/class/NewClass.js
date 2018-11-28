import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import WhiteCheck from '../../../assets/images/white-check.png';
import BluePlus from '../../../assets/images/blue-plus.png';
import './newClass.css';

export default class NewClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTeacher: 'Jelena Kalaba',
      selectedClass: 1,
      selectedCourse: 'Scratch',
      displayStudents: false,
      startDate: new Date(),
      newStudent: '',
      students: props.students,
      teachers: props.teachers,
      courses: props.courses
    };
  }
  render() {
    const {
      handleOptions,
      handleDate,
      handlePresence,
      handleChange,
      addNewStudent,
      state: {
        courses,
        teachers,
        selectedTeacher,
        selectedClass,
        selectedCourse,
        startDate,
        students,
        newStudent
      }
    } = this;
    return (
      <div className="add-class-wrapper">
        <h2 className="add-class-header">Dodaj novi čas</h2>
        <div className="add-class-content">
          <div className="add-class-column">
            <label className="add-class-input-label">Kurs</label>
            <select
              className="add-class-input"
              value={selectedCourse}
              onChange={e => handleOptions(e, 'selectedCourse')}
            >
              {courses.map((course, index) => {
                return (
                  <option key={index} value={course}>
                    {course}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="add-class-column">
            <label className="add-class-input-label">Predavač</label>
            <select
              className="add-class-input"
              value={selectedTeacher}
              onChange={e => handleOptions(e, 'selectedTeacher')}
            >
              {teachers.map((teacher, index) => (
                <option key={index} value={teacher}>
                  {teacher}
                </option>
              ))}
            </select>
            <label className="add-class-input-label">Datum</label>
            <DatePicker
              selected={startDate}
              onChange={handleDate}
              className="add-class-input"
              dateFormat="dd.MM.YYYY"
            />
            <label className="add-class-input-label">Čas</label>
            <select
              className="add-class-input"
              value={selectedClass}
              onChange={e => handleOptions(e, 'selectedClass')}
            >
              {[...Array(12)].map((_, index) => {
                return (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="add-class-column">
            <label className="add-class-input-label">Učenici</label>
            <StudentList
              students={students}
              handlePresence={handlePresence}
              addNewStudent={addNewStudent}
              handleChange={handleChange}
              newStudent={newStudent}
            />
          </div>
        </div>
        <button
          className="white-check-btn"
          onClick={() => {
            const chosenDate = () => {
              const day = startDate.getDate();
              const month = startDate.getMonth() + 1;
              const year = startDate.getFullYear();
              return `${day}.${month}.${year}`;
            };
            const saveData = {
              selectedTeacher,
              selectedClass,
              selectedCourse,
              startDate: chosenDate(),
              students
            };
            return console.log(saveData);
          }}
        >
          <img
            src={WhiteCheck}
            alt="Plus button"
            height="30"
            width="30"
            className="img-white-check"
          />
        </button>
      </div>
    );
  }
  handleOptions = (e, flag) => {
    this.setState({ [flag]: e.target.value });
  };
  handleDate = date => {
    this.setState({
      startDate: date
    });
  };
  handlePresence = name => {
    this.setState(prevState => {
      const newStudents = prevState.students.map(student =>
        student.name === name
          ? { ...student, present: !student.present }
          : student
      );
      return { ...prevState, students: newStudents };
    });
  };
  addNewStudent = e => {
    e.preventDefault();
    this.setState(prevState => {
      return prevState.newStudent
        ? {
            ...prevState,
            students: prevState.students.concat([
              { name: prevState.newStudent, present: false }
            ]),
            newStudent: ''
          }
        : prevState;
    });
  };
  handleChange = e => {
    this.setState({
      newStudent: e.target.value
        .split(' ')
        .map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ')
    });
  };
}

const StudentList = ({
  students,
  handleChange,
  handlePresence,
  addNewStudent,
  newStudent
}) => {
  const addClass = (index, present) => {
    const firstElementClass = 'student-list-item-first';
    const regularClass = 'student-list-item';
    const oddClass = 'student-list-odd-item';
    return present
      ? index === 0
        ? `${regularClass} ${firstElementClass}`
        : regularClass
      : index === 0
      ? `${oddClass} ${firstElementClass}`
      : oddClass;
  };
  return (
    <div className="student-list-wrapper">
      {students.map((student, index) => (
        <div
          className={addClass(index, student.present)}
          key={index}
          onClick={() => handlePresence(student.name)}
        >
          <span className="student-name">{student.name}</span>
          {student.present ? (
            <span className="student-present">
              <img src={WhiteCheck} alt="check" width="10" height="10" />
            </span>
          ) : null}
        </div>
      ))}
      <form onSubmit={addNewStudent} className="add-student-form">
        <input
          value={newStudent}
          className="student-list-odd-item add-student-input"
          placeholder="Dodaj novog učenika"
          onChange={e => handleChange(e)}
        />
        <button
          onClick={addNewStudent}
          type="button"
          className="student-list-add-btn"
        >
          <img
            src={BluePlus}
            width="25"
            height="25"
            alt="add student"
            className="addStudentButton"
          />
        </button>
      </form>
    </div>
  );
};
