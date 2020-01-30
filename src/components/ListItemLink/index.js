import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@material-ui/core";

export default function ListItemLink({ to, primary, icon }) {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button key={primary} component={renderLink}>
        <ListItemIcon>
          <Tooltip title={primary}>{icon}</Tooltip>
        </ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.prototype = {
  icon: PropTypes.element.isRequired,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};
