import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import facebook from './../images/facebook.png';
import instagram from './../images/instagram.png';
import linkedin from './../images/linkedin.png';
import skype from './../images/skype.png';
import twitter from './../images/twitter.png';
import starFavourite from './../images/starFavourite.svg';

import { requestChangeFriend, requestChangeFavourite } from './../actions/action';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.content = {
      facebook,
      instagram,
      linkedin,
      skype,
      twitter,
    };
    this.deleteFavourite = this.deleteFavourite.bind(this);
  }


  deleteFavourite(id) {
    const findPeople = this.props.menuPage.find(people => people.id === id);
    if (findPeople.friend === true) {
      findPeople.favourite = false;
    }
  }

  render() {
    const returnPeople =
      this.props.menuPage.map((people) => {
        let star;
        if (people.favourite === true) {
          star = <img src={starFavourite} className="star" alt="star" />;
        }
        let buttonFavourite;
        if (people.friend === true) {
          buttonFavourite = 
            <button
            onClick={() => this.props.requestChangeFavourite(people.id)}
            // onClick={ this.handleClickFavourite.bind(this, people.favourite) }
            className={people.favourite ? 'deleteFavouriteTrue' : 'addFavourite'}
          >
            {people.favourite ? 'DELETE FROM FAVOURITES' : ' ADD TO FAVOURITES'}
          </button>
        }

        return (
          <div className="about" key={people.id}>
            <div className="people_img">
              <img src={people.avatar} className="avatar" alt={people.firstName} />
              {star}
            </div>
            <div className="name">
              {people.firstName + ' '}
              {people.lastName}
            </div>
            <div className="job">
              {people.company + ', '}
              {people.position}
            </div>
            <div className="links">
              {
                Object.keys(people.social).map(network => {
                  const img = this.content[network];
                  return <a href={people.social[network]}><img src={img} className="link_img" alt="link_img" /></a>
                })
              }
            </div>
            <div className="live">
              {people.country + ', '}
              {people.city}
            </div>
            <div className="buttonChange">
              <button
                onClick={() => this.props.requestChangeFriend(people.id, this.deleteFavourite(people.id))}
                className={people.friend ? 'deleteFriend' : 'addFriend'}
                // className={`btn btn-default ${styles.btnAction}`} 
              >
                {people.friend ? 'DELETE FROM CONTACTS' : ' ADD TO CONTACTS'}
              </button>
              {buttonFavourite}
            </div>
          </div>
        );
      });

    return (
      <div>
        <div className="ListView">
          {returnPeople}
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
      requestChangeFriend,
      requestChangeFavourite,
    }, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ListView);