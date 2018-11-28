import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BluePlus from '../../assets/images/blue-plus.png';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <TableHeaders />
        <Evidence />
      </div>
    );
  }
}
const TableHeaders = () => {
  const tableHeaders = ['Kurs', 'Broj časova', 'Prisutni', 'Datum', 'Predavač'];
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
const Evidence = () => {
  const allStudents = 15;
  const evidenceList = [
    {
      courseName: 'Scratch',
      numberOfClasses: 0,
      presentStudents: 5,
      date: '29.11.2018',
      teacher: 'Dragan Knežević'
    },
    {
      courseName: 'Scratch 2',
      numberOfClasses: 4,
      presentStudents: 5,
      date: '29.11.2018',
      teacher: 'Sandra Kozaragić'
    }
  ];
  return (
    <div>
      {evidenceList.map((item, index) => (
        <div className="row-data" key={index}>
          {Object.keys(item).map((key, index) => (
            <span key={index} className="table-data">
              {key === 'numberOfClasses'
                ? `${item[key]}/12`
                : key === 'presentStudents'
                ? `${item[key]}/${allStudents}`
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
