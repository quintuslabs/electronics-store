import React,{Component} from 'react';
import "./assets/css/main.css";
import "./assets/css/util.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routes from "./routes";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
        <div>
          <Routes />
        </div>
    );
  }
}

export default App;

