'use client';

import React, { forwardRef, useCallback } from 'react';

// The `useRipple` hook is used to add a ripple effect to the component. 
// It is controlled by the `disableRipple` prop in the `Link` component.
import { useRipple } from '../../hooks/useRipple';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The visual style variant of the link
   */
  variant?: 'primary' | 'secondary' | 'coral' | 'seafoam' | 'lavender' | 'outline' | 'ghost' | 'link';
  
  /**
   * The size of the link
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether the link should take the full width of its container
   */
  fullWidth?: boolean;
  
  /**
   * Icon to display before the link text
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Icon to display after the link text
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Additional CSS classes to apply
   */
  className?: string;
  
  /**
   * Whether the link should open in a new tab
   */
  external?: boolean;

  /**
   * Whether to disable the ripple effect
   */
  disableRipple?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
  variant = 'link',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  external = false,
  disableRipple = false,
  children,
  href,
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
        return 'border-2 border-solid border-gray-600 dark:border-gray-300 text-foreground hover:bg-gray-300 dark:hover:bg-transparent dark:hover:bg-gray-700';
      case 'ghost':
        return 'hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-100';
      case 'link':
        return 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline hover:no-underline';
      default:
        return 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline hover:no-underline';
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
      default:
        return variant === 'link' ? '' : 'px-4 py-2';
    }
  };

  const baseClasses = [
    variant !== 'link' && 'rounded-lg',
    variant !== 'link' && 'font-medium',
    'transition-colors',
    'transition-transform',
    'duration-200',
    'ease-in-out',
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
    !disableRipple && variant !== 'link' && 'ripple-container',
    'no-underline' // Prevent default link underline, we handle it with classes
  ].filter(Boolean);

  if (variant !== 'primary' && variant !== 'secondary' && variant !== 'link') {
    baseClasses.push('hover:scale-105');
  }

  const classes = [
    ...baseClasses,
    getVariantClasses(),
    getSizeClasses(),
    fullWidth && 'w-full',
    className
  ].filter(Boolean).join(' ');

  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};


  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
      if (e.defaultPrevented) {
        return; // Exit if the default action was prevented
      }
    }
    if (!disableRipple && variant !== 'link') {
      createRipple(e);
    }
  }, [onClick, disableRipple, variant, createRipple]);

  return (
    <a
      ref={ref}
      className={classes}
      href={href}
      onClick={handleClick}
      {...externalProps}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
