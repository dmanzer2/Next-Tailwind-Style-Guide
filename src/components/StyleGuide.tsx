'use client';

import React from 'react';
import { Plus, Heart, Trash2, Download, Settings, X, Edit, MoreVertical, Share, User, LogOut } from 'lucide-react';
import SimpleDarkModeToggle from './SimpleDarkModeToggle';
import Button from './Button/Button';
import Link from './Link/Link';
import DropdownButton from './DropdownButton/DropdownButton';

const StyleGuide = () => {
  const colorPalettes = [
    {
      name: 'Primary (Navy)',
      description: '#16225c - #20299c',
      colors: [
        { name: 'primary-50', class: 'bg-primary-50' },
        { name: 'primary-100', class: 'bg-primary-100' },
        { name: 'primary-200', class: 'bg-primary-200' },
        { name: 'primary-300', class: 'bg-primary-300' },
        { name: 'primary-400', class: 'bg-primary-400' },
        { name: 'primary-500', class: 'bg-primary-500' },
        { name: 'primary-600', class: 'bg-primary-600' },
        { name: 'primary-700', class: 'bg-primary-700' },
        { name: 'primary-800', class: 'bg-primary-800' },
        { name: 'primary-900', class: 'bg-primary-900' },
        { name: 'primary-950', class: 'bg-primary-950' },
      ]
    },
    {
      name: 'Secondary (Bright Blue)',
      description: '#0273ff - #30d2ff',
      colors: [
        { name: 'secondary-50', class: 'bg-secondary-50' },
        { name: 'secondary-100', class: 'bg-secondary-100' },
        { name: 'secondary-200', class: 'bg-secondary-200' },
        { name: 'secondary-300', class: 'bg-secondary-300' },
        { name: 'secondary-400', class: 'bg-secondary-400' },
        { name: 'secondary-500', class: 'bg-secondary-500' },
        { name: 'secondary-600', class: 'bg-secondary-600' },
        { name: 'secondary-700', class: 'bg-secondary-700' },
        { name: 'secondary-800', class: 'bg-secondary-800' },
        { name: 'secondary-900', class: 'bg-secondary-900' },
        { name: 'secondary-950', class: 'bg-secondary-950' },
      ]
    },
    {
      name: 'Coral',
      description: '#f15a28',
      colors: [
        { name: 'coral-50', class: 'bg-coral-50' },
        { name: 'coral-100', class: 'bg-coral-100' },
        { name: 'coral-200', class: 'bg-coral-200' },
        { name: 'coral-300', class: 'bg-coral-300' },
        { name: 'coral-400', class: 'bg-coral-400' },
        { name: 'coral-500', class: 'bg-coral-500' },
        { name: 'coral-600', class: 'bg-coral-600' },
        { name: 'coral-700', class: 'bg-coral-700' },
        { name: 'coral-800', class: 'bg-coral-800' },
        { name: 'coral-900', class: 'bg-coral-900' },
        { name: 'coral-950', class: 'bg-coral-950' },
      ]
    },
    {
      name: 'Sea Foam',
      description: '#86ffe7',
      colors: [
        { name: 'seafoam-50', class: 'bg-seafoam-50' },
        { name: 'seafoam-100', class: 'bg-seafoam-100' },
        { name: 'seafoam-200', class: 'bg-seafoam-200' },
        { name: 'seafoam-300', class: 'bg-seafoam-300' },
        { name: 'seafoam-400', class: 'bg-seafoam-400' },
        { name: 'seafoam-500', class: 'bg-seafoam-500' },
        { name: 'seafoam-600', class: 'bg-seafoam-600' },
        { name: 'seafoam-700', class: 'bg-seafoam-700' },
        { name: 'seafoam-800', class: 'bg-seafoam-800' },
        { name: 'seafoam-900', class: 'bg-seafoam-900' },
        { name: 'seafoam-950', class: 'bg-seafoam-950' },
      ]
    },
    {
      name: 'Lavender',
      description: '#6e71a8',
      colors: [
        { name: 'lavender-50', class: 'bg-lavender-50' },
        { name: 'lavender-100', class: 'bg-lavender-100' },
        { name: 'lavender-200', class: 'bg-lavender-200' },
        { name: 'lavender-300', class: 'bg-lavender-300' },
        { name: 'lavender-400', class: 'bg-lavender-400' },
        { name: 'lavender-500', class: 'bg-lavender-500' },
        { name: 'lavender-600', class: 'bg-lavender-600' },
        { name: 'lavender-700', class: 'bg-lavender-700' },
        { name: 'lavender-800', class: 'bg-lavender-800' },
        { name: 'lavender-900', class: 'bg-lavender-900' },
        { name: 'lavender-950', class: 'bg-lavender-950' },
      ]
    }
  ];

  const semanticColors = [
    { name: 'Success', class: 'bg-seafoam-400', textClass: 'text-gray-900', description: 'Sea Foam' },
    { name: 'Warning', class: 'bg-coral-500', textClass: 'text-white', description: 'Coral' },
    { name: 'Error', class: 'bg-coral-600', textClass: 'text-white', description: 'Coral' },
    { name: 'Info', class: 'bg-secondary-400', textClass: 'text-white', description: 'Light Blue' },
  ];

  return (
    <div className="p-8 space-y-12 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-6xl font-bold text-primary-900 dark:text-primary-400 mb-2">Design System</h1>
          <p className="text-secondary-600 dark:text-secondary-500 text-lg font-body">Modern design system with Inter and Space Grotesk typography</p>
        </div>
        <SimpleDarkModeToggle />
      </div>

      {/* Color Palettes */}
      <section>
        <h2 className="font-heading text-3xl font-semibold text-primary-900 dark:text-primary-400 mb-6">Color Palettes</h2>
        <div className="space-y-8">
          {colorPalettes.map((palette) => (
            <div key={palette.name} className="card">
              <h3 className="font-subheading text-xl font-medium text-foreground mb-2">{palette.name}</h3>
              <p className="text-sm text-secondary-600 mb-4">{palette.description}</p>
              <div className="grid grid-cols-11 gap-2">
                {palette.colors.map((color) => (
                  <div key={color.name} className="text-center">
                    <div className={`${color.class} h-16 w-full rounded-lg border border-border mb-2`}></div>
                    <p className="text-xs text-secondary-600 font-mono">{color.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Semantic Colors */}
      <section>
        <h2 className="font-heading text-3xl font-semibold text-primary-900 dark:text-primary-400 mb-6">Semantic Colors</h2>
        <div className="card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {semanticColors.map((color) => (
              <div key={color.name} className="text-center">
                <div className={`${color.class} h-16 w-full rounded-lg flex items-center justify-center mb-2`}>
                  <span className={`font-medium ${color.textClass}`}>{color.name}</span>
                </div>
                <p className="text-xs text-secondary-600 font-mono">{color.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="font-heading text-3xl font-semibold text-primary-900 mb-6">Typography</h2>
        <div className="card space-y-8">
          <div>
            <h1 className="font-heading text-6xl font-bold text-primary-900 dark:text-primary-400">Modern Headlines</h1>
            <p className="text-sm text-secondary-600 font-mono mt-2">font-heading text-6xl font-bold (MuseoModerno)</p>
          </div>
          <div>
            <h2 className="font-heading text-4xl font-semibold text-primary-800">Contemporary Display</h2>
            <p className="text-sm text-secondary-600 font-mono mt-2">font-heading text-4xl font-semibold</p>
          </div>
          <div>
            <h3 className="font-subheading text-2xl font-semibold text-primary-700">Clean Section Headers</h3>
            <p className="text-sm text-secondary-600 font-mono mt-2">font-subheading text-2xl font-semibold (Outfit)</p>
          </div>
          <div>
            <p className="font-body text-lg text-foreground leading-relaxed">
              This is a large paragraph showcasing Outfit&apos;s excellent readability and modern geometric design. The font pairs beautifully with MuseoModerno headlines, creating a contemporary and sophisticated feel that perfectly complements our navy and coral color palette.
            </p>
            <p className="text-sm text-secondary-600 font-mono mt-2">font-body text-lg leading-relaxed</p>
          </div>
          <div>
            <p className="font-body text-base text-foreground">
              Regular paragraph text using Outfit. This font is a modern geometric sans-serif with excellent legibility across all sizes, making it perfect for both digital interfaces and body text content.
            </p>
            <p className="text-sm text-secondary-600 font-mono mt-2">font-body text-base</p>
          </div>
          <div>
            <p className="font-caption text-coral-600">Featured Content</p>
            <p className="text-sm text-secondary-600 font-mono mt-1">font-caption (uppercase small text)</p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <blockquote className="font-heading text-xl font-medium text-primary-800 leading-relaxed">
              &ldquo;Good typography is invisible. Great typography is unforgettable.&rdquo;
            </blockquote>
            <cite className="font-body text-sm text-primary-600 mt-2 block">&mdash; Matthew Carter</cite>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="font-heading text-3xl font-semibold text-primary-900 mb-6">Buttons</h2>
        <div className="card space-y-6">
          <div>
            <h3 className="font-subheading text-lg font-medium text-foreground mb-3">Basic Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="coral">Coral Button</Button>
              <Button variant="seafoam">Sea Foam Button</Button>
              <Button variant="lavender">Lavender Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
          </div>

          <div>
            <h3 className="font-subheading text-lg font-medium text-foreground mb-3">Buttons with Icons</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2 text-sm">Left Icons</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
                    Add Item
                  </Button>
                  <Button variant="secondary" leftIcon={<Heart className="w-4 h-4" />}>
                    Like
                  </Button>
                  <Button variant="coral" leftIcon={<Trash2 className="w-4 h-4" />}>
                    Delete
                  </Button>
                  <Button variant="outline" leftIcon={<Settings className="w-4 h-4" />}>
                    Settings
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2 text-sm">Right Icons</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="seafoam" rightIcon={<Download className="w-4 h-4" />}>
                    Download
                  </Button>
                  <Button variant="lavender" rightIcon={<Edit className="w-4 h-4" />}>
                    Edit
                  </Button>
                  <Button variant="ghost" rightIcon={<MoreVertical className="w-4 h-4" />}>
                    More
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2 text-sm">Link Variant with Icons</h4>
                <div className="flex flex-wrap gap-6 items-center">
                  <Button variant="link" leftIcon={<Download className="w-4 h-4" />}>
                    Download file
                  </Button>
                  <Button variant="link" rightIcon={<Edit className="w-4 h-4" />}>
                    Edit content
                  </Button>
                  <Button variant="link" leftIcon={<Settings className="w-4 h-4" />}>
                    Open settings
                  </Button>
                  <Button variant="link" rightIcon={<Plus className="w-4 h-4" />}>
                    Add new
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-subheading text-lg font-medium text-foreground mb-3">Loading States</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" loading disabled>Loading...</Button>
              <Button variant="secondary" loading disabled>Processing</Button>
              <Button variant="coral" loading disabled>Submitting</Button>
            </div>
          </div>

          <div>
            <h3 className="font-subheading text-lg font-medium text-foreground mb-3">Icon Only Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="icon"
                title="Settings"
              >
                <Settings className="w-5 h-5" />
              </Button>
              <Button 
                variant="coral"
                size="icon"
                title="Close"
              >
                <X className="w-5 h-5" />
              </Button>
              <Button 
                variant="seafoam"
                size="icon"
                title="Edit"
              >
                <Edit className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                size="icon"
                title="More options"
              >
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-subheading text-lg font-medium text-foreground mb-3">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium (Default)</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="font-subheading text-lg font-medium text-foreground mb-3">Button Component Features</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Full Width Button</h4>
                <Button variant="primary" fullWidth>Full Width Button</Button>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Disabled State</h4>
                <div className="flex gap-4">
                  <Button variant="primary" disabled>Disabled Primary</Button>
                  <Button variant="secondary" disabled>Disabled Secondary</Button>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Ghost Variant</h4>
                <Button variant="ghost">Ghost Button</Button>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Link Variant</h4>
                <Button variant="link">Link Button</Button>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Custom Classes</h4>
                <Button variant="primary" className="shadow-lg">Custom Shadow</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dropdown Buttons */}
      <section>
        <h2 className="font-heading text-3xl font-semibold text-primary-900 mb-6">Dropdown Buttons</h2>
        <div className="card space-y-6">
          <div>
            <h3 className="font-subheading text-lg font-medium text-foreground mb-3">Basic Dropdown</h3>
            <div className="flex flex-wrap gap-4">
              <DropdownButton
                variant="primary"
                options={[
                  { id: 'new', label: 'New Item' },
                  { id: 'edit', label: 'Edit' },
                  { id: 'delete', label: 'Delete' }
                ]}
                onSelect={(option) => alert(`Selected: ${option.label}`)}
              >
                Actions
              </DropdownButton>
              <DropdownButton
                variant="outline"
                options={[
                  { id: 'save', label: 'Save' },
                  { id: 'export', label: 'Export' },
                  { id: 'print', label: 'Print' }
                ]}
                onSelect={(option) => alert(`Selected: ${option.label}`)}
              >
                File
              </DropdownButton>
            </div>
          </div>

          <div>
            <h3 className="font-subheading text-lg font-medium text-foreground mb-3">Dropdown with Icons</h3>
            <div className="flex flex-wrap gap-4">
              <DropdownButton
                variant="secondary"
                options={[
                  { 
                    id: 'edit', 
                    label: 'Edit Item', 
                    icon: <Edit className="w-4 h-4" /> 
                  },
                  { 
                    id: 'share', 
                    label: 'Share', 
                    icon: <Share className="w-4 h-4" /> 
                  },
                  { 
                    id: 'delete', 
                    label: 'Delete', 
                    icon: <Trash2 className="w-4 h-4" />,
                    divider: true 
                  },
                  { 
                    id: 'download', 
                    label: 'Download', 
                    icon: <Download className="w-4 h-4" /> 
                  }
                ]}
                onSelect={(option) => alert(`Selected: ${option.label}`)}
              >
                Options
              </DropdownButton>
              <DropdownButton
                variant="coral"
                options={[
                  { 
                    id: 'profile', 
                    label: 'Profile', 
                    icon: <User className="w-4 h-4" /> 
                  },
                  { 
                    id: 'settings', 
                    label: 'Settings', 
                    icon: <Settings className="w-4 h-4" />,
                    divider: true 
                  },
                  { 
                    id: 'logout', 
                    label: 'Sign Out', 
                    icon: <LogOut className="w-4 h-4" /> 
                  }
                ]}
                onSelect={(option) => alert(`Selected: ${option.label}`)}
              >
                Account
              </DropdownButton>
            </div>
          </div>

          <div>
            <h3 className="font-subheading text-lg font-medium text-foreground mb-3">Different Placements</h3>
            <div className="flex flex-wrap gap-4">
              <DropdownButton
                variant="outline"
                placement="bottom-left"
                options={[
                  { id: 'option1', label: 'Bottom Left 1' },
                  { id: 'option2', label: 'Bottom Left 2' }
                ]}
                onSelect={(option) => alert(`Selected: ${option.label}`)}
              >
                Bottom Left
              </DropdownButton>
              <DropdownButton
                variant="outline"
                placement="bottom-right"
                options={[
                  { id: 'option1', label: 'Bottom Right 1' },
                  { id: 'option2', label: 'Bottom Right 2' }
                ]}
                onSelect={(option) => alert(`Selected: ${option.label}`)}
              >
                Bottom Right
              </DropdownButton>
            </div>
          </div>

          <div>
            <h3 className="font-subheading text-lg font-medium text-foreground mb-3">Special Features</h3>
            <div className="flex flex-wrap gap-4">
              <DropdownButton
                variant="ghost"
                showChevron={false}
                options={[
                  { id: 'option1', label: 'No Chevron' },
                  { id: 'option2', label: 'Still Works' }
                ]}
                onSelect={(option) => alert(`Selected: ${option.label}`)}
              >
                No Chevron
              </DropdownButton>
              <DropdownButton
                variant="lavender"
                options={[
                  { id: 'enabled', label: 'Enabled Option' },
                  { id: 'disabled', label: 'Disabled Option', disabled: true },
                  { id: 'another', label: 'Another Option' }
                ]}
                onSelect={(option) => alert(`Selected: ${option.label}`)}
              >
                With Disabled
              </DropdownButton>
            </div>
          </div>
        </div>
      </section>

      {/* Link Buttons vs Links */}
      <section>
        <h2 className="font-heading text-3xl font-semibold text-primary-900 mb-6">Links vs Button Links</h2>
        <div className="card space-y-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🔍 SEO Important:</h3>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              For navigation and SEO purposes, use the <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">Link</code> component. 
              For actions and interactions, use the <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">Button</code> component.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-subheading text-lg font-medium text-foreground mb-3">✅ Use Link Component (SEO Friendly)</h3>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Navigation: <Link href="/about">About Us</Link> | <Link href="/contact">Contact</Link>
                </p>
                <p className="text-foreground leading-relaxed">
                  External links: <Link href="https://example.com" external>Visit our partner</Link>
                </p>
                <p className="text-foreground leading-relaxed">
                  In content: Read more about this in our <Link href="/documentation">documentation</Link>.
                </p>
                <div className="space-y-2">
                  <div><Link href="/products" variant="primary">Shop Now</Link></div>
                  <div><Link href="/download" variant="outline" leftIcon={<Download className="w-4 h-4" />}>Download</Link></div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-subheading text-lg font-medium text-foreground mb-3">⚙️ Use Button Component (Actions)</h3>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Actions: <Button variant="link" onClick={() => alert('Clicked!')}>Save changes</Button> | 
                  <Button variant="link" onClick={() => alert('Clicked!')}>Delete item</Button>
                </p>
                <p className="text-foreground leading-relaxed">
                  Interactive elements: <Button variant="link" onClick={() => alert('Clicked!')}>Show details</Button>
                </p>
                <p className="text-foreground leading-relaxed">
                  Form actions: <Button variant="link" onClick={() => alert('Clicked!')}>Reset form</Button>
                </p>
                <div className="space-y-2">
                  <div><Button variant="primary" onClick={() => alert('Clicked!')}>Submit</Button></div>
                  <div><Button variant="outline" leftIcon={<Settings className="w-4 h-4" />} onClick={() => alert('Clicked!')}>Settings</Button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section>
        <h2 className="font-heading text-3xl font-semibold text-primary-900 mb-6">Form Elements</h2>
        <div className="card space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Input Field</label>
            <input 
              type="text" 
              placeholder="Enter text..." 
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Select Field</label>
            <select className="input-field w-full">
              <option>Choose an option...</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Textarea</label>
            <textarea 
              placeholder="Enter multiple lines..." 
              rows={4}
              className="input-field w-full"
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="font-heading text-3xl font-semibold text-primary-900 mb-6">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-subheading text-xl font-semibold text-foreground mb-2">Navy &amp; Blue Theme</h3>
            <p className="font-body text-secondary-600 mb-4">
              Professional and trustworthy design using our navy and bright blue palette.
            </p>
            <Button variant="primary">Learn More</Button>
          </div>
          <div className="card border-coral-200">
            <h3 className="font-subheading text-xl font-semibold text-foreground mb-2">Coral Accent</h3>
            <p className="font-body text-secondary-600 mb-4">
              Vibrant coral adds energy and warmth to create engaging call-to-actions.
            </p>
            <Button variant="coral">Take Action</Button>
          </div>
          <div className="card border-seafoam-200">
            <h3 className="font-subheading text-xl font-semibold text-foreground mb-2">Sea Foam Success</h3>
            <p className="font-body text-secondary-600 mb-4">
              Fresh sea foam green perfect for success states and positive messaging.
            </p>
            <Button variant="seafoam">Continue</Button>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="font-heading text-3xl font-semibold text-primary-900 mb-6">Spacing Scale</h2>
        <div className="card">
          <div className="space-y-4">
            {[
              { name: 'xs', value: '0.5rem', class: 'w-2' },
              { name: 'sm', value: '0.75rem', class: 'w-3' },
              { name: 'md', value: '1rem', class: 'w-4' },
              { name: 'lg', value: '1.5rem', class: 'w-6' },
              { name: 'xl', value: '2rem', class: 'w-8' },
              { name: '2xl', value: '3rem', class: 'w-12' },
              { name: '3xl', value: '4rem', class: 'w-16' },
            ].map((space) => (
              <div key={space.name} className="flex items-center gap-4">
                <div className={`${space.class} h-4 bg-primary-500 rounded`}></div>
                <span className="font-mono text-sm">{space.name} - {space.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Mode Examples */}
      <section>
        <h2 className="font-heading text-3xl font-semibold text-primary-900 dark:text-primary-400 mb-6">Dark Mode Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-surface dark:bg-surface border border-border dark:border-border">
            <h3 className="font-subheading text-xl font-medium text-foreground dark:text-foreground mb-4">Light Theme Card</h3>
            <p className="text-foreground dark:text-foreground mb-4">This card adapts to both light and dark themes automatically.</p>
            <Button 
              variant="primary"
              className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white"
            >
              Primary Button
            </Button>
          </div>
          <div className="card bg-surface dark:bg-surface border border-border dark:border-border">
            <h3 className="font-subheading text-xl font-medium text-foreground dark:text-foreground mb-4">Theme Colors</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-coral-500 rounded"></div>
                <span className="text-foreground dark:text-foreground">Coral remains vibrant in both themes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-seafoam-400 rounded"></div>
                <span className="text-foreground dark:text-foreground">Sea foam provides beautiful accents</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-lavender-500 rounded"></div>
                <span className="text-foreground dark:text-foreground">Lavender adds elegant touches</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;
