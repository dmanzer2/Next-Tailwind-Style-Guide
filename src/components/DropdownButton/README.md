# DropdownButton Component

A button component with dropdown functionality that extends the base Button component with a list of selectable options.

## Features

- ✅ All Button component variants and features
- ✅ Dropdown menu with customizable options
- ✅ Keyboard navigation (Escape to close)
- ✅ Click outside to close
- ✅ Multiple placement options
- ✅ Icons in dropdown options
- ✅ Option dividers
- ✅ Disabled options
- ✅ Custom trigger content
- ✅ Smooth animations
- ✅ Dark mode support
- ✅ TypeScript support

## Usage

### Basic Dropdown Button

```tsx
import DropdownButton from '@/components/DropdownButton';

const options = [
  { id: 'edit', label: 'Edit' },
  { id: 'delete', label: 'Delete' },
  { id: 'share', label: 'Share' }
];

<DropdownButton
  variant="primary"
  options={options}
  onSelect={(option) => console.log('Selected:', option.id)}
>
  Actions
</DropdownButton>
```

### Dropdown with Icons

```tsx
import { Edit, Trash2, Share, Download } from 'lucide-react';

const optionsWithIcons = [
  { 
    id: 'edit', 
    label: 'Edit Item', 
    icon: <Edit className="w-4 h-4" /> 
  },
  { 
    id: 'delete', 
    label: 'Delete Item', 
    icon: <Trash2 className="w-4 h-4" />,
    divider: true 
  },
  { 
    id: 'share', 
    label: 'Share', 
    icon: <Share className="w-4 h-4" /> 
  },
  { 
    id: 'download', 
    label: 'Download', 
    icon: <Download className="w-4 h-4" />,
    disabled: true 
  }
];

<DropdownButton
  variant="outline"
  options={optionsWithIcons}
  onSelect={(option) => handleAction(option.id)}
>
  More Options
</DropdownButton>
```

### Different Placements

```tsx
<DropdownButton
  variant="secondary"
  placement="bottom-right"
  options={options}
  onSelect={handleSelect}
>
  Bottom Right
</DropdownButton>

<DropdownButton
  variant="coral"
  placement="top-left"
  options={options}
  onSelect={handleSelect}
>
  Top Left
</DropdownButton>
```

### Custom Trigger

```tsx
<DropdownButton
  options={options}
  onSelect={handleSelect}
  trigger={
    <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">
      <Settings className="w-4 h-4" />
      <span>Custom Trigger</span>
    </div>
  }
/>
```

### Without Chevron

```tsx
<DropdownButton
  variant="ghost"
  showChevron={false}
  options={options}
  onSelect={handleSelect}
>
  No Chevron
</DropdownButton>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `DropdownOption[]` | `[]` | Array of dropdown options |
| `onSelect` | `(option: DropdownOption) => void` | - | Callback when an option is selected |
| `defaultOpen` | `boolean` | `false` | Whether the dropdown is open by default |
| `placement` | `'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right'` | `'bottom-left'` | Position of the dropdown menu |
| `showChevron` | `boolean` | `true` | Whether to show the chevron icon |
| `trigger` | `React.ReactNode` | - | Custom trigger content (overrides default button) |
| ...buttonProps | `ButtonProps` | - | All Button component props except `onClick` and `rightIcon` |

## DropdownOption Interface

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | ✅ | Unique identifier for the option |
| `label` | `string` | ✅ | Display text for the option |
| `icon` | `React.ReactNode` | - | Optional icon to display before the label |
| `disabled` | `boolean` | - | Whether the option is disabled |
| `divider` | `boolean` | - | Whether to show a divider after this option |
| `className` | `string` | - | Additional CSS classes for the option |

## Examples

### Complete Example with All Features

```tsx
import { Settings, User, LogOut, Shield, Bell } from 'lucide-react';

const userMenuOptions = [
  {
    id: 'profile',
    label: 'View Profile',
    icon: <User className="w-4 h-4" />
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="w-4 h-4" />,
    divider: true
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell className="w-4 h-4" />
  },
  {
    id: 'security',
    label: 'Security',
    icon: <Shield className="w-4 h-4" />,
    divider: true
  },
  {
    id: 'logout',
    label: 'Sign Out',
    icon: <LogOut className="w-4 h-4" />
  }
];

<DropdownButton
  variant="outline"
  size="sm"
  placement="bottom-right"
  options={userMenuOptions}
  onSelect={(option) => {
    switch (option.id) {
      case 'profile':
        router.push('/profile');
        break;
      case 'settings':
        router.push('/settings');
        break;
      case 'logout':
        handleLogout();
        break;
      default:
        console.log('Selected:', option.id);
    }
  }}
>
  Account
</DropdownButton>
```

## Accessibility

- Keyboard navigation with Escape key to close
- Proper ARIA attributes for accessibility
- Focus management when dropdown opens/closes
- Disabled state handling for options

## Notes

- The dropdown automatically closes when clicking outside
- Options with `disabled: true` cannot be selected
- Use `divider: true` to add visual separators between options
- The component inherits all Button styling and behavior
- Custom triggers override the default button completely
