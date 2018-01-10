import React from 'react';
import PropTypes from 'prop-types';
import {
  Parallax,
} from 'react-parallax';
import IconKeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

function Mycomponent(
  {
    classes,
    bgImage,
    header,
    text,
    smaller,
  },
) {
  return (
    <div className={
      smaller
        ? classes.bannerContainerA
        : classes.bannerContainer
      }
    >
      <Parallax
        strength={200}
        bgImage={bgImage}
      >
        <div
          className={
            smaller
              ? classes.bannerA
              : classes.banner
            }
        >
          <div id="banner-text">
            <Typography
              className={classes.bannerText}
              type={
                smaller
                  ? 'display2'
                  : 'display4'
              }
            >
              {header}
            </Typography>

            <Typography
              className={classes.bannerText}
              type={
                smaller
                  ? 'subheading'
                  : 'display1'
              }
            >
              {text}
            </Typography>

            <Button
              fab
              aria-label="add"
              className={classes.bannerButton}
            >
              <IconKeyboardArrowDown />
            </Button>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

Mycomponent.defaultProps = {
  smaller: false,
};

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
  bgImage: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  smaller: PropTypes.bool.isRequired,
};

export default Mycomponent;
