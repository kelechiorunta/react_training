import React, { Component, type PropsWithChildren } from "react";

type State = {
  // color: string;
  count: number;
};

type Props = PropsWithChildren<unknown>;

export default class ClassTimerComponent extends Component<Props, State> {
  
// Mounting Phase
  constructor(props: Props) {
    super(props);

    this.state = {
      // color: "red",
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  // componentWillUnmount() {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <div>{this.props.children}</div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
