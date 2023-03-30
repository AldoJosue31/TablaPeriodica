import React, { Component, MouseEvent } from "react";
import { elements } from "./_data";

interface Props {
  num: number;
  showInfo: (num: number) => void;
}

interface State {
  hover: boolean;
}

export default class Element extends Component<Props, State> {
  state: State = {
    hover: false,
  };

  openInfo = (event: MouseEvent<HTMLDivElement>) => {
    this.props.showInfo(this.props.num);
  };

  onMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    this.setState({ hover: true });
  };

  onMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    this.setState({ hover: false });
  };

  render() {
    let { num } = this.props;
    let element = elements[num];
    return (
      <div
        title={element.nombre}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.openInfo}
        id="elementos"
        className={`element element-${num} ${element.categoria} ${
          this.state.hover ? "active" : ""
        }`}
      >
        <div className="number">{element.numeroAtomico}</div>
        <div className="symbol">{element.simbolo}</div>
        <div className="element-name">{element.nombre}</div>
      </div>
    );
  }
}