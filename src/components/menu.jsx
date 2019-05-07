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
import Counter from "./counter";

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
    width: 137,
    height: 137
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

class Menu extends Component {
  state = {
    menus: [],
    cards: [
      {
        id: 1,
        number: 0,
        nama: "Melted Cheese Whopper®",
        price: 25000,
        gambar:
          "http://www.burgerking.id/uploads/products/7ba008762297246d8d05981033c3999e.png"
      },
      {
        id: 2,
        number: 0,
        nama: "Whopperdamaian",
        price: 25000,
        gambar:
          "https://assets.limetray.com/assets/user_images/menus/compressed/1555306360_WhopperDamaian.jpg"
      },
      {
        id: 3,
        number: 0,
        nama: "Quattro Cheese Whopper",
        price: 30000,
        gambar:
          "http://www.burgerking.id/uploads/products/6c2845017e47cddc0fc09a03dd8eb0bd.png"
      },
      {
        id: 4,
        number: 0,
        nama: "Whopper® Rasher Cheese",
        price: 30000,
        gambar:
          "http://www.burgerking.id/uploads/products/6f05003d0df4c2c82057d19476c5ba2b.png"
      },
      {
        id: 5,
        number: 0,
        nama: "Steakhouse BBQ",
        price: 30000,
        gambar:
          "http://www.burgerking.id/uploads/products/bf27062baa4c80f15f21e1f2010a9f0a.png"
      },
      {
        id: 6,
        number: 0,
        nama: "Whopper®",
        price: 20000,
        gambar:
          "http://www.burgerking.id/uploads/products/bb705136f6172ad5d6d0e900258a4b9a.png"
      }
    ],
    total: 0
  };
  tambahtotalHarga = (price, card) => {
    this.setState({
      total: this.state.total + price,
      menus: this.state.menus.concat(card)
    });
    sessionStorage.total = this.state.total + price;
  };

  kurangtotalHarga = (price, card) => {
    this.setState({
      total: this.state.total - price
      //menus: this.state.menus.filter(p => p.id !== card.id)
    });
    sessionStorage.total = this.state.total - price;
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <br />
          <Grid container spacing={24}>
            {this.state.cards.map(card => (
              <Grid item xs={12} lg={4}>
                <Counter
                  card={card}
                  tambahTotalHarga={this.tambahtotalHarga}
                  kurangTotalHarga={this.kurangtotalHarga}
                  cards={this.state.cards}
                />
              </Grid>
            ))}
          </Grid>
        </main>
        <br />
        <footer className={classes.footer}>
          <div align="center">
            <h3>Total: Rp{this.state.total}</h3>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              href="/payment"
            >
              Pembayaran
            </Button>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
