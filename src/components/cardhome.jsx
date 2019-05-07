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
    nbutton: "Go-Food",
    link: "/go-food",
    gambar:
      "https://www.goodnewsfromindonesia.id/uploads/post/large-61658247234-go-food-846971cd9193ffd74180a532f479cdfe.jpg"
  },
  {
    id: 2,
    nbutton: "Go-Ride",
    gambar:
      "https://obs.line-scdn.net/0h6ZaSUh8JaXVcKkV37zIWImZ8ahpvRnp2OBw4awxEN0EhHSpwNElxEysoMkEkSi4rMkQjEHsockR3Si53ZE5x"
  },
  {
    id: 3,
    nbutton: "Go-Car",
    gambar:
      "https://satelitpost.com/wp-content/uploads/2017/07/goo-car-696x464.jpg"
  },
  {
    id: 4,
    nbutton: "Go-Box",
    gambar:
      "data:image/png;base64,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"
  },
  {
    id: 5,
    nbutton: "Go-Send",
    gambar: "https://s1.bukalapak.com/img/6053638733/large/gosend_sameday.png"
  },
  {
    id: 6,
    nbutton: "Go-Clean",
    gambar:
      "https://2.bp.blogspot.com/-mKGBtIBfMM0/Wdnq44I5wgI/AAAAAAAAE24/wZn0ZCAkdkYGhBe0mM1P-IHMJA4_YO6-QCLcBGAs/s1600/go-clean.jpg"
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
            <Grid item key={card} sm={6} xs={6} lg={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={card.gambar} />
                <div align="center">
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    href={card.link}
                  >
                    {card.nbutton}
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
