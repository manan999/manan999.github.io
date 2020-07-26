import React from 'react' ;

import './topbar.css'

class TopBar extends React.Component 
{
  state = { isHide: true };

  hideBar = () => {
    const { isHide } = this.state ;

    (window.scrollY>this.prev)?
    isHide && this.setState({ isHide: false })
    : !isHide && this.setState({ isHide: true });

    this.prev = window.scrollY;
  }

  componentDidMount(){
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.hideBar);
  }

  render(){
      const classHide = this.state.isHide ? 'hide' : '';
      return <div className={`topbar ${classHide}`}>topbar</div>;
  }
}

export default TopBar ;
