import React from 'react';
import { Context } from './Context';

class TimetableWrapper extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <div className="legendholder horizontal">
              <div className="legendtext horizontaltext">Mon</div>
              <div className="legendtext horizontaltext">Tue</div>
              <div className="legendtext horizontaltext">Wed</div>
              <div className="legendtext horizontaltext">Thu</div>
              <div className="legendtext horizontaltext">Fri</div>
              <div className="legendtext horizontaltext">Sat</div>
              <div className="legendtext horizontaltext">Sun</div>
            </div>
            <div className="actvityholder" style={{ alignItems: 'start' }}>
              <div className="legendholder">
                <div className="legendtext">1am</div>
                <div className="legendtext">2</div>
                <div className="legendtext">3</div>
                <div className="legendtext">4</div>
                <div className="legendtext">5</div>
                <div className="legendtext">6</div>
                <div className="legendtext">7</div>
                <div className="legendtext">8</div>
                <div className="legendtext">9</div>
                <div className="legendtext">10</div>
                <div className="legendtext">11</div>
                <div className="legendtext">12</div>
                <div className="legendtext">1pm</div>
                <div className="legendtext">2</div>
                <div className="legendtext">3</div>
                <div className="legendtext">4</div>
                <div className="legendtext">5</div>
                <div className="legendtext">6</div>
                <div className="legendtext">7</div>
                <div className="legendtext">8</div>
                <div className="legendtext">9</div>
                <div className="legendtext">10</div>
                <div className="legendtext">11‍</div>
                <div className="legendtext">12‍</div>
              </div>
              <div className="tableholder" style={{ display: 'flex' }}>
                {[1, 2, 3, 4, 5, 6, 7].map(this.mapDays.bind(this))}
              </div>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }

  mapDays(day) {
    return (
      <div className={'legendtext horizontaltext'}>
        {[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24
        ].map((h => this.mapHours(h, day)).bind(this))}
      </div>
    );
  }

  mapHours(hour, day) {
    return (
      <div
        onClick={(() => this.mark(hour, day)).bind(this)}
        className={'week_schedule_column ' + (day % 2 ? '' : '_2nd')}
      />
    );
  }

  mark(hour, day) {
    console.log(hour, day);
  }
}

export default TimetableWrapper;
