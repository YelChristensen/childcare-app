import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition(props) {
  const [isLoading, setIsLoading] = useState(true);
  const dropdownName = props.id;
  console.log(dropdownName, "dropdownName");
  // const [locationValue, setLocationValue] = useState();
  // const [filterValue, setFilterValue] = useState();
  // // This will launch only if propName value has chaged.

  const { location, filter } = useContext(DataContext);

  useEffect(() => {
    location && filter ? setIsLoading(false) : setIsLoading(true);
  }, [location, filter]);
  console.log(location, filter, "data in search");

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // console.log(locationValue[0], locationValue, filterValue, "dropdown");

  return isLoading ? (
    <div>dropdown loading</div>
  ) : (
    <div className={classes.root}>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Menu Item <ArrowDropDownRoundedIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {dropdownName === "location"
                    ? location.map((l) => (
                        <MenuItem key={l} onClick={handleClose}>
                          {l}
                        </MenuItem>
                      ))
                    : filter.map((l) => (
                        <MenuItem key={l} onClick={handleClose}>
                          {l}
                        </MenuItem>
                      ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
