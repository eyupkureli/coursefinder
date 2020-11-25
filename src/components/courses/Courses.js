import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import CourseTable from "./CourseTable";
import CoursePagination from "./CoursePagination";
import CoursePlatforms from "./CoursePlatforms";

const Courses = (props) => {
  return (
    <div>
      <InputGroup>
        <Input className = "courseinput" placeholder="Please enter the name of the course you are looking for..." />
        <InputGroupAddon addonType="append">
          <Button color="secondary" className ="searchcourse">Search</Button>
        </InputGroupAddon>
      </InputGroup>

      <CourseTable></CourseTable>
      <CoursePagination></CoursePagination>
      <br></br>
      <CoursePlatforms></CoursePlatforms>
    </div>
  );
};

export default Courses;

