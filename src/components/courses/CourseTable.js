import React, { Component } from "react";
import { Table } from 'reactstrap';

export default class CourseTable extends Component {
  render() {
    return (
      <div>
        <Table responsive className = "coursetable">
          <thead>
            <tr>
              <th></th>
              <th>Course Name</th>
              <th>Platform</th>
              <th>Instructor</th>
              <th>Rating</th>
              <th>Duration</th>
              <th>Number of Students</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>The Modern JS Bootcamp</td>
              <td>Udemy</td>
              <td>Andrew Mead</td>
              <td>4.7</td>
              <td>29.5 hours</td>
              <td>10.003</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Modern JS From The Beginning</td>
              <td>Udemy</td>
              <td>Brad Traversy</td>
              <td>4.7</td>
              <td>21.5 hours</td>
              <td>22.212</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>JS Basics for Beginners</td>
              <td>Udemy</td>
              <td>Mosh Hamedani</td>
              <td>4.5</td>
              <td>6.5 hours</td>
              <td>105</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
