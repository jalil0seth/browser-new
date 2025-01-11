import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import AccountTable from '../components/AccountTable';
import AccountModal from '../components/AccountModal';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 10;

interface Account {
  id: string;
  platform: string;
  username: string;
  password: string;
  notes?: string;
  country?: string;
  tags?: string[];
  ip?: string;
  status?: string;
  user_data?: any;
}

export default function Dashboard() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<Partial<Account>>({});
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const { data, error } = await supabase
        .from('accounts')
        .select('*, account_tags(tag)');
      
      if (error) throw error;
      
      setAccounts(data || []);
    } catch (error) {
      toast.error('Error fetching accounts');
    }
  };

  const handleAddAccount = async () => {
    try {
      if (!currentAccount.platform || !currentAccount.username || !currentAccount.password) {
        throw new Error('Platform, username, and password are required');
      }

      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated');
      }

      const accountData = {
        platform: currentAccount.platform,
        username: currentAccount.username,
        password: currentAccount.password,
        notes: currentAccount.notes || '',
        country: currentAccount.country || null,
        ip: currentAccount.ip || null,
        status: currentAccount.status || 'New',
        user_id: user.id,
        user_data: currentAccount.user_data || null
      };

      const { data, error } = await supabase
        .from('accounts')
        .insert([accountData])
        .select('*')
        .single();

      if (error) throw error;

      if (selectedTags.length > 0) {
        const tagInserts = selectedTags
          .filter(tag => tag)
          .map(tag => ({
            account_id: data.id,
            tag: tag.trim()
          }));

        if (tagInserts.length > 0) {
          const { error: tagError } = await supabase
            .from('account_tags')
            .insert(tagInserts);

          if (tagError) throw tagError;
        }
      }

      setAccounts([...accounts, { ...data, tags: selectedTags }]);
      setShowModal(false);
      setCurrentAccount({});
      setSelectedTags([]);
      toast.success('Account added successfully');
    } catch (error) {
      console.error('Error adding account:', error);
      toast.error(error instanceof Error ? error.message : 'Error adding account');
    }
  };

  const handleEditAccount = async () => {
    if (!editingId) return;

    try {
      const { data, error } = await supabase
        .from('accounts')
        .update({
          platform: currentAccount.platform,
          username: currentAccount.username,
          password: currentAccount.password,
          notes: currentAccount.notes,
          country: currentAccount.country,
          ip: currentAccount.ip,
          status: currentAccount.status
        })
        .eq('id', editingId)
        .select('*')
        .single();

      if (error) throw error;

      // Handle tags update
      await supabase
        .from('account_tags')
        .delete()
        .eq('account_id', editingId);

      if (selectedTags.length > 0) {
        const tagInserts = selectedTags
          .filter(tag => tag)
          .map(tag => ({
            account_id: editingId,
            tag: tag.trim()
          }));

        if (tagInserts.length > 0) {
          const { error: tagError } = await supabase
            .from('account_tags')
            .insert(tagInserts);

          if (tagError) throw tagError;
        }
      }

      setAccounts(accounts.map(acc => 
        acc.id === editingId 
          ? { ...data, tags: selectedTags }
          : acc
      ));
      
      setShowModal(false);
      setCurrentAccount({});
      setSelectedTags([]);
      setEditingId(null);
      toast.success('Account updated successfully');
    } catch (error) {
      console.error('Error updating account:', error);
      toast.error(error instanceof Error ? error.message : 'Error updating account');
    }
  };

  const handleDeleteAccount = async (accountId: string) => {
    if (!window.confirm('Are you sure you want to delete this account?')) return;

    try {
      const { error } = await supabase
        .from('accounts')
        .delete()
        .eq('id', accountId);

      if (error) throw error;

      setAccounts(accounts.filter(acc => acc.id !== accountId));
      toast.success('Account deleted successfully');
    } catch (error) {
      console.error('Error deleting account:', error);
      toast.error(error instanceof Error ? error.message : 'Error deleting account');
    }
  };

  const handleRemoveTag = async (accountId: string, tagToRemove: string) => {
    try {
      const { error } = await supabase
        .from('account_tags')
        .delete()
        .eq('account_id', accountId)
        .eq('tag', tagToRemove);

      if (error) throw error;

      setAccounts(accounts.map(acc => 
        acc.id === accountId 
          ? { ...acc, tags: acc.tags?.filter(tag => tag !== tagToRemove) }
          : acc
      ));

      toast.success('Tag removed successfully');
    } catch (error) {
      console.error('Error removing tag:', error);
      toast.error(error instanceof Error ? error.message : 'Error removing tag');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  const filteredAccounts = accounts.filter(account => {
    const searchLower = searchTerm.toLowerCase();
    return (
      account.platform.toLowerCase().includes(searchLower) ||
      account.username.toLowerCase().includes(searchLower) ||
      account.notes?.toLowerCase().includes(searchLower) ||
      account.tags?.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  const totalPages = Math.ceil(filteredAccounts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedAccounts = filteredAccounts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleEdit = (id: string) => {
    const account = accounts.find(acc => acc.id === id);
    if (account) {
      setCurrentAccount(account);
      setSelectedTags(account.tags || []);
      setEditingId(id);
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Account Manager</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setCurrentAccount({});
                  setSelectedTags([]);
                  setEditingId(null);
                  setShowModal(true);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Account
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-6">
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search accounts..."
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <AccountTable
              accounts={paginatedAccounts}
              onEdit={handleEdit}
              onDelete={handleDeleteAccount}
              onRemoveTag={handleRemoveTag}
            />
            
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              startIndex={startIndex}
              endIndex={Math.min(startIndex + ITEMS_PER_PAGE, filteredAccounts.length)}
              totalItems={filteredAccounts.length}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>

      <AccountModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setCurrentAccount({});
          setSelectedTags([]);
          setEditingId(null);
        }}
        onSubmit={editingId ? handleEditAccount : handleAddAccount}
        account={currentAccount}
        setAccount={setCurrentAccount}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        isEditing={!!editingId}
      />
    </div>
  );
}