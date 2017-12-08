import { createMuiTheme } from 'material-ui/styles';
import {
  purple,
  red,
  green,
} from 'material-ui/colors';

export default createMuiTheme(
  {
    palette: {
      primary: purple,
      secondary: green,
      accent: red,
      type: 'light',
    },
  },
);
