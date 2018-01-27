import { withStyles } from 'material-ui/styles';
import ComponentAccountSignup, {
  styles,
} from './ComponentAccountSignup';
import reduxContainer from '../../../redux/container';

export default withStyles(
  styles,
)(
  reduxContainer(
    ComponentAccountSignup,
  ),
);
