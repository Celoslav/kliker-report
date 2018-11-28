import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import NewClass from './components/new/class/NewClass';
import NewCourse from './components/new/course/NewCourse';
import Courses from './components/courses/Courses';
import {
  STUDENTS,
  TEACHERS,
  COURSES,
  TABLE_HEADERS,
  COURSE_LIST
} from './config/constants';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <div className="main">
            <Route path="/" exact component={Home} />
            <Route
              path="/courses"
              exact
              render={() => (
                <Courses
                  tableHeaders={TABLE_HEADERS}
                  courseList={COURSE_LIST}
                />
              )}
            />
            <Route path="/teachers" exact component={Home} />
            <Route path="/students" exact component={Home} />
            <Route path="/presence" exact component={Home} />
            <Route path="/paying" exact component={Home} />
            <Route
              path="/add-new-course"
              exact
              render={() => (
                <NewCourse
                  students={STUDENTS}
                  teachers={TEACHERS}
                  courses={COURSES}
                />
              )}
            />
            <Route
              path="/new-class"
              exact
              render={() => (
                <NewClass
                  students={STUDENTS}
                  teachers={TEACHERS}
                  courses={COURSES}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}
