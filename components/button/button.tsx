import React, { Component } from 'react';
import classNames from 'classnames';
import { getPrefix } from '../_util/method';
import './style/index.less';

export interface ButtonProps {
  type?: 'success' | 'error' | 'warn' | 'info'
  className?: string
}

export default class Button extends Component<ButtonProps> {

  render() {
    const { type = 'info' } = this.props
    const prefix = getPrefix('alert')
    const className = classNames(prefix, `${prefix}-${type}`)
    return <div className={className}>{this.props.children}</div>
  }
}
