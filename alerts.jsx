var React = require("react");
require("./styles.less");

var TextInput = React.createClass({
	propTypes: {
		label: React.PropTypes.string.isRequired,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string,
	},
	render: function () {
		return (
			<div>
				<label>
					{this.props.label}
				</label>
				{errorSpan}
				<input
					placeholder={this.props.placeholder}
					type="text"
					value={this.props.value}/>
				<p>{this.props.value}</p>
			</div>
		);
	}
});

module.exports = TextInput;
