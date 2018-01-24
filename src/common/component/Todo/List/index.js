import {
  withStyles,
} from 'material-ui/styles';
import ComponentTodoList, {
  styles,
} from './ComponentTodoList';
import reduxContainer from '../../../redux/container';

export default withStyles(
  styles,
)(
  reduxContainer(
    ComponentTodoList,
  ),
);
