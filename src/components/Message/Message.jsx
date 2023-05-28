import PropTypes from 'prop-types';

import { Text } from 'components/Text/Text';

const Message = ({ text }) => <Text textAlign="center">{text}</Text>;

export default Message;

Message.protoTypes = {
  text: PropTypes.string.isRequired,
};
