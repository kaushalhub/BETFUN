import React, { Component } from 'react'


const SideBet = () => {
  return (
    <div className="col-md-4 col-xs-12 matchBox">
      <div className="other-items" style={{ display: 'none' }}>
        <div className="balance-box">
          <div className="panel-heading">
            <h3 className="bal-tittle">Top Casino Games </h3>
            <span className="pull-right clickable"><i className="fa fa-chevron-down" /></span>
          </div>
          <div className="balance-panel-body" style={{ display: 'block' }}>
          </div>
        </div>
      </div>
      <div className="betSlipBox" style={{}}>
        <div className="betslip-head">
          <span id="tital_change" className="item">Bet Slip</span>
          <a href="javascript:;" className="UserChipData" data-toggle="modal" data-target="#exampleModal" data-backdrop="static" data-keyboard="false">
            Edit Stake
        </a>
        </div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Chip Setting</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
              <div class="modal-body row">
                <div class="col-md-6">
                  <label>Chips Name 1:</label>
                <input type="text" className="form-control" value="500" />

                <label>Chips Name 2:</label>
                <input type="text" className="form-control" value="2000" />

                <label>Chips Name 3:</label>
                <input type="text" className="form-control" value="5000" />

                <label>Chips Name 4:</label>
                <input type="text" className="form-control" value="25000" />

                <label>Chips Name 5:</label>
                <input type="text" className="form-control" value="50000" />

                <label>Chips Name 6:</label>
                <input type="text" className="form-control" value="100000" /> 
                </div>
                <div class="col-md-6">
                <label>Chips Value 1:</label>
                <input type="text" className="form-control" value="500" />

                <label>Chips Value 2:</label>
                <input type="text" className="form-control" value="2000" />

                <label>Chips Value 3:</label>
                <input type="text" className="form-control" value="5000" />

                <label>Chips Value 4:</label>
                <input type="text" className="form-control" value="25000" />

                <label>Chips Value 5:</label>
                <input type="text" className="form-control" value="100000" />

                <label>Chips Value 6:</label>
                <input type="text" className="form-control" value="Enter" />
                </div>
            </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary text-center">Update ChipSetting</button>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
        <div>
          <div className="betBox border-box" style={{ display: 'none' }}>
            <div className="block_box">
              <span id="msg_error" /><span id="errmsg" />
              <div className="loader" style={{ display: 'none' }}>
                <div className="spinner">
                  <div className="loader-inner box1" />
                  <div className="loader-inner box2" />
                  <div className="loader-inner box3" />
                </div>
              </div>
              <form method="POST" id="placeBetSilp"><input type="hidden" name="compute" defaultValue="0868b55786c39fbc0074796526de70db" />
                <label className="control-label m-t-xs BetFor"> Yet (Bet For)</label>
                <div className="liabilityprofit" id=" ">
                  <span className="stake_label">Profit</span>
                  <div className="stack_input_field">
                    <span id="profitData" style={{ color: 'rgb(0, 124, 14)', fontWeight: 'bold' }}> 0.00</span>
                  </div>
                </div>
                <div className="liabilityprofit" id=" ">
                  <span className="stake_label">Loss</span>
                  <div className="stack_input_field">
                    <span id="LossData" style={{ color: 'rgb(255, 0, 0)', fontWeight: 'bold' }}> 0.00</span>
                  </div>
                </div>
                <div id="ShowRunnderName" className="match_runner_name">
                </div>
                <div className="odds-stake">
                  <div className="item form-group full_rowOdd">
                    <span className="stake_label">Odd</span>
                    <div className="stack_input_field numbers-row">
                      <input type="number" step="0.01" id="ShowBetPrice" className="calProfitLoss odds-input form-control  CommanBtn" />
                    </div>
                  </div>
                  <div className="item form-group" id=" ">
                    <span className="stake_label">Stake</span>
                    <div className="stack_input_field numbers-row">
                      <input type="number" pattern="[0-9]*" step={1} id="stakeValue" className="calProfitLoss stake-input form-control  CommanBtn" />
                      <input type="hidden" name="selectionId" id="selectionId" defaultValue className="form-control" />
                      <input type="hidden" name="matchId" id="matchId" defaultValue className="form-control" />
                      <input type="hidden" name="isback" id="isback" defaultValue className="form-control" />
                      <input type="hidden" name="MarketId" id="MarketId" defaultValue className="form-control" />
                      <input type="hidden" name="placeName" id="placeName" defaultValue className="form-control" />
                      <input type="hidden" name="text" id="stackcount" defaultValue={0} className="form-control" />
                      <input type="hidden" name="text" id="isfancy" defaultValue={0} className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="betPriceBox">
                  <button className="btn  btn-success CommanBtn  chipName1" type="button" value={500} onclick="StaKeAmount(this);">500</button><button className="btn  btn-success CommanBtn  chipName2" type="button" value={2000} onclick="StaKeAmount(this);">2000</button><button className="btn  btn-success CommanBtn  chipName3" type="button" value={5000} onclick="StaKeAmount(this);">5000</button><button className="btn  btn-success CommanBtn  chipName4" type="button" value={25000} onclick="StaKeAmount(this);">25000</button><button className="btn  btn-success CommanBtn  chipName5" type="button" value={50000} onclick="StaKeAmount(this);">50000</button><button className="btn  btn-success CommanBtn  chipName6" type="button" value={100000} onclick="StaKeAmount(this);">100000</button>                        <button className="btn  btn-success CommanBtn " type="button" onclick="ClearStack( );">Clear</button>
                </div>
                <div className="betFooter">
                  <button className="btn btn-danger CommanBtn" type="button" onclick="ClearAllSelection();">Clear All</button>
                  <button className="btn btn-success  CommanBtn placebet" type="button" onclick="PlaceBet();">Place Bet</button>
                  <button className="btn btn-success CommanBtn placefancy" type="button" onclick="PlaceFancy();" style={{ display: 'none' }}>Place Bet</button>
                </div>
              </form>
            </div>
          </div>
          <div className="tab_bets">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item betdata active-all active">
                <a className="allbet" href="javascript:void(0);" onclick="getDataByType(this,'4');"><span className="bet-label">All Bet</span> <span id="cnt_row">(0)</span></a>
              </li>
              <li className="nav-item betdata active-unmatch" style={{ display: 'none' }}>
                <a className="unmatchbet" href="javascript:void(0);" onclick="getDataByType(this,'2');"><span className="bet-label">UnMatch Bet</span> <span id="cnt_row1">(0)</span> </a>
              </li>
              <li className="nav-item betdata">
                <a className="unmatchbet" href="javascript:void(0);" onclick="getDataByType(this,'3');"><span className="bet-label">Fancy Bet</span> <span id="cnt_row3">(0)</span> </a>
              </li>
              <li className="nav-item active-position"><a className="currentposition" href="javascript:void(0);" onclick="getDataByType(this,'5');">Current Position</a></li>
              <a className="btn full-btn" onclick="viewAllMatch()" href="javascript:void(0);"><img src="http://park9.bet/assets/images/full-size-btn.png" alt="..." /></a>
            </ul>
          </div>
        </div>
      </div>
      {/*- Match UnMatch data -*/}
      <div className id="MatchUnMatchBetaData"><style dangerouslySetInnerHTML={{ __html: "\n.searchbtnn{margin-right:20px;}\n" }} />
        <div className="border-box" id="accountView" role="main">
          <div className="fullrow">
            <div className="modal-dialog-staff">
              <div className="modal-content">
                <div className="modal-body"><span id="msg_error" /><span id="errmsg" />
                  <div className="match_bets MachShowHide">
                    <table className="table table-striped jambo_table bulk_action">
                      <thead>
                        <tr className="headings">
                          <td>No.</td>
                          <td>Runner</td>
                          <td> Client</td>
                          <td>Odds</td>
                          <td>Stack</td>
                          <td>Bet Type</td>
                          {/*td>P&L</td*/}
                          <td>Time</td>
                          <td>ID</td>
                          <td> IP</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*- User Current Position  -*/}
      <div className id="getUserPosition" style={{ display: 'none' }}>
      </div>
    </div>
  )
}


export default SideBet;