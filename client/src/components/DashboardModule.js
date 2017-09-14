import React,{Component} from 'react';
import {connect}  from 'react-redux';

class DashboardModule extends Component {

  render(){
    return(
      <div>
          <div className="left">
                <div className="leftImage"></div>
              <div className="leftInfo">
                <div className="leftName">
                  <h3>
                  {this.props.authorizedUser ? this.props.authorizedUser.firstname + " " : "First"}
                  {this.props.authorizedUser ? this.props.authorizedUser.lastname : " Last Name"}
                  </h3>
                </div>
                <div className="leftNickName"><h5>{this.props.authorizedUser ? this.props.authorizedUser.handle : "My Handle"}</h5></div>
                <div className="leftDescription"><p>{this.props.authorizedUser ? this.props.authorizedUser.about : "Description of various things about yourself"}</p></div>
                  <button className="btn btn-link action-button personal-button" onClick={this.props.editUserPersonal}
                   type="button">Edit</button>
                 <button className="btn btn-link action-button settings-button" onClick={this.props.editUserSetting}
                  type="button"><span className="fa fa-gear fa-2x fa-spin" aria-hidden="true"></span></button>
              </div>
          </div>
            <div className="right">
              <div className="rightContainer">
                <div className="rightLinks">
                    <h4>Wall</h4>
                      <button className="btn btn-link action-button" onClick={this.props.editUserAttributes}
                     type="button">Edit</button>
                    <hr/>
                      <p><span className="fa fa-plus-square btn-space" aria-hidden="true"></span>{this.props.authorizedUser ? this.props.authorizedUser.favboots : "Favorite Boots"}</p>
                      <p><span className="fa fa-futbol-o btn-space" aria-hidden="true"></span>{this.props.authorizedUser ? this.props.authorizedUser.footballpos : "Football Position"}</p>
                      <p><span className="fa fa-users btn-space" aria-hidden="true"></span>{this.props.authorizedUser ? "Plays for " + this.props.authorizedUser.teamon : "Team I am On"}</p>
                      <p><span className="fa fa-globe btn-space" aria-hidden="true"></span>{this.props.authorizedUser ? "Lives in " + this.props.authorizedUser.location : "Location"}</p>
                      <p><span className="fa fa-user-circle btn-space" aria-hidden="true"></span>{this.props.authorizedUser ? "Supports " + this.props.authorizedUser.teamsupport : "Team I Support"}</p>
                    </div>
                </div>
            </div>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {authorizedUser: state.authorizedUser};
}

export default connect(mapStateToProps)(DashboardModule);