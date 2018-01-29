import { withStyles } from 'material-ui/styles';
import ComponentAccountSignupSigninContainer, {
  styles,
} from './ComponentAccountSignupSigninContainer';
import reduxContainer from '../../../redux/container';

export default withStyles(
  styles,
)(
  reduxContainer(
    ComponentAccountSignupSigninContainer,
  ),
);
