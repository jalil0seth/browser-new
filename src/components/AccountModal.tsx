import React from 'react';
import { X } from 'lucide-react';
import { countries } from 'countries-list';
import { platformIcons } from '../lib/constants';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  account: any;
  setAccount: (account: any) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  isEditing?: boolean;
}

export default function AccountModal({
  isOpen,
  onClose,
  onSubmit,
  account,
  setAccount,
  selectedTags,
  setSelectedTags,
  isEditing = false
}: AccountModalProps) {
  if (!isOpen) return null;

  const countryOptions = Object.entries(countries).map(([code, country]) => ({
    value: code,
    label: country.name,
  }));

  const handleTagRemove = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 py-6">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        
        <div className="relative w-full max-w-2xl transform rounded-lg bg-white px-8 py-6 shadow-xl transition-all">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {isEditing ? 'Edit Account' : 'Add New Account'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Platform
              </label>
              <select
                className="mt-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={account.platform || ''}
                onChange={(e) => setAccount({ ...account, platform: e.target.value })}
              >
                <option value="">Select platform</option>
                {Object.keys(platformIcons).map((platform) => (
                  <option key={platform} value={platform}>
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={account.username || ''}
                onChange={(e) => setAccount({ ...account, username: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-2 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={account.password || ''}
                onChange={(e) => setAccount({ ...account, password: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                className="mt-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={account.status || 'New'}
                onChange={(e) => setAccount({ ...account, status: e.target.value })}
              >
                <option value="New">New</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Blocked">Blocked</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                className="mt-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={account.country || ''}
                onChange={(e) => setAccount({ ...account, country: e.target.value })}
              >
                <option value="">Select country</option>
                {countryOptions.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                IP Address
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={account.ip || ''}
                onChange={(e) => setAccount({ ...account, ip: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Notes
              </label>
              <div className="mt-2 border border-gray-300 rounded-md">
                <textarea
                  className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  rows={4}
                  value={account.notes || ''}
                  onChange={(e) => setAccount({ ...account, notes: e.target.value })}
                />
                <div className="flex items-center justify-between bg-gray-50 px-3 py-2 border-t border-gray-300">
                  <div className="flex space-x-1 sm:space-x-2">
                    <button
                      type="button"
                      className="inline-flex items-center rounded px-2 py-1 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded px-2 py-1 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      I
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded px-2 py-1 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      U
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <div className="mt-2 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleTagRemove(tag)}
                        className="ml-1.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-600 hover:bg-indigo-200 hover:text-indigo-900 focus:bg-indigo-500 focus:text-white focus:outline-none"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Add tags (press Enter)"
                  className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const input = e.target as HTMLInputElement;
                      const newTag = input.value.trim();
                      if (newTag && !selectedTags.includes(newTag)) {
                        setSelectedTags([...selectedTags, newTag]);
                        input.value = '';
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isEditing ? 'Save Changes' : 'Add Account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}