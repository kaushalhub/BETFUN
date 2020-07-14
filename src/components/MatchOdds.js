import React, { Component } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Sidebet from './SideBet';
import '../App.css';

export default class MatchOdds extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: '',
          userName: '',
          description: '',
          selection: '',
          odds: '',
          stack: '',
          status: '',
          bettype: '',
          redirectToReferrer: false
        };
        
        //this.save = this.save.bind(this);
      }


      componentDidMount() {
         {
        
              let url = 'http://35.154.81.179:4000/api/placeBet'
              let data = { userName: this.state.userName, description: this.state.description, selection: this.state.selection, odds: this.state.odds, stack: this.state.stack, status: this.state.status, bettype: this.state.bettype }
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
                  alert("User Added Successfully")
                })
        
        
            }
        
          }

    render() {

    return (

        <div>
            <Navbar />
            <Sidebar />
            <Sidebet />
        <div className="col-md-8 matchodds">
        <div id="UpCommingData" style={{ display: 'none' }} />
        <div id="MatchOddInfo"><style dangerouslySetInnerHTML={{ __html: "\n   .block_box_btn button{margin-right: 3px;}\n" }} />
          <div className="fullrow matchBoxMain  matchBox_29905278 matchBoxs_1171389306" style={{}}>
            <div className="modal-dialog-staff">
              {/* dialog body */}
              <div className="match_score_box">
                <div className="modal-header mod-header">
                  <div className="block_box">
                    <span id="tital_change">
                      <span id="fav29905278"><i onclick="FavFunc(29905278,'1.171389306')" className="fa fa-star-o" aria-hidden="true" /></span>
                      <input type="hidden" defaultValue="Match Name" id="sportName_29905278" />
                    </span>
                    <div className="block_box_btn">
                      <button className="btn btn-primary btn-xs" >Bets</button>
                    </div>
                    {/* Bets Modal */}

       
                  </div>
                </div>
                <div className="score_area"><span style={{}} className="matchScore" id="matchScore_29905278"> </span> </div>
              </div>
              <div className="matchClosedBox_1171389306" style={{ display: 'none' }}>
                <div className="fullrow fullrownew">
                  <div className="pre-text">
                    <br />
                    <span className="match-colsed"> Closed </span>
                  </div>
                  <div className="matchTime">
                    14/07/2020 01:30 PM          </div>
                </div>
                <div>
                  <div className="closedBox">
                    <h1>Closed</h1>
                  </div>
                </div>
              </div>
              <div className="sportrow-4 matchOpenBox_1171389306">
                <div className="match-odds-sec">
                  <div className="item match-status">
                    Match Odds
</div>
                  <div className="item match-status-odds">
                    <span className="going_inplay"> Going In-play </span>
                    <span className="click-tv"><img className="tv-icons" onclick="showTv();" src="http://park9.bet/assets/images/tv-screen.png" /></span>
                  </div>
                  <div className="item match-shedule" id="demo_29905278">0d 0h 38m 19s </div>
                </div>
                <div className="fullrow MatchIndentB" style={{ position: 'relative' }}>
                  <table className="table table-striped  bulk_actions matchTable1171389306" id="matchTable29905278">
                    <tbody className="betting-disabled">
                      <tr className="headings mobile_heading">
                        <th className="fix_heading color_red">
                          Min stake:100 Max stake:50000                   </th>
                        <th>    </th>
                        <th>    </th>
                        <th className="back_heading_color">Back</th>
                        <th className="lay_heading_color">Lay</th>
                        <th>    </th>
                        <th>    </th>
                      </tr>
                      <tr id="user_row0" className="back_lay_color runner-row-32047099">
                        <td>
                          <p className="runner_text" id="runnderName0">Seaside CC </p>
                          <p className="blue-odds" id="Val1-117138930632047099">0</p>
                          <span className="runner_amount" style={{ color: 'black' }} id="32047099_maxprofit_loss_runner_1171389306">0</span>
                          <input type="hidden" className="position_1171389306" id="selection_0" data-id={32047099} defaultValue={0} />
                        </td>
                        <td className="32047099_0availableToBack2_price_1171389306">
                          <span id="32047099_0availableToBack2_price_1171389306">1.58</span>
                          <span id="32047099_0availableToBack2_size_1171389306">6354.00</span>
                        </td>
                        <td className="32047099_0availableToBack1_price_1171389306">
                          <span id="32047099_0availableToBack1_price_1171389306">1.59</span>
                          <span id="32047099_0availableToBack1_size_1171389306">2430.00</span>
                        </td>
                        <td className="mark-back 32047099_0availableToBack0_price_1171389306">
                          <span id="32047099_0availableToBack0_price_1171389306">1.6</span>
                          <span id="32047099_0availableToBack0_size_1171389306">7916.00</span>
                        </td>
                        {/*- availableToLay */}
                        <td className="mark-lay 32047099_0availableToLay0_price_1171389306">
                          <span id="32047099_0availableToLay0_price_1171389306">1.62</span>
                          <span id="32047099_0availableToLay0_size_1171389306">44960.00</span>
                        </td>
                        <td className="32047099_0availableToLay1_price_1171389306">
                          <span id="32047099_0availableToLay1_price_1171389306">1.63</span>
                          <span id="32047099_0availableToLay1_size_1171389306">8452.00</span>
                        </td>
                        <td className="32047099_0availableToLay2_price_1171389306">
                          <span id="32047099_0availableToLay2_price_1171389306">1.68</span>
                          <span id="32047099_0availableToLay2_size_1171389306">10268.00</span>
                        </td>
                      </tr>
                      {/*- TD FOR RUNNER VALUE ONE --*/}
                      <tr id="user_row1" className="back_lay_color runner-row-32359254">
                        <td>
                          <p className="runner_text" id="runnderName1">Jonkoping CA </p>
                          <p className="blue-odds" id="Val1-117138930632359254">0</p>
                          <span className="runner_amount" style={{ color: 'black' }} id="32359254_maxprofit_loss_runner_1171389306">0</span>
                          <input type="hidden" className="position_1171389306" id="selection_0" data-id={32359254} defaultValue={0} />
                        </td>
                        <td className="32359254_0availableToBack2_price_1171389306">
                          <span id="32359254_0availableToBack2_price_1171389306">2.48</span>
                          <span id="32359254_0availableToBack2_size_1171389306">6956.00</span>
                        </td>
                        <td className="32359254_0availableToBack1_price_1171389306">
                          <span id="32359254_0availableToBack1_price_1171389306">2.58</span>
                          <span id="32359254_0availableToBack1_size_1171389306">5340.00</span>
                        </td>
                        <td className="mark-back 32359254_0availableToBack0_price_1171389306">
                          <span id="32359254_0availableToBack0_price_1171389306">2.6</span>
                          <span id="32359254_0availableToBack0_size_1171389306">28014.00</span>
                        </td>
                        {/*- availableToLay */}
                        <td className="mark-lay 32359254_0availableToLay0_price_1171389306">
                          <span id="32359254_0availableToLay0_price_1171389306">2.68</span>
                          <span id="32359254_0availableToLay0_size_1171389306">4726.00</span>
                        </td>
                        <td className="32359254_0availableToLay1_price_1171389306">
                          <span id="32359254_0availableToLay1_price_1171389306">2.7</span>
                          <span id="32359254_0availableToLay1_size_1171389306">1432.00</span>
                        </td>
                        <td className="32359254_0availableToLay2_price_1171389306">
                          <span id="32359254_0availableToLay2_price_1171389306">2.74</span>
                          <span id="32359254_0availableToLay2_size_1171389306">3664.00</span>
                        </td>
                      </tr>
                      {/*- TD FOR RUNNER VALUE ONE --*/}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="otherMarket_29905278" />
              <div className="fullrow margin_bottom fancybox" id="fancyM_29905278">
                <div style={{ display: 'none' }} className="fancy-table" id="fbox29905278">
                  <div className="fancy-heads">
                    <div className="event-sports">&nbsp;&nbsp; </div>
                    <div className="fancy_buttons">
                      <div className="fancy-backs head-no">
                        <strong>NO</strong>
                      </div>
                    </div>
                    <div className="fancy_buttons">
                      <div className="fancy-lays head-yes">
                        <strong>YES</strong>
                      </div>
                    </div>
                  </div>
                  <div className="fancyAPI" />
                  <div className="fancyLM" />
                </div>
              </div>
              <div id="tv-box-popup">
              </div>
            </div>
          </div></div>
      </div>
      </div>
    )
}

}
