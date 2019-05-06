import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const cards = [
  {
    id: 1,
    link: "menu",
    gambar:
      "http://theflashtoday.com/wp-content/uploads/2017/06/Burger-King-logo-feature.png"
  },
  {
    id: 2,
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/All_American_Food_Logo.svg/1200px-All_American_Food_Logo.svg.png"
  },
  {
    id: 3,
    gambar: "https://i.ytimg.com/vi/A1V1-RiQjIg/maxresdefault.jpg"
  },
  {
    id: 4,
    gambar:
      "https://images-na.ssl-images-amazon.com/images/I/511A7oL3oNL._SX425_.jpg"
  },
  {
    id: 5,
    gambar:
      "https://i1.wp.com/www.maxmanroe.com/wp-content/uploads/2014/11/Bisnis-J-Co-Donut-Coffee.jpg?resize=536%2C268&ssl=1"
  },
  {
    id: 6,
    gambar:
      "https://www.stratfordcrossing.com/wp-content/uploads/2018/03/dunkin_donuts_logo.jpg"
  }
];

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <div className={classes.heroUnit} />
      <div className={classNames(classes.layout, classes.cardGrid)}>
        {/* End hero unit */}
        <Grid container spacing={24}>
          {cards.map(card => (
            <Grid item key={card} sm={6} xs={6} lg={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={card.gambar} />
                <br />
                <div align="center">
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    href={card.link}
                  >
                    Pesan
                  </Button>
                </div>
                <br />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
