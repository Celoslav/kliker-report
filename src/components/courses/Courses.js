import React from 'react';
import { Link } from 'react-router-dom';
import BluePlus from '../../assets/images/blue-plus.png';
import './courses.css';

export default ({ tableHeaders, courseList }) => {
  return (
    <div>
      <TableHeaders tableHeaders={tableHeaders} />
      <Evidence courseList={courseList} />
      <div className="add-new-course-wrapper">
        <Link className="add-new-course-btn" to="./add-new-course">
          DODAJ NOVI KURS
        </Link>
      </div>
    </div>
  );
};

const TableHeaders = ({ tableHeaders }) => {
  return (
    <div className="row">
      {tableHeaders.map((header, index) => (
        <span key={index} className="table-header">
          {header}
        </span>
      ))}
    </div>
  );
};
const Evidence = ({ courseList }) => {
  return (
    <div>
      {courseList.map((item, index) => (
        <div className="row-data" key={index}>
          {Object.keys(item).map((key, index) => (
            <span key={index} className="table-data">
              {key === 'numberOfClasses'
                ? `${item[key]}`
                : key === 'presentStudents'
                ? `${item[key]}`
                : item[key]}
            </span>
          ))}
        </div>
      ))}
      <Link to="/new-class">
        <img
          src={BluePlus}
          alt="Plus button"
          height="50"
          width="50"
          className="btn-blue-plus"
        />
      </Link>
    </div>
  );
};
