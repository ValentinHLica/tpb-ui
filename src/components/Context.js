import React, { Component } from "react";

const Context = React.createContext();
export default class Provider extends Component {
  state = {
    data: [],
    searchTorrents: (torrents) => {
      this.setState({
        data: torrents,
      });
    },
    query: "",
    setSearchQuery: (searchQuery) => {
      this.setState({ query: searchQuery });
    },
    category: [
      {
        name: "All",
        code: "0",
        status: true,
      },
      {
        name: "Audio",
        code: "100",
        status: false,
      },
      {
        name: "Video",
        code: "200",
        status: false,
      },
      {
        name: "App",
        code: "300",
        status: false,
      },
      {
        name: "Games",
        code: "400",
        status: false,
      },
      {
        name: "NSFW",
        code: "500",
        status: false,
      },
      {
        name: "Other",
        code: "600",
        status: false,
      },
    ],
    setcategory: (newCategory) => {
      this.setState({
        category: newCategory,
      });
    },
    pagination: [1, 0],
    setPagination: (pagination) => {
      this.setState({ pagination });
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context };
export const Consumer = Context.Consumer;
