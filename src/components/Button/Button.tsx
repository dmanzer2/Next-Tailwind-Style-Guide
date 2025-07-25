'use client';

import React, { forwardRef } from 'react';
import { useRipple } from '../../hooks/useRipple';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   */
  variant?: 'primary' | 'secondary' | 'coral' | 'seafoam' | 'lavender' | 'outline' | 'ghost' | 'link';
  
  /**
   * The size of the button
   */
  size?: 'sm' | 'md' | 'lg' | 'icon';
  
  /**
   * Whether the button should take the full width of its container
   */
  fullWidth?: boolean;
  
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;
  
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Additional CSS classes to apply
   */
  className?: string;
  
  /**
   * Whether to disable the ripple effect
   */
  disableRipple?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  disableRipple = false,
  children,
  onClick,
  ...props
}, ref) => {
  const createRipple = useRipple();

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'coral':
        return 'bg-coral-500 hover:bg-coral-600 text-white';
      case 'seafoam':
        return 'bg-seafoam-400 hover:bg-seafoam-600 text-gray-900';
      case 'lavender':
        return 'bg-lavender-500 hover:bg-lavender-600 text-white';
      case 'outline':
        return 'border-2 border-solid border-gray-600 dark:border-gray-300 text-foreground hover:bg-gray-300 dark:hover:bg-gray-700';
      case 'ghost':
        return 'hover:bg-gray-500 dark:hover:bg-gray-800 text-foreground hover:text-white';
      case 'link':
        return 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline hover:no-underline';
      default:
        return 'btn-primary';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return variant === 'link' ? 'text-sm' : 'px-2 py-1 text-sm';
      case 'md':
        return variant === 'link' ? '' : 'px-4 py-2';
      case 'lg':
        return variant === 'link' ? 'text-lg' : 'px-6 py-3 text-lg';
      case 'icon':
        if (variant === 'primary') {
          return 'btn-primary-icon w-10 h-10 p-0';
        }
        return 'w-10 h-10 p-0';
      default:
        return variant === 'link' ? '' : 'px-4 py-2';
    }
  };

  const baseClasses = [
    variant !== 'link' && 'rounded-lg',
    variant !== 'link' && 'font-medium',
    'transition-colors',
    'inline-flex',
    'items-center',
    variant !== 'link' && 'justify-center',
    'cursor-pointer',
    variant !== 'outline' && 'border-none',
    'focus:outline-none',
    variant !== 'link' && 'focus:ring-2',
    variant !== 'link' && 'focus:ring-primary-500',
    variant !== 'link' && 'focus:ring-opacity-50',
    variant === 'link' && 'focus:ring-2',
    variant === 'link' && 'focus:ring-primary-400',
    variant === 'link' && 'focus:ring-opacity-50',
    variant === 'link' && 'rounded-sm',
    !disableRipple && variant !== 'link' && 'ripple-container'
  ].filter(Boolean);

  if (size !== 'icon' && variant !== 'primary' && variant !== 'secondary' && variant !== 'link') {
    baseClasses.push('hover:scale-105');
  }

  const classes = [
    ...baseClasses,
    getVariantClasses(),
    getSizeClasses(),
    fullWidth && 'w-full',
    (disabled || loading) && 'opacity-50 cursor-not-allowed',
    loading && 'pointer-events-none',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disableRipple && !disabled && !loading) {
      createRipple(e);
    }
    if (onClick && !disabled && !loading) {
      onClick(e);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <svg className="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {size !== 'icon' && (children || 'Loading...')}
        </>
      );
    }

    return (
      <>
        {leftIcon && <span className={size !== 'icon' ? 'mr-2' : ''}>{leftIcon}</span>}
        {size !== 'icon' && children}
        {rightIcon && <span className={size !== 'icon' ? 'ml-2' : ''}>{rightIcon}</span>}
        {size === 'icon' && !leftIcon && !rightIcon && children}
      </>
    );
  };

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {renderContent()}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
