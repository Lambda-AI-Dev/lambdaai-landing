/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import qs from "qs";
import axios from "axios";

import Nav3 from "./Nav3";
import Banner5 from "./Banner5";
import Feature3 from "./Feature3";
import Feature0 from "./Feature0";
import Teams1 from "./Teams1";
import Footer1 from "./Footer1";

import {
  Nav30DataSource,
  Banner50DataSource,
  Feature30DataSource,
  Feature00DataSource,
  Teams10DataSource,
  Footer10DataSource,
} from "./data.source";
import "./less/antMotionStyle.less";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }

    // code from AWS cognito
    const code = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).code;

    if (code) {
      const client_id = "3endpj3orahlifqfu956vkrh5r";
      const authURL = `https://auth-ac.lambdaai.dev/oauth2/token?grant_type=authorization_code&code=${code}&client_id=${client_id}&redirect_uri=https://lambdaai.dev`;

      axios
        .post(authURL)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature3
        id="Feature3_0"
        key="Feature3_0"
        dataSource={Feature30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature0
        id="Feature0_0"
        key="Feature0_0"
        dataSource={Feature00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams1
        id="Teams1_0"
        key="Teams1_0"
        dataSource={Teams10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
