import React, {Component} from 'react';

export default OriginalComponent => class Accordion extends Component {
  state = {
    openItemId: null
  };

  toggleOpenItem = (openItemId) => ev => {
    this.setState({
      openItemId: openItemId === this.state.openItemId ? null : openItemId
    })
  };

  render() {
    return (
      <OriginalComponent
        {...this.props}
        {...this.state}
        toggleOpenItem={this.toggleOpenItem}
      />
    )
  }
}
