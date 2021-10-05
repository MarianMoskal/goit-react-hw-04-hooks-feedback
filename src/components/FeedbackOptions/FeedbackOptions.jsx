import { Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

function FeedbackOptions(props) {
  const { eventHandler, names } = props;

  return names.map((name) => (
    <Button key={name} id={name} type="button" onClick={eventHandler}>
      {name}
    </Button>
  ));
}
FeedbackOptions.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  eventHandler: PropTypes.func,
};

export default FeedbackOptions;
