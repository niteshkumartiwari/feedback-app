import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: 12,
    color: "#5f6368",
    textTransform: "capitalize",
    height: 10,
    fontWeight: "600",
    fontFamily: "Google Sans,Roboto,Arial,sans-serif",
  },
  tabs: {
    height: 10,
  },
});

function CenteredPolltabs(props) {
  const classes = useStyles();
  return (
    <Paper classes={classes.root}>
      <Tabs
        classes={classes.root}
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        <Tab classes={classes.root} label={props.label}></Tab>
      </Tabs>
    </Paper>
  );
}

export default CenteredPolltabs;
