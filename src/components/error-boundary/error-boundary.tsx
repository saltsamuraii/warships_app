import React, { Component, PropsWithChildren, ReactNode } from 'react';

interface ErrorBoundaryState {
  error: boolean
}

export default class ErrorBoundary extends Component<PropsWithChildren<object>, ErrorBoundaryState> {
  constructor(props: PropsWithChildren<ReactNode>) {
    super(props);

    this.state = {
      error: false
    };
  }

  componentDidCatch(error: Error) {
    this.setState({
      error: true
    });
    throw new Error(error.message);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <h1>Something gone wrong.... We worked on it.</h1>;
    }
    return children;
  }
}