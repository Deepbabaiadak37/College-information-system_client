import React from "react";
import { Dropdown } from "react-bootstrap";export default class NestedDropdown extends React.Component {
 render() {
 return (
 <Dropdown.Item>
 <Dropdown variant="primary" drop="end" autoClose="outside">
 <Dropdown.Toggle>{this.props.title}</Dropdown.Toggle> <Dropdown.Menu>
 {this.props.children}
 </Dropdown.Menu>
 </Dropdown>
 </Dropdown.Item>
 );
 }
}