import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './../styles/styles.css';
import logo from './../images/logo.svg';
import location from './../images/location.svg';
import jd from './../images/jd.png';
import MenuLink from './../components/MenuLink';
import data from './../data/person.json';
import ActiveUser from './../components/ActiveUser';
import GridView from './../components/GridView';
import ListView from './../components/ListView';
import FilterOptions from './../components/FilterOptions';
import settings from './../images/settings.svg';
import signOut from './../images/signOut.svg';
import gridView from './../images/gridView_blue.svg';
import listView from './../images/listView_blue.svg';
import { successPeople } from './../actions/action';

export class MainView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      active: 0,
      activeButton: 'GridView',
      searchValue: '',
      selectValue: '',
      menuOpen: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLivesChange = this.handleLivesChange.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentWillMount() {
    this.props.successPeople();
  }

  handleChange(e) {
    this.setState({ activeButton: e.target.value });
  }

  handleUserName(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleLivesChange(val) {
    this.setState({ selectValue: val });
  }

  toggleDropdown() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  closeDropdown() {
    this.setState({ menuOpen: true });
  }

  render() {
    const filteredUsersArray = this.props.people.filter((people) => {
    // const filteredUsersArray = this.state.data.person.filter((people) => {
      return (
        people.firstName.toLowerCase().includes(this.state.searchValue)
        && (!this.state.selectValue || people.city === this.state.selectValue)
      );
    });


    let menuPage;
    switch (this.props.match.params[0]) {
      case 'home':
        menuPage = filteredUsersArray;
        break;
      case 'contacts':
        menuPage = filteredUsersArray.filter(people => people.friend === true);
        break;
      case 'favourites':
        menuPage = filteredUsersArray.filter(people => people.favourite === true);
        break;
      case 'people':
        menuPage = filteredUsersArray;
        break;
      case 'companies':
        menuPage = filteredUsersArray.filter(people => people.position === 'CEO');
        break;
      default:
        menuPage = [];
    }


    let pageView;
    if (this.state.activeButton === 'GridView') {
      pageView = (
        <GridView menuPage={menuPage} />
      );
    } else if (this.state.activeButton === 'ListView') {
      pageView = (
        <ListView menuPage={menuPage} />
      );
    } else pageView = 'oops smth went wrong!';

    const optionsArray = this.props.people.map((people) => {
      return (people.city);
    });
    const citiesList = [...new Set(optionsArray)];
    citiesList.unshift('');


    return (
      <div className="container">
      <div id="menu" onClick={this.toggleDropdown} className={(this.state.menuOpen)? "open" : ""}>
          <div id="nav-icon" onClick={this.toggleDropdown} className={(this.state.menuOpen)? "open" : ""}>  
              <span ></span>
              <span ></span>
              <span ></span>
              <span ></span>
              <span ></span>
              <span ></span>
          </div>
         <div id="links" onClick={this.closeDropdown.bind(this)} className={(this.state.menuOpen)? "active" : ""} >
           <section>
             <ActiveUser data={this.state.data} active={this.state.active} />
             <MenuLink />
             <div className="settingsBlock">
               <div className="settings">
                 <a href="/" >
                   <img src={settings} className="settingImg" alt="settings" />
                   <span>SETTINGS</span>
                 </a>
               </div>
               <div className="settings">
                 <a href="/" >
                   <img src={signOut} className="settingImg" alt="signOut" />
                   <span>SIGN OUT</span>
                 </a>
               </div>
             </div>
           </section>
         </div>
      </div>
        <div className="container_page">
          <header>
            <div className="header">
              <div className="search_input">  
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={this.handleUserName.bind(this)}
                />
              </div>
              <div className="rightHeader">
                <div className="welcomeUser">
                  <div className="welcome">
                    <span>Welcome,</span>
                  </div>
                  <div className="welcomeJD">
                    <img src={jd} className="JD" alt="JD" />
                    <span>John Doe</span>
                  </div>
                </div>
                <div className="header_logo">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </div>
            </div>
            <div className="pageView">
              <div className="headerView">
                <div className="pageName">
                  <h2>{this.props.match.params[0]}</h2>
                </div>
                <div
                  className="view"
                  onSubmit={this.handleSubmit}>
                  <label>
                  <input
                  className="radio radioGridView"
                  type="radio"
                  value="GridView"
                  checked={this.state.activeButton === 'GridView'}
                  onChange={this.handleChange}
                />
                <img src={gridView} alt="gridView" />
                </label>
                <label>
                <input
                  className="radio radioListView"
                  type="radio"
                  value="ListView"
                  checked={this.state.activeButton === 'ListView'}
                  onChange={this.handleChange}
                />
                <img src={listView} alt="listView" />
                </label>
              </div>
              </div>
              <div className="location">
                <img src={location} alt="location" />
                <FilterOptions options={citiesList} changeOption={this.handleLivesChange} />
              </div>
            </div>
          </header>
          <main>
            {pageView}
          </main>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.people.people,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      successPeople,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);