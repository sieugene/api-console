import React from 'react';
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
    position: relative;
    cursor: col-resize;
    flex-shrink: 0;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none; /* Likely future */
  }
  .resizer-button {
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    right: 0;
    display: block;
    height: 20px;
    width: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      background: rgba(0, 0, 0, 0.2);
      height: 4px;
      width: 4px;
      display: block;
      border-radius: 50%;
      margin-bottom: 3px;
    }
  }
`;

export class ResizablePanels extends React.Component {
  eventHandler = null;

  constructor() {
    super();
    this.state = {
      isDragging: false,
      panels: this.storagePanels,
    };
  }

  get storagePanels() {
    let panels;
    if (localStorage.getItem('resize')) {
      panels = JSON.parse(localStorage.getItem('resize'));
    } else {
      panels = [0, Math.floor(window.innerWidth / 2), 0];
    }
    return {
      ...panels,
      // hardcode
      '1': this.maxSizePanels(1, panels),
      '2': this.maxSizePanels(2, panels),
    };
  }

  set storagePanels(panels) {
    localStorage.setItem('resize', JSON.stringify(panels));
  }

  maxSizePanels(idx, panels) {
    //If sizes will be changed
    return window.innerWidth >= panels[idx] ? panels[idx] : window.innerWidth;
  }

  componentDidMount() {
    // No use in strict mode!
    // ReactDOM.findDOMNode(this).addEventListener('mousemove', this.resizePanel);
    // ReactDOM.findDOMNode(this).addEventListener('mouseup', this.stopResize);
    // ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.stopResize);
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
      this.setState(({panels, currentPanel, delta}) => {
        const panelsTotal = {
          ...panels,
          [currentPanel]: (panels[currentPanel] || 0) - delta,
          [currentPanel - 1]: (panels[currentPanel - 1] || 0) + delta,
        };
        this.storagePanels = panelsTotal;
        return {
          isDragging: false,
          panels: {
            ...panelsTotal,
          },
          delta: 0,
          currentPanel: null,
        };
      });
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
      <ResizableStyles onMouseMove={this.resizePanel} onMouseUp={this.stopResize} onMouseLeave={this.stopResize}>
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
                >
                  <div className="resizer-button">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>,
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
