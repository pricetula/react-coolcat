import { withStyles } from 'material-ui/styles';
import ComponentDrawerVariant, {
  styles,
} from './ComponentDrawerVariant';
import reduxContainer from '../../../redux/container';

export default withStyles(
  styles,
)(
  reduxContainer(
    ComponentDrawerVariant,
  ),
);
