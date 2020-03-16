var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = function (_React$Component) {
  _inherits(Shape, _React$Component);

  function Shape() {
    _classCallCheck(this, Shape);

    return _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).apply(this, arguments));
  }

  _createClass(Shape, [{
    key: "render",
    value: function render() {
      var shapeStyle = {
        padding: 10,
        margin: 20,
        display: "inline-block",
        backgroundColor: this.props.bgColor,
        borderRadius: this.props.perCent,
        width: this.props.size,
        height: this.props.size
      };
      return React.createElement("div", { style: shapeStyle });
    }
  }]);

  return Shape;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props, context) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));

    _this2.timerTick = function () {
      _this2.setState({
        count: _this2.state.count + 2
      });
    };

    _this2.state = {
      count: 0
    };
    return _this2;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setInterval(this.timerTick, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var colors = ["#77b3d1", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C", "#85AFC0", "#296573", "#AA8552", "#CC0E4C", "#567187", "#c6c976", "#967c64", "#e497ed", "#d24cff", "#e2ceb1", "#cc999e", "#97bf9a"];
      var renderData = [];
      for (var i = 0; i < 100; i++) {
        var randomColor = Math.floor(Math.random() * colors.length);
        var randomSize = Math.floor(Math.random() * 125) + 1;
        var randomPercent = Math.floor(Math.random() * 100) + 1;

        renderData.push(React.createElement(Shape, {
          bgColor: colors[randomColor],
          size: randomSize,
          perCent: randomPercent + "%"
        }));
      }
      return React.createElement(
        "div",
        null,
        renderData
      );
    }
  }]);

  return App;
}(React.Component);

var destination = document.querySelector("#container");
ReactDOM.render(React.createElement(App, null), destination);