import { makeStyles } from "@material-ui/core/styles";

// These are the styles for the layout of our website
export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    main_container: {
      marginTop: 0,
    },
    paper: {
      // padding: theme.spacing(2),
      // textAlign: "center",
      // color: theme.palette.text.secondary
    },
    header: {
      backgroundColor: "red"
    },
    postContainer: {
      // backgroundColor: "yellow"
    },
    sidebar: {
      backgroundColor: "blue"
    },
    footer: {
      backgroundColor: "orange"
    }
  }));