import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import Form from "./Components/Form.js";
import Results from "./Components/Results.js";
import Loading from "./Components/Loading.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: {
        loading: false,
        error: false,
        data: []
      }
    };
  }

  getGifs = str => {
    this.setState({
      ...this.state.gifs,
      loading: true
    });

    axios
      .get(
        "https://api.tenor.com/v1/search?q=" +
          str +
          "&key=4VLCGPAHTCXL&limit=10"
      )
      .then(results => {
        this.setState({
          gifs: {
            ...this.state.gifs,
            data: [...results.data.results],
            loading: false
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Find the perfect GIF!</h1>
        <Form getGifs={this.getGifs} />
        {this.state.gifs.loading && <Loading />}
        {this.state.gifs.data.length !== 0 && (
          <Results gifs={this.state.gifs.data} />
        )}
      </div>
    );
  }
}
