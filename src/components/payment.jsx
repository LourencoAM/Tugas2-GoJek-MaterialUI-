import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  footer: {
    backgroundColor: "limegreen",
    padding: 17
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <main>
        <br />
        <Card className={classes.card}>
          <CardContent>
            <div align="center">
              1 x makanan jenis pertama <br />
              7 x makanan jenis kedua
              <hr />
              <b> Rp Total</b>
            </div>
          </CardContent>
        </Card>
      </main>
      <br />
      <footer className={classes.footer}>
        <div align="center">
          <Button
            variant="contained"
            size="small"
            color="secondary"
            href="/closing"
          >
            Bayar Sekarang
          </Button>
        </div>
      </footer>
    </React.Fragment>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
