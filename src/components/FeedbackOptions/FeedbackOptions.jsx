import { Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

function FeedbackOptions(props) {
  const { eventHandler, names } = props;
  return (
    <>
      <Button id="good" type="button" onClick={eventHandler}>
        {names[0]}
      </Button>
      <Button id="neutral" type="button" onClick={eventHandler}>
        {names[1]}
      </Button>
      <Button id="bad" type="button" onClick={eventHandler}>
        {names[2]}
      </Button>
    </>
  );
}
FeedbackOptions.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  eventHandler: PropTypes.func,
};

export default FeedbackOptions;
