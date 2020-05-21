import React from "react";
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  makeStyles
} from "@material-ui/core";

const Product = props => {

  const useStyles = makeStyles(theme => ({
    media: {
      height: '300px',
      width: '300px',
    },
  }));

  const classes = useStyles();

  return (
    <Card>
        <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography  dangerouslySetInnerHTML={{
            __html: props.paragraph
          }}>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="big" color="primary">
          {props.ctaTitle}
        </Button>
      </CardActions>
    </Card>
  );
};
export default Product;
