import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: initializing state');
    this.state = {
      count: 0,
      derivedValue: ''
    };
  }

  // 1. Mounting & Updating: Sync state with props
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    if (props.syncValue && props.syncValue !== state.derivedValue) {
      return { derivedValue: props.syncValue };
    }
    return null;
  }

  // 2. Mounting Only: DOM/API logic
  componentDidMount() {
    console.log('componentDidMount: component mounted to DOM');
    // Example: Simulate an async call or DOM update
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 3000);
  }

  // 3. Updating: Should the component re-render?
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: check if re-render is needed');
    // Only re-render if count is even (as an example)
    return nextState.count % 10 === 0;
  }

  // 4. Updating: Capture DOM info before update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: capturing scroll or DOM state');
    return `Count before update was ${prevState.count}`;
  }

  // 5. Updating: Use snapshot, do post-update actions
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log('Snapshot:', snapshot);
  }

  // 6. Unmounting: Clean up
  componentWillUnmount() {
    console.log('componentWillUnmount: cleaning up');
    clearInterval(this.timer);
  }

  // Render method (called during mounting & updating)
  render() {
    console.log('render: rendering UI');
    return (
      <div style={{ padding: '1rem', border: '1px solid #aaa' }}>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <p>Derived Value from Props: {this.state.derivedValue}</p>
      </div>
    );
  }
}

export default LifecycleDemo;
