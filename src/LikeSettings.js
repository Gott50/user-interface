import React, { Component } from 'react';
import TextFieldNumber from './TextFieldNumber';
import Help from './Help';
import './css/settings.css';

export default class LikeSettings extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="header">
          <h1 className="titlepage">Like</h1>
        </div>
        <div data-w-id="885ad75b-5927-d36b-7821-9522271a2279" className="body">
          <div className="w-form form">
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle">
                Like Percentage
              </label>
              <Help
                data-w-id="22c58d28-9a42-f414-7b98-09bcc5c05a9b"
                className="helptext"
              >
                <strong>Like X percent of crawled pictures: </strong> <br />
                100% means every crawled picture will be liked. <br />
                50% means every second crawled picture will be liked.
              </Help>
            </div>
            <TextFieldNumber
              placeholder="Like Percentage %"
              max={100}
              value="do_like_percentage"
            />
            {/*<span> equals 700 - 1050 likes/day </span>*/}
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle">
                <strong>Filters:</strong> Like pictures with...
              </label>
              <Help className="helptext">
                <strong>Like pictures with...: </strong>
                <br />
                Which pictures do you want to like? <br />
                Set minimum and maximum amount of likes on a picture you want to
                interact with. <br />
                Pictures with big engagement are not perfect to gain attention
                as your interaction will be one of many.<br />
                Recommendation: 10 - 500 likes per picture.
              </Help>
            </div>
            <div className="columnholder filterholder first">
              <TextFieldNumber
                placeholder="Min Likes"
                value="delimit_liking_min"
              />
              <TextFieldNumber
                placeholder="Max Likes"
                value="delimit_liking_max"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
