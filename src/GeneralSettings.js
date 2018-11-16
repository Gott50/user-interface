import React, { Component } from 'react';
import Switch from './ContextSwitch';
import TextFieldNumber from './TextFieldNumber';
import Help from './Help';
import TextFieldHashtags from './TextField_Hashtags';
import TextFieldUsers from './TextField_Users';
import TextFieldPlaces from './TextField_Places';
import Switch_Speed from './Switch_Speed';

export default class GeneralSettings extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="titlepage">General</h1>
        </div>
        <div data-w-id="885ad75b-5927-d36b-7821-9522271a2279" className="body">
          <div className="w-form form">
            <div className="titleholder">
              <label className="settingtitle">Interactions speed</label>
              <Help className="helptext">
                <strong>Speed: </strong>Defines interaction rate/speed. <br />
                slow: for new accounts younger than 6 months<br />
                medium: for accounts between 6 and 18 months<br />
                fast: for accounts older than 18 months
              </Help>
              <Switch_Speed />
            </div>
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle">
                Relevant Hashtags
              </label>
              <Switch value="enable_like_by_tags" className="title" />
              <Help className="helptext">
                <strong>Relevant Hashtags: </strong>Choose hashtags your target
                group could be interested in.{' '}
                <span className="helptext_secondary">
                  PinkParrot will interact with pictures including these
                  hashtags.{' '}
                </span>
              </Help>
            </div>
            <div
              data-w-id="1846180f-b0c1-4f62-a33b-df4641310d47"
              className="settingsgroup"
            >
              <TextFieldHashtags
                value="like_by_tags"
                placeholder="Enter hashtags this way: fitness"
              />
            </div>
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle">
                Relevant Locations
              </label>
              <Switch value="enable_like_by_locations" className="title" />
              <Help>
                <strong>Relevant Locations: </strong>Choose locations where you
                want to interact with users to get their attention.{' '}
                <span className="helptext_secondary">
                  E.g. &quot;England, Munich, Frankfurt Airport, Berlin, etc.
                  &quot;.
                </span>
              </Help>
            </div>
            <TextFieldPlaces
              value="like_by_locations"
              placeholder="Search for locations"
            />
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle">
                Relevant Users
              </label>
              <Switch value="enable_follow_user_followers" className="title" />
              <Help className="helptext">
                <strong>Interact with user&#x27;s followers: </strong>Choose
                successful profiles which are similar to yours.{' '}
                <span className="helptext_secondary">
                  So you get attention from profiles which are interested in
                  your content.
                </span>
              </Help>
            </div>
            <div className="columnholder hashtag_settings_holder">
              <TextFieldUsers
                value="follow_user_followers"
                placeholder="Search for user"
              />
              <div className="titleholder">
                <label
                  style={{ fontSize: '1.4em', fontWeight: '400' }}
                  htmlFor="email"
                  className="settingtitle"
                >
                  Settings
                </label>
                <Help className="helptext">
                  <strong>Define your target group: </strong> <br />
                  Recommendation: <br />
                  Pick last 5 - 10 Followers of the selected Profile<br />
                  Profiles with 100 - 3000 Followers <br />
                  Profiles following 30 - 1000 Users <br />
                  Interact with last 1 - 5 pictures
                </Help>

                <div className="columnholder filterholder first">
                  <TextFieldNumber
                    placeholder="Pick your user's last X followers"
                    value="follow_user_followers_amount"
                  />
                </div>

                <div className="columnholder filterholder first">
                  <TextFieldNumber
                    placeholder="... having min X Followers"
                    value="relationship_bounds_min_followers"
                  />
                  <TextFieldNumber
                    placeholder="... having max Y Followers"
                    value="relationship_bounds_max_followers"
                  />
                </div>
                <div className="columnholder filterholder first">
                  <TextFieldNumber
                    placeholder="... following min X users"
                    value="relationship_bounds_min_following"
                  />
                  <TextFieldNumber
                    placeholder="... following max Y users"
                    value="relationship_bounds_max_following"
                  />
                </div>
                <TextFieldNumber
                  placeholder="Interact with their last Z pictures"
                  value="user_interact_amount"
                />
              </div>
            </div>
            <div className="titleholder like_pictures_from_feed">
              <label htmlFor="email" className="settingtitle">
                Interact with pictures from my feed
              </label>
              <Switch value="enable_like_by_feed" className="title" />
              <Help className="helptext">
                <strong>Interact with pictures from my feed: </strong>
                Interact with people you are already following.{' '}
                <span className="helptext_secondary">
                  That way, you keep your community engaged.
                </span>
              </Help>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
