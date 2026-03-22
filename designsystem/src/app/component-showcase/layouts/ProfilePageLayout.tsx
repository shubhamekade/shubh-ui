'use client';

import React, { useState } from 'react';
import {
  Bars3Icon,
  UserCircleIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  CameraIcon,
  HomeIcon,
  UsersIcon,
  CogIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BellIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import Select from '@/components/Select/Select';
import Switch from '@/components/Switch/Switch';
import Avatar from '@/components/Avatar/Avatar';
import Alert from '@/components/Alert/Alert';
import Badge from '@/components/Badge/Badge';
import { useShowcaseTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon className="h-4 w-4" /> },
  { id: 'users', label: 'Users', icon: <UsersIcon className="h-4 w-4" /> },
  { id: 'analytics', label: 'Analytics', icon: <ChartBarIcon className="h-4 w-4" /> },
  { id: 'reports', label: 'Reports', icon: <DocumentTextIcon className="h-4 w-4" /> },
  { id: 'settings', label: 'Settings', icon: <CogIcon className="h-4 w-4" /> },
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  timezone: string;
  language: string;
  emailNotif: boolean;
  pushNotif: boolean;
  marketingNotif: boolean;
  weeklyDigest: boolean;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  twoFactor: boolean;
  sessionTimeout: string;
  theme: string;
  density: string;
  sidebarCollapsed: boolean;
}

export default function ProfilePageLayout() {
  const { theme } = useShowcaseTheme();
  const isNavy = theme === 'navy';

  const [activeNav, setActiveNav] = useState('settings');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploadHover, setUploadHover] = useState(false);

  const [form, setForm] = useState<FormState>({
    firstName: 'Sarah',
    lastName: 'Mitchell',
    email: 'sarah.mitchell@company.com',
    phone: '+1 (555) 234-5678',
    bio: 'Senior Product Designer with 8+ years of experience building design systems and user interfaces for enterprise products.',
    timezone: 'America/New_York',
    language: 'en',
    emailNotif: true,
    pushNotif: false,
    marketingNotif: true,
    weeklyDigest: true,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactor: false,
    sessionTimeout: '30',
    theme: 'light',
    density: 'comfortable',
    sidebarCollapsed: false,
  });

  const setField = (key: keyof FormState, val: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSave = () => {
    setSaving(true);
    setSaved(false);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1500);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <UserCircleIcon className="h-4 w-4" /> },
    { id: 'security', label: 'Security', icon: <ShieldCheckIcon className="h-4 w-4" /> },
    {
      id: 'preferences',
      label: 'Preferences',
      icon: <AdjustmentsHorizontalIcon className="h-4 w-4" />,
    },
  ];

  // Theme-derived classes
  const pageBg = isNavy ? 'bg-[#00001a]' : 'bg-gray-50';
  const topbarBg = isNavy ? 'bg-[#000040] border-white/10' : 'bg-white border-gray-200';
  const topbarText = isNavy ? 'text-white/80' : 'text-gray-500';
  const topbarHover = isNavy
    ? 'hover:text-white hover:bg-white/10'
    : 'hover:text-gray-700 hover:bg-gray-100';
  const topbarTitle = isNavy ? 'text-white' : 'text-gray-800';
  const cardBg = isNavy ? 'bg-[#000040] border-white/10' : 'bg-white border-gray-200';
  const cardBorder = isNavy ? 'border-white/10' : 'border-gray-100';
  const pageTitle = isNavy ? 'text-white' : 'text-gray-900';
  const pageSubtitle = isNavy ? 'text-white/50' : 'text-gray-500';
  const labelText = isNavy ? 'text-white/70' : 'text-gray-700';
  const sectionHeading = isNavy ? 'text-white' : 'text-gray-800';
  const notifItemText = isNavy ? 'text-white/80' : 'text-gray-800';
  const notifItemDesc = isNavy ? 'text-white/40' : 'text-gray-500';
  const notifItemBorder = isNavy ? 'border-white/10' : 'border-gray-50';
  const tabActive = isNavy ? 'border-[#6699ff] text-[#6699ff]' : 'border-[#000080] text-[#000080]';
  const tabInactive = isNavy
    ? 'border-transparent text-white/50 hover:text-white/80 hover:border-white/30'
    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';
  const tabHeaderBorder = isNavy ? 'border-white/10' : 'border-gray-100';
  const avatarCardName = isNavy ? 'text-white' : 'text-gray-900';
  const avatarCardEmail = isNavy ? 'text-white/50' : 'text-gray-500';
  const saveFooterBorder = isNavy ? 'border-white/10' : 'border-gray-100';

  return (
    <div className={cn('flex h-screen overflow-hidden font-sans', pageBg)}>
      {/* Sidebar */}
      <aside
        className={cn(
          'flex flex-col bg-[#000040] text-white flex-shrink-0 transition-all duration-300 overflow-hidden',
          sidebarCollapsed ? 'w-16' : 'w-56'
        )}
      >
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10 h-14">
          <div className="w-7 h-7 rounded-md bg-[#000080] flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">DS</span>
          </div>
          {!sidebarCollapsed && (
            <span className="font-semibold text-sm text-white truncate">AdminPanel</span>
          )}
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left',
                activeNav === item.id
                  ? 'bg-white/15 text-white font-medium'
                  : 'text-white/60 hover:text-white hover:bg-white/8'
              )}
              title={sidebarCollapsed ? item.label : undefined}
            >
              <span className="shrink-0">{item.icon}</span>
              {!sidebarCollapsed && <span className="truncate">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="px-4 py-3 border-t border-white/10">
          <div className={cn('flex items-center gap-2.5', sidebarCollapsed && 'justify-center')}>
            <Avatar initials="SM" size="sm" status="online" />
            {!sidebarCollapsed && (
              <div className="min-w-0">
                <p className="text-xs font-medium text-white truncate">Sarah Mitchell</p>
                <p className="text-xs text-white/40 truncate">Designer</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className={cn('h-14 border-b flex items-center px-4 gap-3 shrink-0', topbarBg)}>
          <button
            onClick={() => setSidebarCollapsed((v) => !v)}
            className={cn('p-1.5 rounded-md transition-colors', topbarText, topbarHover)}
            aria-label="Toggle sidebar"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
          <div className="flex-1">
            <h1 className={cn('text-sm font-semibold', topbarTitle)}>Account Settings</h1>
          </div>
          <button
            className={cn('p-1.5 rounded-md transition-colors relative', topbarText, topbarHover)}
          >
            <BellIcon className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <Avatar initials="SM" size="sm" status="online" />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className={cn('text-xl font-bold', pageTitle)}>Profile Settings</h2>
              <p className={cn('text-sm mt-0.5', pageSubtitle)}>
                Manage your account details, security, and preferences.
              </p>
            </div>

            {saved && (
              <div className="mb-4">
                <Alert
                  variant="success"
                  title="Changes saved!"
                  dismissible
                  onDismiss={() => setSaved(false)}
                >
                  Your profile has been updated successfully.
                </Alert>
              </div>
            )}

            {/* Avatar Upload Card */}
            <div className={cn('rounded-lg border p-5 mb-5 flex items-center gap-5', cardBg)}>
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setUploadHover(true)}
                onMouseLeave={() => setUploadHover(false)}
              >
                <Avatar initials="SM" size="2xl" status="online" />
                <div
                  className={cn(
                    'absolute inset-0 rounded-full bg-black/50 flex items-center justify-center transition-opacity',
                    uploadHover ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <CameraIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <p className={cn('font-semibold', avatarCardName)}>Sarah Mitchell</p>
                <p className={cn('text-sm mb-2', avatarCardEmail)}>sarah.mitchell@company.com</p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Upload Photo
                  </Button>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                  <Badge variant="success" size="sm" dot>
                    Verified
                  </Badge>
                </div>
              </div>
            </div>

            {/* Tabs + Content */}
            <div className={cn('rounded-lg border overflow-hidden', cardBg)}>
              {/* Tab Header */}
              <div className={cn('border-b px-5 pt-4', tabHeaderBorder)}>
                <div className="flex gap-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        'flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px',
                        activeTab === tab.id ? tabActive : tabInactive
                      )}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5">
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          value={form.firstName}
                          onChange={(e) => setField('firstName', e.target.value)}
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          value={form.lastName}
                          onChange={(e) => setField('lastName', e.target.value)}
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)}
                        placeholder="you@company.com"
                        success="Email verified"
                      />
                    </div>

                    <div>
                      <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setField('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                        Bio
                      </label>
                      <Textarea
                        value={form.bio}
                        onChange={(e) => setField('bio', e.target.value)}
                        placeholder="Tell us about yourself…"
                        rows={3}
                        hint={`${form.bio.length}/300 characters`}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                          Timezone
                        </label>
                        <Select
                          value={form.timezone}
                          onChange={(value) =>
                            setField('timezone', Array.isArray(value) ? (value[0] ?? '') : value)
                          }
                          options={[
                            { value: 'America/New_York', label: 'Eastern Time (ET)' },
                            { value: 'America/Chicago', label: 'Central Time (CT)' },
                            { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
                            { value: 'Europe/London', label: 'London (GMT)' },
                            { value: 'Europe/Paris', label: 'Paris (CET)' },
                          ]}
                        />
                      </div>
                      <div>
                        <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                          Language
                        </label>
                        <Select
                          value={form.language}
                          onChange={(value) =>
                            setField('language', Array.isArray(value) ? (value[0] ?? '') : value)
                          }
                          options={[
                            { value: 'en', label: 'English' },
                            { value: 'es', label: 'Spanish' },
                            { value: 'fr', label: 'French' },
                            { value: 'de', label: 'German' },
                          ]}
                        />
                      </div>
                    </div>

                    {/* Notification Toggles */}
                    <div>
                      <h3 className={cn('text-sm font-semibold mb-3', sectionHeading)}>
                        Notification Preferences
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            key: 'emailNotif' as const,
                            label: 'Email Notifications',
                            desc: 'Receive updates via email',
                          },
                          {
                            key: 'pushNotif' as const,
                            label: 'Push Notifications',
                            desc: 'Browser push alerts',
                          },
                          {
                            key: 'marketingNotif' as const,
                            label: 'Marketing Emails',
                            desc: 'Product news and offers',
                          },
                          {
                            key: 'weeklyDigest' as const,
                            label: 'Weekly Digest',
                            desc: 'Summary of activity each week',
                          },
                        ].map((item) => (
                          <div
                            key={item.key}
                            className={cn(
                              'flex items-center justify-between py-2 border-b last:border-0',
                              notifItemBorder
                            )}
                          >
                            <div>
                              <p className={cn('text-sm font-medium', notifItemText)}>
                                {item.label}
                              </p>
                              <p className={cn('text-xs', notifItemDesc)}>{item.desc}</p>
                            </div>
                            <Switch
                              checked={form[item.key] as boolean}
                              onChange={(e) => setField(item.key, e.target.checked)}
                              size="sm"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                  <div className="space-y-5">
                    <Alert variant="warning" title="Password Strength">
                      Your password was last changed 90 days ago. Consider updating it.
                    </Alert>

                    <div>
                      <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                        Current Password
                      </label>
                      <Input
                        type="password"
                        value={form.currentPassword}
                        onChange={(e) => setField('currentPassword', e.target.value)}
                        placeholder="Enter current password"
                      />
                    </div>
                    <div>
                      <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                        New Password
                      </label>
                      <Input
                        type="password"
                        value={form.newPassword}
                        onChange={(e) => setField('newPassword', e.target.value)}
                        placeholder="Min. 8 characters"
                        hint="Use uppercase, lowercase, numbers and symbols"
                      />
                    </div>
                    <div>
                      <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                        Confirm New Password
                      </label>
                      <Input
                        type="password"
                        value={form.confirmPassword}
                        onChange={(e) => setField('confirmPassword', e.target.value)}
                        placeholder="Repeat new password"
                        error={
                          form.confirmPassword && form.newPassword !== form.confirmPassword
                            ? 'Passwords do not match'
                            : undefined
                        }
                      />
                    </div>

                    <div className={cn('border-t pt-4', cardBorder)}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={cn('text-sm font-medium', notifItemText)}>
                            Two-Factor Authentication
                          </p>
                          <p className={cn('text-xs mt-0.5', notifItemDesc)}>
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch
                          checked={form.twoFactor}
                          onChange={(e) => setField('twoFactor', e.target.checked)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                        Session Timeout (minutes)
                      </label>
                      <Select
                        value={form.sessionTimeout}
                        onChange={(value) =>
                          setField(
                            'sessionTimeout',
                            Array.isArray(value) ? (value[0] ?? '') : value
                          )
                        }
                        options={[
                          { value: '15', label: '15 minutes' },
                          { value: '30', label: '30 minutes' },
                          { value: '60', label: '1 hour' },
                          { value: '240', label: '4 hours' },
                          { value: 'never', label: 'Never' },
                        ]}
                      />
                    </div>
                  </div>
                )}

                {/* Preferences Tab */}
                {activeTab === 'preferences' && (
                  <div className="space-y-5">
                    <div>
                      <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                        Theme
                      </label>
                      <Select
                        value={form.theme}
                        onChange={(value) =>
                          setField('theme', Array.isArray(value) ? (value[0] ?? '') : value)
                        }
                        options={[
                          { value: 'light', label: 'Light' },
                          { value: 'dark', label: 'Dark' },
                          { value: 'system', label: 'System Default' },
                        ]}
                      />
                    </div>
                    <div>
                      <label className={cn('block text-sm font-medium mb-1.5', labelText)}>
                        Display Density
                      </label>
                      <Select
                        value={form.density}
                        onChange={(value) =>
                          setField('density', Array.isArray(value) ? (value[0] ?? '') : value)
                        }
                        options={[
                          { value: 'compact', label: 'Compact' },
                          { value: 'comfortable', label: 'Comfortable' },
                          { value: 'spacious', label: 'Spacious' },
                        ]}
                      />
                    </div>
                    <div
                      className={cn(
                        'flex items-center justify-between py-2 border-b',
                        notifItemBorder
                      )}
                    >
                      <div>
                        <p className={cn('text-sm font-medium', notifItemText)}>
                          Collapsed Sidebar by Default
                        </p>
                        <p className={cn('text-xs', notifItemDesc)}>Start with sidebar minimized</p>
                      </div>
                      <Switch
                        checked={form.sidebarCollapsed}
                        onChange={(e) => setField('sidebarCollapsed', e.target.checked)}
                        size="sm"
                      />
                    </div>
                  </div>
                )}

                {/* Save Footer */}
                <div
                  className={cn(
                    'flex items-center justify-end gap-3 mt-6 pt-5 border-t',
                    saveFooterBorder
                  )}
                >
                  <Button variant="ghost" size="sm" disabled={saving}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSave}
                    loading={saving}
                    disabled={saving}
                  >
                    {saving ? 'Saving…' : 'Save Changes'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
