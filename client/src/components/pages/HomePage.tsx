import { containeranalysis } from 'googleapis/build/src/apis/containeranalysis';
import React from 'react';
import { HomePageProps, HomePageState } from '../../types/interfaces';

/**
 * This class serves as the Home Page of the application.
 */
class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.renderschedular = this.renderschedular.bind(this);
    this.state = {};
  }

  public renderschedular() {

  }
  render(): any {
    return <section className="Block1">
      <div className="Div1">
        <h1 className="Head1">
          EasyMeet
        </h1>
        <p className="Sub1">
          Simplify scheduling with your clients
        </p>
      </div>
      <div className="Div2">
        <div className="Div2_Left">
          <h1 className="Head2">
            Effortless
          </h1>
          <p className="Sub2">
            Calendar events inputted
          </p>
          <p className="Sub2">
            automagically
          </p>
          <img className="Icon" src={"https://i.imgur.com/3LQUIx8.png"}/>
        </div>
        <div className="Div2_Center">
          <h1 className="Head2">
            Instant
          </h1>
          <p className="Sub2">
            Invitee meetings added 
          </p>
          <p className="Sub2">
            immediately
          </p>
          <img className="Icon" src={"https://i.imgur.com/JEck6o7.png"}/>
        </div>
        <div className="Div2_Right">
          <h1 className="Head2">
            Professional
          </h1>
          <p className="Sub2">
            No more back-and-forths 
          </p>
          <p className="Sub2">
            with clients
          </p>
          <img className="Icon" src={"https://i.imgur.com/tcatZ56.png"}/>
        </div>
      </div>
      <div className="DivInfo">
        <h1 className="HeadInfo"> 
          Why Choose EasyMeet?
        </h1>
        <p className="SubInfo">
          Many other calendar and scheduling applications including Google 
          Calendar offer similar functionality to EasyMeet. In fact, EasyMeet 
          uses the Google Calendar API to gather existing information about 
          your schedule! What EasyMeet does differently, however, is allow 
          event inviters to share their calendars and let invitees make their 
          own events without exposing sensitive calendar information. Invitees 
          don???t need to make accounts, inviters don???t need to make their 
          calendars public, and you can sleep easy at night knowing that your 
          invitation links are one-time-use only, meaning absolutely no harm 
          will be done to your picture perfect schedule. 
        </p>
      </div>
      <div className="Div3">
        <div className="Div3_Left">
        </div>
        <div className="Div3_Right">
          <h1 className="Head3">
            Don't Wait
          </h1>
          <p className="Sub3">
            Use EasyMeet to schedule
          </p>
          <p className="Sub3">
            with your clients today
          </p>
        </div>
      </div>

    </section>;

  }

}
export { HomePage };
