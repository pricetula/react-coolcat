import { withStyles } from 'material-ui/styles';
import ComponentAccountSignin, {
  styles,
} from './ComponentAccountSignin';
import reduxContainer from '../../../redux/container';

export default withStyles(
  styles,
)(
  reduxContainer(
    ComponentAccountSignin,
  ),
);
