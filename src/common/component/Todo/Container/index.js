import { withStyles } from 'material-ui/styles';
import ComponentTodoContainer, {
  styles,
} from './ComponentTodoContainer';
import reduxContainer from '../../../redux/container';

export default withStyles(
  styles,
)(
  reduxContainer(
    ComponentTodoContainer,
  ),
);
