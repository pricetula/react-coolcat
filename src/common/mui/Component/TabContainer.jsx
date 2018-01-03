import React from 'react';
import Typography from 'material-ui/Typography';

export default function (
  {
    children,
  },
) {
  return (
    <Typography
      component="div"
      style={
        {
          padding: 8 * 3,
        }
      }
    >
      {children}
    </Typography>
  );
}
