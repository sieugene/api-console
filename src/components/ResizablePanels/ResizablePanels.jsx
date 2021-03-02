import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ResizableStyles = styled.div`
  .panel-container {
    display: flex;
    min-height: 300px;
  }

  .panel {
    background: white;
    border: 1px solid gray;
    padding: 15px;
  }
  .panel:first-child {
  }

  .resizer {
    width: 8px;
    background: darkGray;
    position: relative;
    cursor: col-resize;
    flex-shrink: 0;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none; /* Likely future */
  }

  .resizer::after,
  .resizer::before {
    content: '';
    border-left: 1px solid #333;
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    right: 0;
    display: inline-block;
    height: 20px;
    margin: 0 2px;
  }
  .resizer::before {
    left: 0;
  }
`;

export class ResizablePanels extends React.Component {
  eventHandler = null;

  constructor() {
    super();

    this.state = {
      isDragging: false,
      panels: [0, Math.floor(window.innerWidth / 2), 0],
    };
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('mousemove', this.resizePanel);
    ReactDOM.findDOMNode(this).addEventListener('mouseup', this.stopResize);
    ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.stopResize);
  }

  startResize = (event, index) => {
    this.setState({
      isDragging: true,
      currentPanel: index,
      initialPos: event.clientX,
    });
  };

  stopResize = () => {
    if (this.state.isDragging) {
      console.log(this.state);
      this.setState(({panels, currentPanel, delta}) => ({
        isDragging: false,
        panels: {
          ...panels,
          [currentPanel]: (panels[currentPanel] || 0) - delta,
          [currentPanel - 1]: (panels[currentPanel - 1] || 0) + delta,
        },
        delta: 0,
        currentPanel: null,
      }));
    }
  };

  resizePanel = (event) => {
    if (this.state.isDragging) {
      const delta = event.clientX - this.state.initialPos;
      this.setState({
        delta: delta,
      });
    }
  };

  render() {
    const rest = this.props.children.slice(1);
    return (
      <ResizableStyles>
        <div className="panel-container" onMouseUp={() => this.stopResize()}>
          <div className="panel" style={{width: `calc(100% - ${this.state.panels[1]}px - ${this.state.panels[2]}px)`}}>
            {this.props.children[0]}
          </div>
          {[].concat(
            ...rest.map((child, i) => {
              return [
                <div
                  onMouseDown={(e) => this.startResize(e, i + 1)}
                  key={'resizer_' + i}
                  style={this.state.currentPanel === i + 1 ? {left: this.state.delta} : {}}
                  className={`resizer ${this.state.currentPanel === i + 1 ? ' active' : ''}`}
                ></div>,
                <div key={'panel_' + i} className={`panel`} style={{width: this.state.panels[i + 1]}}>
                  {child}
                </div>,
              ];
            })
          )}
        </div>
      </ResizableStyles>
    );
  }
}
