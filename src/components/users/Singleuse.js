import React, { Component } from 'react';

export class Singleuse extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      html_url,
      followers,
      following,
      public_repos,
      public_gists
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}

export default Singleuse;
