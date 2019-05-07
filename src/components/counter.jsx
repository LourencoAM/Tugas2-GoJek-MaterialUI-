import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = theme => ({
  card: {
    display: "flex"
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 127,
    height: 127
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  footer: {
    backgroundColor: "limegreen",
    padding: theme.spacing.unit * 6
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class Counter extends Component {
  state = {
    number: 0
  };
  tambah = (price, id) => {
    this.setState({
      number: this.state.number + 1
    });
    const x = this.props.cards.find(card => card.id === id);
    this.props.tambahTotalHarga(price, x);
  };

  kurang = (price, id) => {
    if (this.state.number === 0) {
      return;
    }
    this.setState({
      number: this.state.number - 1
    });
    const x = this.props.cards.find(card => card.id === id);
    this.props.kurangTotalHarga(price, x);
  };

  render() {
    const { gambar, nama, price } = this.props.card;
    const { classes } = this.props;
    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Card className={classes.card}>
          <CardMedia className={classes.cover} image={gambar} />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="bold">{nama}</Typography>
              <br />
              <Typography>Rp{price}</Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="Previous">
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => this.kurang(price)}
                >
                  -
                </Button>
              </IconButton>
              <Typography>{this.state.number}</Typography>
              <IconButton aria-label="Next">
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => this.tambah(price)}
                >
                  +
                </Button>
              </IconButton>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
Counter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Counter);
