import { withStyles } from 'material-ui/styles';
import ComponentNotification, {
  styles,
} from './ComponentNotification';
import reduxContainer from '../../redux/container';

export default withStyles(
  styles,
)(
  reduxContainer(
    ComponentNotification,
  ),
);
