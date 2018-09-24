import cx from 'classnames';
import moment from 'moment';
import React, { Component } from 'react';
import Calendar from './calendar';
import Time from './time';

export default class InputMoment extends Component {
  static defaultProps = {
    prevMonthIcon: 'ion-ios-arrow-left',
    nextMonthIcon: 'ion-ios-arrow-right',
    isMilitary: false,
    initTab: 'date',
    onSave: false,
    minStep: 5,
    hourStep: 1,
  };

  static initialTab = {
    date: 0,
    time: 1,
  };

  state = {
    tab: 0,
  };

  componentWillMount() {
    const { initTab } = this.props;
    this.setState( { tab: InputMoment.initialTab[ initTab ] } );
  }

  handleClickTab = ( e, tab ) => {
    e.preventDefault();
    this.setState( { tab: tab } );
  };

  handleSave = e => {
    e.preventDefault();
    this.props.onSave ? this.props.onSave() : () => {
    };
  };

  render() {
    const { tab } = this.state;
    const {
      moment: m,
      className,
      prevMonthIcon,
      nextMonthIcon,
      isMilitary,
      initTab,
      minStep,
      hourStep,
      onChange,
      onSave,
      ...props
    } = this.props;
    const cls = cx( 'm-input-moment', className );

    return (
        <div className={cls} {...props}>
          <div className="options">
            <button
                type="button"
                className={cx( 'ion-calendar im-btn',
                    { 'is-active': tab === 0 } )}
                onClick={e => this.handleClickTab( e, 0 )}
            >
              Date
            </button>
            <button
                type="button"
                className={cx( 'ion-clock im-btn', { 'is-active': tab === 1 } )}
                onClick={e => this.handleClickTab( e, 1 )}
            >
              Time
            </button>
          </div>

          <div className="tabs">
            <Calendar
                className={cx( 'tab', { 'is-active': tab === 0 } )}
                moment={m}
                onChange={this.props.onChange}
                prevMonthIcon={this.props.prevMonthIcon}
                nextMonthIcon={this.props.nextMonthIcon}
            />
            <Time
                className={cx( 'tab', { 'is-active': tab === 1 } )}
                moment={m}
                isMilitary={isMilitary}
                minStep={minStep}
                hourStep={hourStep}
                onChange={onChange}
            />
          </div>

          {onSave ? (
              <button
                  type="button"
                  className="im-btn btn-save ion-checkmark"
                  onClick={this.handleSave}
              >
                Save
              </button>
          ) : null}
        </div>
    );
  }
}
