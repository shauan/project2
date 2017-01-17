import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';


class Share extends React.Component{
  createLocation() {
      axios({
        method: 'POST',
        url: `https://coffee-cake-194f3.firebaseio.com/location/area.json`,
        data: {
          location: this.location.value,
          name: this.name.value,
          coffee: this.coffee.value,
          cake: this.cake.value,
          comment: this.comment.value
        }
      }).then(() => {
        this.props.getPlaces();
        this.location.value = "";
        this.name.value = "";
        this.coffee.value = "";
        this.cake.value = "";
        this.comment.value = "";
      })
    }

    keyPress(e) {
      if (e.charCode === 13) {
        this.createLocation();
      }
    }

    render() {
      return (
<div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
      <div className="form-group sharez">
        <label>Location</label>
        <input
          className="form-control"
          type="text"
          ref={(input) => this.location = input}
          placeholder="Location"
          />
      </div>
      <div className="form-group">
        <label>Name of the venue</label>
        <input
          className="form-control"
          type="text"
          ref={(input) => this.name = input}
          onKeyPress={(e) => this.keyPress(e)}
          placeholder="name" />
      </div>
      <div className="form-group">
        <label>Coffee score</label>
        <input
          className="form-control"
          type="text"
          ref={(input) => this.coffee = input}
          onKeyPress={(e) => this.keyPress(e)}
          placeholder="coffee ranking" />
      </div>
      <div className="form-group">
        <label>Cake score</label>
        <input
          className="form-control"
          type="text"
          ref={(input) => this.cake = input}
          onKeyPress={(e) => this.keyPress(e)}
          placeholder="cake ranking" />
      </div>
      <div className="form-group">
        <label>Cake score</label>
        <input
          className="form-control"
          type="text"
          ref={(input) => this.comment = input}
          onKeyPress={(e) => this.keyPress(e)}
          placeholder="Comment " />
      </div>
        <button
          id="button"
          type="submit"
          onClick={() => this.createLocation()}
          className="xxx">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
      )
    }


}

export default Share;
