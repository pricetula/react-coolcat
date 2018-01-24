import { withStyles } from 'material-ui/styles';
import ComponentTodoForm, {
  styles,
} from './ComponentTodoForm';
import reduxContainer from '../../../redux/container';

export default withStyles(
  styles,
)(
  reduxContainer(
    ComponentTodoForm,
  ),
);
