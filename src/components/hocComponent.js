import React from 'react';

const hocComponent = (ChildComponent) => {
  class ComposedComponent extends React.Component {
    constructor(props) {
      super(props);
      console.log('this is higherOrderComponent!')
    }
    
    render() {
      // 記得要用 ...this.props 把所有原本的 props 內容帶回到 ChildComponent 中
      return <ChildComponent {...this.props} />;
    }
  }

  return ComposedComponent;
};

export default hocComponent;