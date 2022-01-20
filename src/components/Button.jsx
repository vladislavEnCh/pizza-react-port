import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={classNames('button', props.className, {
        'button--outline': props.outline,
      })}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
