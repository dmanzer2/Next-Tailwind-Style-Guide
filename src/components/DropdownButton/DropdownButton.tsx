'use client';

import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Button, { ButtonProps } from '../Button/Button';

export interface DropdownOption {
  /**
   * Unique identifier for the option
   */
  id: string;
  
  /**
   * Display text for the option
   */
  label: string;
  
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
  
  /**
   * Whether the option is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether to show a divider after this option
   */
  divider?: boolean;
  
  /**
   * Additional CSS classes for the option
   */
  className?: string;
}

export interface DropdownButtonProps extends Omit<ButtonProps, 'onClick' | 'rightIcon' | 'onSelect'> {
  /**
   * Array of dropdown options
   */
  options: DropdownOption[];
  
  /**
   * Callback when an option is selected
   */
  onSelect?: (option: DropdownOption) => void;
  
  /**
   * Whether the dropdown is open by default
   */
  defaultOpen?: boolean;
  
  /**
   * Position of the dropdown menu
   */
  placement?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  
  /**
   * Whether to show the chevron icon
   */
  showChevron?: boolean;
  
  /**
   * Custom trigger content (overrides default button)
   */
  trigger?: React.ReactNode;
}

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(({
  options = [],
  onSelect,
  defaultOpen = false,
  placement = 'bottom-left',
  showChevron = true,
  trigger,
  children,
  className = '',
  disabled,
  ...buttonProps
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option: DropdownOption) => {
    if (!option.disabled && onSelect) {
      onSelect(option);
    }
    setIsOpen(false);
  };

  const getPlacementClasses = () => {
    switch (placement) {
      case 'bottom-left':
        return 'top-full left-0 mt-1';
      case 'bottom-right':
        return 'top-full right-0 mt-1';
      case 'top-left':
        return 'bottom-full left-0 mb-1';
      case 'top-right':
        return 'bottom-full right-0 mb-1';
      default:
        return 'top-full left-0 mt-1';
    }
  };

  const dropdownClasses = [
    'absolute',
    'z-50',
    'min-w-48',
    'bg-white',
    'dark:bg-gray-800',
    'border',
    'border-gray-200',
    'dark:border-gray-700',
    'rounded-lg',
    'shadow-lg',
    'py-1',
    'transform',
    'transition-all',
    'duration-200',
    'ease-out',
    getPlacementClasses(),
    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
  ].join(' ');

  const renderTrigger = () => {
    if (trigger) {
      return (
        <div onClick={handleToggle} className="cursor-pointer">
          {trigger}
        </div>
      );
    }

    return (
      <Button
        ref={triggerRef}
        {...buttonProps}
        onClick={handleToggle}
        disabled={disabled}
        rightIcon={showChevron ? (
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        ) : undefined}
        className={className}
      >
        {children}
      </Button>
    );
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {renderTrigger()}
      
      <div className={dropdownClasses}>
        {options.map((option, index) => (
          <React.Fragment key={option.id}>
            <button
              type="button"
              className={[
                'w-full',
                'text-left',
                'px-4',
                'py-2',
                'text-sm',
                'transition-colors',
                'duration-150',
                'flex',
                'items-center',
                'gap-3',
                option.disabled
                  ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer btn-dropdown-options',
                option.className
              ].filter(Boolean).join(' ')}
              onClick={() => handleOptionClick(option)}
              disabled={option.disabled}
            >
              {option.icon && (
                <span className="flex-shrink-0">
                  {option.icon}
                </span>
              )}
              <span>{option.label}</span>
            </button>
            {option.divider && index < options.length - 1 && (
              <div className="border-t border-gray-200 dark:border-gray-700 my-1" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
