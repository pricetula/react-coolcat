import { withStyles } from 'material-ui/styles';
import ComponentNavbar, {
  styles,
} from './ComponentNavbar';
import reduxContainer from '../../redux/container';

export default withStyles(
  styles,
)(
  reduxContainer(
    ComponentNavbar,
  ),
);
