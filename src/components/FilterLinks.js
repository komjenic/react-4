import React from 'react';
import {ALL, ACTIVE, COMPLETED} from '../constants';

let Link = ({currentFilter, filterName, onFilterChange, children}) => {
  let linkStyle = {marginLeft: "3px", marginRight: "3px"};
  if (currentFilter === filterName) {
    linkStyle = {
      marginLeft: "3px",
      marginRight: "3px",
      backgroundColor: "#e6e6e6",
      borderColor: "#adadad",
      lineHeight: "1.5"
    }
  }
  return (
    <a
      href="#"
      className="btn btn-default btn-sm"
      style={linkStyle}
      onClick={evt => onFilterChange(evt, filterName)}
    >
      <strong>{children}</strong>
    </a>
  )
}

let FilterLinks =  props => (
    <div style= {{marginBottom: "30px"}}>
      {'Display: '}
      <Link {...props} filterName={ALL}>{ALL}</Link>
      <Link {...props} filterName={ACTIVE}>{ACTIVE}</Link>
      <Link {...props} filterName={COMPLETED}>{COMPLETED}</Link>
    </div>
  )


export default FilterLinks;
