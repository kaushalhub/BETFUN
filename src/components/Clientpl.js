import React, { Component } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Clientpl = () => {
    return (
        <div>
          <Navbar />
    <Sidebar />
        <div className="forModal" />      <div className="container body">
          <div className="main_container" id="sticky">
            <style dangerouslySetInnerHTML={{__html: "\n    .mark-back:hover{background: #4cebdc !important;}\n    .mark-lay:hover{background: #c6f6f2 !important;}\n    .mark-back{background: #7CC4F7 !important;}\n    .mark-lay{background: #FCA4B7 !important;}\n" }} />
            <div className="right_col" role="main">
              <div className="col-md-12">
                <div className="title_new_at"> Client PL </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="clearfix data-background">
                  <input type="hidden" name="ajaxUrl" id="ajaxUrl" defaultValue="clientpl" />
                  <form method="post" className="form-horizontal form-label-left input_mask" id="formSubmit"><input type="hidden" name="compute" defaultValue="fe6602731bf3d65605f0d8f6552a1c9f" /> 	
                    <input type="hidden" name="user_id" id="user_id" defaultValue={145315} />	  
                    <div className="popup_col_2">
                      <input type="text" name="from_date" defaultValue="2020-06-30 00:00:00" id="from-date" className="form-control col-md-7 col-xs-12 has-feedback-left datetimepicker" placeholder="From date" autoComplete="off" />
                    </div>
                    <div className="popup_col_2">
                      <input type="text" name="to_date" defaultValue="2020-06-30 23:59:59" id="to-date" className="form-control col-md-7 col-xs-12 has-feedback-left datetimepicker" placeholder="To date" autoComplete="off" />
                    </div>
                    <div className="block_2 buttonacount">
                      <button type="button" id="submit_form_button" className="blue_button" data-attr="submit"><i className="fa fa-filter" /> Filter</button>
                      <a href="#" className="red_button"><i className="fa fa-eraser" /> Clear</a>
                      <a href="javascript:void(0);" id="backbutton" className="red_button pull-right"><i className="fa fa-eraser" /> Back</a>
                    </div>
                  </form>		   
                </div>  
                <div className>
                  <div id="divLoading"> </div>{/*Loading class */}
                  <div className="custom-scroll data-background appendAjaxTbl">
                    <table className="table table-striped jambo_table bulk_action full-table-clint" id="datatable">
                      <thead>	
                        <tr className="headings">				
                          <th className>Username </th>
                          <th className>Hyper </th>				<th className>Super Master </th>
                          <th className>Master </th>
                          <th className>Total </th>
                          <th className>Amount </th>
                          <th className>M-comm </th>
                          <th className>S-comm </th>
                          <th className>Net-Amount </th>	
                          <th className> User PL</th>	
                        </tr>				
                      </thead>
                      <tbody>
                        <tr><th colSpan={10}>No record found</th></tr>	
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div></div></div></div>
    )
}

export default Clientpl;