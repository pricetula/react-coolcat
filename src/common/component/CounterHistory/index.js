import { withStyles } from 'material-ui/styles';
import ComponentCounterHistory, {
  styles,
} from './ComponentCounterHistory';
import reduxContainer from '../../redux/container';

export default withStyles(
  styles,
)(
  reduxContainer(
    ComponentCounterHistory,
  ),
);
