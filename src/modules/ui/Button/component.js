import React from 'react';
import getClassNames from 'classnames';

import { Loader } from './loader';
import styles from './styles.module.css';

export const Component = ({
  children,
  isCentered,
  isCompact,
  isDisabled,
  isLoading,
  onClick,
}) => (
  <button
    className={getClassNames(styles.button, {
      [styles.centered]: isCentered,
      [styles.compact]: isCompact,
      [styles.isDisabled]: isDisabled || isLoading,
    })}
    onClick={onClick}
  >
    {isLoading ? <Loader /> : children}
  </button>
);

Component.displayName = 'Button';
