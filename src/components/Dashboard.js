import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      data1: '',
      name: '',
      userName: '',
      password: '',
      master: '',

      redirectToReferrer: false
    };


    // this.handleChange = this.handleChange.bind(this);
    //  this.nav = this.save.bind(this);
  }





  componentDidMount() {

    let url = 'http://35.154.81.179:4000/api/getLiveEvents'
    let data = { EventTypeid: '4' }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json;charset=utf-8',

        'Authorization': "Brebar "+JSON.parse(sessionStorage.getItem('data')).data.token
      }),
    }).then(response => response.json())
      .catch((error) => alert(error))
      .then(result => {
        console.log("result", result.data.result)
        this.setState({
          data: result.data.result
        })
      })

  }



  next(txt) {
    console.log("txt", txt)

    let url = `http://35.154.81.179:4000/api/listMarketType`
    let data = { eventId: txt }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': "Brebar "+JSON.parse(sessionStorage.getItem('data')).data.token
      }),

    }).then(response => response.json())
      .catch((error) => alert(error))
      .then(result => {
        console.log("then result", result)
        //  this.setState({
        //   data: result.data.result
        // })
      })
  }


  next_again(txt) {
    console.log("txt", txt)

    let url = `http://35.154.81.179:4000/api/listMarketOdds`
    let data = { marketId: txt }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': "Brebar "+JSON.parse(sessionStorage.getItem('data')).data.token
      }),

    }).then(response => response.json())
      .catch((error) => alert(error))
      .then(result => {
        console.log("then result", result)

      })

  }


  render() {

    let list = this.state.data

    if (list[0]) {
      return (

        

        <div>
          <Navbar />
          <Sidebar />
          <div className="forModal" />
          <div className="container body">
            <div className="main_container" id="sticky">
              <div className="right_col" role="main">
                <div className="fullrow tile_count">
                  <div className="col-md-8">
                    <div id="UpCommingData">
                      <div className="sport-highlight-content tabs" id="accountView" role="main">
                        {/*<h2 class="header"><div class="sport-highlight-icon"></div>  <span>Sport Highlights</span> <button class="btn btn-back tbback hidden-lg"> Back</button></h2>*/}
                        <div className="casinobg"><span><a href="#" className="blinking"> Live games</a></span></div>
                        <div className="sports_box hidden-lg">
                          <div className="tittle_sports">
                            <span className="item_sport"> <img src="http://park9.bet/assets/images/trophy-ico.png" /></span>
                          Live Casino Games
                        </div>
                        </div>

                        <div className="matches-all">
                          <span id="msg_error" /><span id="errmsg" />
                          <div className="sports_box">
                            <div className="tittle_sports">
                              <span className="item_sport"> <img src="http://park9.bet/assets/images/cricket-ico.png" /></span>
                            Cricket
                          </div>


                            {
                              list.map(item => {

                                return (

                                  <div id="user_row_" className="sport_row sportrow-4  matchrow-29894585" onclick="MarketSelection('1.171272881','29894585');" title="Match OODS">
                                    <div className="sport_name">
                                      <Link to="/matchodds" onClick={() => this.next(item.event.id)} >
                                        {item.event.name}             </Link>
                                      <time><i className="fa fa-clock-o" />{item.event.openDate} </time>
                                      <span id="fav29894585"><i onclick="FavFunc(29894585,'1.171272881')" className="fa fa-star-o" aria-hidden="true" /></span>
                                    </div>
                                    <div className="match_status">
                                      <span className="inplay_txt"> {this.marketCount}</span>             </div>
                                    <div className="match_odds_front">
                                      <span className="back-cell">{this.marketCount}</span>
                                      <span className="lay-cell">250</span>
                                      <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                      <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                      <span className="back-cell">0</span>
                                      <span className="lay-cell">1.01</span>
                                    </div>
                                  </div>

                                )

                              })
                            }


                            {/* Odds Modal  */}

                           

                            {/* Odds Modal End */}

                          </div>
                          {/* Tennis */}
                          <div className="sports_box">
                            <div className="tittle_sports">
                              <span className="item_sport"><img src="http://park9.bet/assets/images/tennis-ico.png" /></span> Tennis
                          </div>
                          </div>
                          {/* Soccer */}
                          <div className="sports_box">
                            <div className="tittle_sports">
                              <span className="item_sport"><img src="http://park9.bet/assets/images/soccer-ico.png" /></span> Soccer
                          </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29888492" onclick="MarketSelection('1.171222962','29888492');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Zenit St Petersburg v Sochi                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 20:30:00</time>
                                <span id="fav29888492"><i onclick="FavFunc(29888492,'1.171222962')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.74</span>
                                <span className="lay-cell">1.77</span>
                                <span className="back-cell">4.4</span>
                                <span className="lay-cell">4.5</span>
                                <span className="back-cell">4.8</span>
                                <span className="lay-cell">5</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29890697" onclick="MarketSelection('1.171234090','29890697');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  AC Horsens v Hobro                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                                <span id="fav29890697"><i onclick="FavFunc(29890697,'1.171234090')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.35</span>
                                <span className="lay-cell">1.36</span>
                                <span className="back-cell">5.7</span>
                                <span className="lay-cell">5.8</span>
                                <span className="back-cell">11</span>
                                <span className="lay-cell">12</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29890928" onclick="MarketSelection('1.171237970','29890928');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  FK Jablonec v Banik Ostrava                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                                <span id="fav29890928"><i onclick="FavFunc(29890928,'1.171237970')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.75</span>
                                <span className="lay-cell">1.77</span>
                                <span className="back-cell">4.2</span>
                                <span className="lay-cell">4.4</span>
                                <span className="back-cell">4.8</span>
                                <span className="lay-cell">5</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29890935" onclick="MarketSelection('1.171237879','29890935');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Plzen v Slovan Liberec                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                                <span id="fav29890935"><i onclick="FavFunc(29890935,'1.171237879')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.45</span>
                                <span className="lay-cell">1.48</span>
                                <span className="back-cell">5.1</span>
                                <span className="lay-cell">5.5</span>
                                <span className="back-cell">7.2</span>
                                <span className="lay-cell">7.8</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29890696" onclick="MarketSelection('1.171234197','29890696');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Randers v Esbjerg                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                                <span id="fav29890696"><i onclick="FavFunc(29890696,'1.171234197')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.82</span>
                                <span className="lay-cell">1.83</span>
                                <span className="back-cell">4.3</span>
                                <span className="lay-cell">4.4</span>
                                <span className="back-cell">4.4</span>
                                <span className="lay-cell">4.5</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29884548" onclick="MarketSelection('1.171170257','29884548');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Slavia Prague v Sparta Prague                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                                <span id="fav29884548"><i onclick="FavFunc(29884548,'1.171170257')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.83</span>
                                <span className="lay-cell">1.89</span>
                                <span className="back-cell">4</span>
                                <span className="lay-cell">4.2</span>
                                <span className="back-cell">4.4</span>
                                <span className="lay-cell">4.8</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29883373" onclick="MarketSelection('1.171168054','29883373');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Man City v Newcastle                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 22:30:00</time>
                                <span id="fav29883373"><i onclick="FavFunc(29883373,'1.171168054')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.13</span>
                                <span className="lay-cell">1.14</span>
                                <span className="back-cell">11.5</span>
                                <span className="lay-cell">12</span>
                                <span className="back-cell">29</span>
                                <span className="lay-cell">32</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29883385" onclick="MarketSelection('1.171166906','29883385');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Sheff Utd v Wolves                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 22:30:00</time>
                                <span id="fav29883385"><i onclick="FavFunc(29883385,'1.171166906')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">4.2</span>
                                <span className="lay-cell">4.3</span>
                                <span className="back-cell">3.1</span>
                                <span className="lay-cell">3.15</span>
                                <span className="back-cell">2.22</span>
                                <span className="lay-cell">2.24</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29883379" onclick="MarketSelection('1.171167398','29883379');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  West Ham v Burnley                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 22:30:00</time>
                                <span id="fav29883379"><i onclick="FavFunc(29883379,'1.171167398')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.96</span>
                                <span className="lay-cell">1.98</span>
                                <span className="back-cell">3.7</span>
                                <span className="lay-cell">3.75</span>
                                <span className="back-cell">4.5</span>
                                <span className="lay-cell">4.6</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29884368" onclick="MarketSelection('1.171168846','29884368');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Fiorentina v Cagliari                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 23:00:00</time>
                                <span id="fav29884368"><i onclick="FavFunc(29884368,'1.171168846')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.85</span>
                                <span className="lay-cell">1.87</span>
                                <span className="back-cell">3.8</span>
                                <span className="lay-cell">3.85</span>
                                <span className="back-cell">4.9</span>
                                <span className="lay-cell">5</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29884358" onclick="MarketSelection('1.171168965','29884358');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Genoa v Napoli                </a>
                                <time><i className="fa fa-clock-o" /> 08 Jul 2020 23:00:00</time>
                                <span id="fav29884358"><i onclick="FavFunc(29884358,'1.171168965')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">6</span>
                                <span className="lay-cell">6.4</span>
                                <span className="back-cell">4.1</span>
                                <span className="lay-cell">4.2</span>
                                <span className="back-cell">1.66</span>
                                <span className="lay-cell">1.67</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29886828" onclick="MarketSelection('1.171195756','29886828');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Brighton v Liverpool                </a>
                                <time><i className="fa fa-clock-o" /> 09 Jul 2020 00:45:00</time>
                                <span id="fav29886828"><i onclick="FavFunc(29886828,'1.171195756')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">6.6</span>
                                <span className="lay-cell">6.8</span>
                                <span className="back-cell">4.4</span>
                                <span className="lay-cell">4.5</span>
                                <span className="back-cell">1.59</span>
                                <span className="lay-cell">1.6</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29884369" onclick="MarketSelection('1.171168613','29884369');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Torino v Brescia                </a>
                                <time><i className="fa fa-clock-o" /> 09 Jul 2020 01:15:00</time>
                                <span id="fav29884369"><i onclick="FavFunc(29884369,'1.171168613')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.71</span>
                                <span className="lay-cell">1.73</span>
                                <span className="back-cell">3.95</span>
                                <span className="lay-cell">4</span>
                                <span className="back-cell">6</span>
                                <span className="lay-cell">6.2</span>
                              </div>
                            </div>
                            <div id="user_row_ " className="sport_row sportrow-1  matchrow-29884772" onclick="MarketSelection('1.171172381','29884772');" title="Match OODS">
                              <div className="sport_name">
                                <a href="javascript:;">
                                  Barcelona v Espanyol                </a>
                                <time><i className="fa fa-clock-o" /> 09 Jul 2020 01:30:00</time>
                                <span id="fav29884772"><i onclick="FavFunc(29884772,'1.171172381')" className="fa fa-star-o" aria-hidden="true" /></span>
                              </div>
                              <div className="match_status">
                                <span className="going_inplay">Going In-play</span>             </div>
                              <div className="match_odds_front">
                                <span className="back-cell">1.15</span>
                                <span className="lay-cell">1.16</span>
                                <span className="back-cell">10</span>
                                <span className="lay-cell">10.5</span>
                                <span className="back-cell">29</span>
                                <span className="lay-cell">30</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="MatchOddInfo" />
                  </div>

                </div>
              </div>
              {/* /page content */}
              <div id="fancyposition" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="popup_form">
                      <div className="title_popup">
                        <span> Fancy Position</span>
                        <button type="button" className="close" data-dismiss="modal">
                          <div className="close_new"><i className="fa fa-times-circle" /> </div>
                        </button>
                      </div>
                      <div className="content_popup">
                        <div className="popup_form_row">
                          <div className="modal-body" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*footerlinks*/}
              <footer>
                <ul className="menu-links">
                  <li className="item"><a href="#"><img src="http://park9.bet/assets/images/games-img/inplay.png" /><span>Inplay</span></a></li>
                  <li className="item"><a href="javascript:;" className="UserChipData" data-toggle="modal" data-target="#addUser" data-backdrop="static" data-keyboard="false"><img src="http://park9.bet/assets/images/games-img/edit-stake.png" /><span>Edit stake</span></a></li>
                  <li className="item"><a href="#" className="site_title endcooki active"><img src="http://park9.bet/assets/images/games-img/home.png" /></a></li>
                  <li className="item"><a href="#"><img src="http://park9.bet/assets/images/games-img/history.png" /><span>Bet History</span></a></li>
                  <li className="item"><a href="#"><img src="http://park9.bet/assets/images/games-img/logout.png" /><span>Logout</span></a></li>
                </ul>
              </footer>
              {/*footerlinks*/}
              {/*commanpopup*/}
              <div id="commonpopup" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="popup_form">
                      <div className="title_popup">
                        <span>Title Popup</span>
                        <button type="button" className="close" data-dismiss="modal">
                          <div className="close_new"><i className="fa fa-times-circle" /></div>
                        </button>
                      </div>
                      <div className="content_popup">
                        <div className="popup_form_row">
                          <div className="modal-body" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*commanpopup*/}       </div>
          </div>
        </div>
      )
    }
    else {


      return (
        <p>Loading</p>
      )
    }
  }
}


export default Dashboard;