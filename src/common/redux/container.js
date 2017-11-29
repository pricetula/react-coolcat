import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  actionIncreaseCount,
  actionDecreaseCount,
  actionResetCount,
} from './counter';
import {
  actionNotify,
} from './notifier';

export default function (
  RootComponent,
) {
  class Container extends Component {
    shouldComponentUpdate(
      nProps,
    ) {
      const {
        counter,
        notification,
      } = this.props;

      return (
        nProps.counter !== counter ||
        nProps.notification !== notification
      );
    }

    render(
    ) {
      return (
        <RootComponent
          {...this.props}
        />
      );
    }
  }


  Container.propTypes = {
    counter: PropTypes.number.isRequired,
    notification: PropTypes.string.isRequired,
  };

  const mapStateToProps = state => (
    {
      counter: state.reducerCounter,
      notification: state.reducerNotifier,
    }
  );

  const mapDispatchToProps = dispatch => (
    bindActionCreators(
      {
        actionIncreaseCount,
        actionDecreaseCount,
        actionResetCount,
        actionNotify,
      },
      dispatch,
    )
  );

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    Container,
  );
}
