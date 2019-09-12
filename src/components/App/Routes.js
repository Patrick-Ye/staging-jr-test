import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CoursesView from '../Course/CoursesView';
import CourseDetailView from '../Course/CourseDetailView';
import CourseEditView from '../Course/CourseEditView';

export default () => (
  <Switch>
    {/* <Route exact path="/" component={() => <h1>Course List</h1>} /> */}
    <Route exact path="/" component={CoursesView} />
    <Route exact path="/courses" component={CoursesView} />
    <Route exact path="/courses/:id" component={CourseDetailView} />
    <Route exact path="/courses/edit/:id" component={CourseEditView} />

    <Route exact path="/students" component={() => <h1>Student List</h1>} />
    <Route exact path="/lecturers" component={() => <h1>lecturers List</h1>} />
    {/*<Route path="/students/:id" component={StudentDetailView} />
    <Route path="/students/edit/:id" component={StudentEditView} />

    <Route exact path="/lecturers" component={LecturersView} />
    <Route path="/signin" component={SigninView} /> */}
  </Switch>
);
