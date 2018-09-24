import cx from 'classnames';
import React, { Component } from 'react';
import InputSlider from 'react-input-slider';

export default class extends Component {

  static defaultProps = {
    isMilitary: false,
  };

  constructor( props ) {
    super( props );
  }

  changeHours = pos => {
    const m = this.props.moment;
    m.hours( pos.x );
    this.props.onChange( m );
  };

  changeMinutes = pos => {
    const m = this.props.moment;
    m.minutes( pos.x );
    this.props.onChange( m );
  };

  render() {

    const { isMilitary } = this.props;

    const m = this.props.moment;

    const getFormattedTime = hour => hour % 12 ? hour % 12 : 12;

    return (
        <div className={cx( 'm-time', this.props.className )}>
          <div className="showtime">
            <span className="time">{isMilitary ?
                m.format( 'HH' ) :
                getFormattedTime( m.format( 'HH' ) )}</span>
            <span className="separater">:</span>
            <span className="time">{m.format( 'mm' )}</span>
            {!isMilitary &&
            <span>
                <span className="separater"></span>
                <span className="time">{Math.floor( m.format( 'HH' ) / 12 ) ?
                    'PM' :
                    'AM'}</span>
              </span>
            }

          </div>

          <div className="sliders">
            <div className="time-text">Hours:</div>
            <InputSlider
                className="u-slider-time"
                xmin={0}
                xmax={23}
                xstep={this.props.hourStep}
                x={m.hour()}
                onChange={this.changeHours}
            />
            <div className="time-text">Minutes:</div>
            <InputSlider
                className="u-slider-time"
                xmin={0}
                xmax={59}
                xstep={this.props.minStep}
                x={m.minute()}
                onChange={this.changeMinutes}
            />
          </div>
        </div>
    );
  }
}
