import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TopBar from "./TopBar";
import HoverNav from "./HoverNav";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileOrTablet, Desktop } from "./MediaQueries";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class Navbar extends Component {
  state = {
    showHoverNav: false,
    navName: null,
    listItems: [],
    drawerOpen: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleHoverNav = e => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    let items;
    if (e.target.name === "join-tadrees") {
      items = ["Volunteer", "Raise Funds", "Become A Community Ambassador"];
      this.setState({ listItems: items, navName: e.target.name });
    } else if (e.target.name === "our-work") {
      items = ["Education Programme", "Community Programme"];
      this.setState({ listItems: items, navName: e.target.name });
    }
    this.setState({ showHoverNav: true });
  };
  handleLeaveNav = e => {
    if (this.state.navName !== e.target.name) {
      this.setState({ showHoverNav: false, navName: null });
    } else {
      this.timer = setTimeout(() => {
        if (this.state.navName !== null)
          this.setState({ showHoverNav: false, navName: null });
      }, 500);
    }
  };
  toggleDrawer = open => () => {
    this.setState({
      drawerOpen: open
    });
  };
  handleScroll = () => {
    let scroll = window.pageYOffset;
    if (scroll >= 120.0) {
      this.setState({ shrinkNav: true });
    } else if (scroll < 50) {
      this.setState({ shrinkNav: false });
    }
  };
  render() {
    const drawerItems = (
      <div>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Our Work" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Join Tadrees" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
      </div>
    );
    const { classes } = this.props;
    const { showHoverNav, listItems, drawerOpen, shrinkNav } = this.state;
    let navBtnStyle = shrinkNav ? classes.navBtnShrink : classes.navBtn;
    let verticalBtnStyle = shrinkNav
      ? classes.verticalBtnShrink
      : classes.verticalBtn;
    return (
      <AppBar
        position="sticky"
        className={shrinkNav ? classes.AppBarBgShrink : classes.AppBarBg}
      >
        <div>
          <Drawer open={drawerOpen} onClose={this.toggleDrawer(false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer("left", false)}
              onKeyDown={this.toggleDrawer("left", false)}
            >
              {drawerItems}
            </div>
          </Drawer>
          <TopBar />

          <Toolbar className={classes.toolbarSize}>
            <MobileOrTablet>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </MobileOrTablet>
            <a href="/">
              <img
                src="images/logo.png"
                alt="Tadrees"
                className={shrinkNav ? classes.logoShrink : classes.logo}
              />
            </a>

            <div className={classes.navBtns}>
              <Desktop>
                <Button color="inherit" className={navBtnStyle} disableRipple>
                  Home
                </Button>
                <Button color="inherit" className={navBtnStyle} disableRipple>
                  About Us
                </Button>
                <Button
                  color="inherit"
                  className={navBtnStyle}
                  disableRipple
                  name="our-work"
                  onMouseOver={e => this.handleHoverNav(e)}
                  onMouseLeave={e => this.handleLeaveNav(e)}
                >
                  Our Work <FontAwesomeIcon icon={faCaretDown} />
                </Button>
                <Button
                  color="inherit"
                  className={navBtnStyle}
                  disableRipple
                  name="join-tadrees"
                  onMouseOver={e => this.handleHoverNav(e)}
                  onMouseLeave={e => this.handleLeaveNav(e)}
                >
                  Join Tadrees <FontAwesomeIcon icon={faCaretDown} />
                </Button>
                <Button color="inherit" className={navBtnStyle} disableRipple>
                  Contact Us
                </Button>
              </Desktop>

              <IconButton>
                <SearchIcon color="primary" />
              </IconButton>
              <Desktop>
                <Button
                  color="primary"
                  variant="contained"
                  className={verticalBtnStyle}
                >
                  Donate{shrinkNav ? "" : " Now"}
                </Button>
              </Desktop>
            </div>
          </Toolbar>
          <HoverNav items={listItems} show={showHoverNav} timer={this.timer} />
        </div>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  flex: {
    flex: 1
  },
  AppBarBg: {
    background: "white",
    color: "black",
    flexGrow: 1,
    height: "135px",
    transition: "0.2s"
  },
  AppBarBgShrink: {
    background: "white",
    color: "black",
    flexGrow: 1,
    height: "100px",
    transition: "0.2s"
  },
  logo: {
    height: "60px",
    margin: "15px 0px",
    transition: "0.2s"
  },
  logoShrink: {
    height: "40px",
    margin: "10px 0px",
    transition: "0.2s"
  },
  toolbarSize: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between"
  },
  navBtn: {
    position: "relative",
    paddingTop: "40px",
    paddingBottom: "40px",
    borderRadius: "0",
    backgroundImage: "linear-gradient(to right, #F16A70, #F16A70)",
    backgroundPosition: "left bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "0.1% 3px",
    transition: "0.2s",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "white",
      backgroundSize: "100% 3px"
    }
  },
  navBtnShrink: {
    position: "relative",
    paddingTop: "22px",
    paddingBottom: "22px",
    borderRadius: "0",
    backgroundImage: "linear-gradient(to right, #F16A70, #F16A70)",
    backgroundPosition: "left bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "0.1% 3px",
    transition: "0.2s",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "white",
      backgroundSize: "100% 3px"
    }
  },
  verticalBtn: {
    transform: "rotate(-90deg)",
    zIndex: "1001",
    position: "absolute",
    verticalAlign: "top",
    margin: "0px",
    borderRadius: "0",
    borderBottomLeftRadius: "50px",
    borderTopLeftRadius: "50px",
    padding: "20px",
    width: "190px",
    top: "65px",
    right: "-100px",
    letterSpacing: "3px",
    transition: "1s"
  },
  verticalBtnShrink: {
    transform: "rotate(-90deg)",
    zIndex: "1001",
    position: "absolute",
    verticalAlign: "top",
    margin: "0px",
    borderRadius: "0",
    borderBottomLeftRadius: "50px",
    borderTopLeftRadius: "50px",
    right: "-70px",
    top: "35px",
    width: "120px",
    padding: "15px 5px",
    letterSpacing: "2px",
    transition: "1s"
  },
  "@media only screen and (max-width: 991px)": {
    logo: {
      height: "50px"
    },
    AppBarBg: {
      height: "120px"
    }
  },
  "@media only screen and (max-width: 767px)": {
    logo: {
      height: "40px",
      margin: "15px 0px"
    },
    AppBarBg: {
      height: "110px"
    }
  }
};

export default withStyles(styles)(Navbar);
