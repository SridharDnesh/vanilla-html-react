"use strict";

const e = React.createElement;

class LikeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
      dislikeCount: 0,
    };
  }

  render() {
    return e(
      React.Fragment,
      null,
      e(
        "p",
        null,
        `${this.state.likeCount} likes | ${this.state.dislikeCount} dislikes`
      ),
      e(
        LikeButton,
        {
          count: this.state.likeCount,
          handleClick: () =>
            this.setState((prevState) => ({ likeCount: prevState.likeCount + 1 })),
        },
        null
      ),
      e(
        DislikeButton,
        {
          count: this.state.dislikeCount,
          handleClick: () =>
            this.setState((prevState) => ({
              dislikeCount: prevState.dislikeCount + 1,
            })),
        },
        null
      )
    );
  }
}

class LikeButton extends React.Component {
  render() {
    return e(
      "button",
      {
        onClick: () => this.props.handleClick(),
      },
      `Like`
    );
  }
}

class DislikeButton extends React.Component {
  render() {
    return e(
      "button",
      {
        onClick: () => this.props.handleClick(),
      },
      `Dislike`
    );
  }
}

const domContainer = document.querySelector("#like_section_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeSection));

document.onerror = (err) => {
  console.log(err);
};
