import React, {
  Component,
} from 'react';
import {
  isEqual,
} from 'lodash/lang';
import {
  differenceBy,
} from 'lodash/array';
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
import {
  actionUiState,
} from './uiState';
import {
  actionAddCounterHistory,
  actionResetCounterHistory,
} from './counterHistory';

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
        uiState,
        counterHistory,
      } = this.props;

      return (
        nProps.counter !== counter ||
        nProps.notification !== notification ||
        !isEqual(
          nProps.uiState,
          uiState,
        ) ||
        counterHistory.length !== nProps.counterHistory.length
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
    counterHistory: PropTypes.array.isRequired,
    notification: PropTypes.string.isRequired,
    uiState: PropTypes.shape(
      {
        stateLdrawerOpen: PropTypes.bool.isRequired,
      },
    ).isRequired,
    actionIncreaseCount: PropTypes.func.isRequired,
    actionDecreaseCount: PropTypes.func.isRequired,
    actionResetCount: PropTypes.func.isRequired,
    actionNotify: PropTypes.func.isRequired,
    actionUiState: PropTypes.func.isRequired,
    actionAddCounterHistory: PropTypes.func.isRequired,
    actionResetCounterHistory: PropTypes.func.isRequired,
  };

  const mapStateToProps = state => (
    {
      counter: state.reducerCounter,
      counterHistory: state.reducerCounterHistory,
      notification: state.reducerNotifier,
      uiState: state.reducerUIState,
    }
  );

  const mapDispatchToProps = dispatch => (
    bindActionCreators(
      {
        actionIncreaseCount,
        actionDecreaseCount,
        actionResetCount,
        actionNotify,
        actionUiState,
        actionAddCounterHistory,
        actionResetCounterHistory,
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
