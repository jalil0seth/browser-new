import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  TextInput,
  TagsInput,
  Grid,
  Text,
  ActionIcon,
} from '@mantine/core';
import { Pencil, Trash, Plus } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Niche } from '../types';

export function NichesPage() {
  const navigate = useNavigate();
  const { niches, addNiche, updateNiche, deleteNiche } = useStore();
  const [editing, setEditing] = useState<Niche | null>(null);
  const [name, setName] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);

  const handleSubmit = () => {
    if (editing) {
      updateNiche({ ...editing, name, keywords });
      setEditing(null);
    } else {
      addNiche({ name, keywords });
    }
    setName('');
    setKeywords([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <Text size="xl" weight={700} className="mb-4 text-gray-900">
          {editing ? 'Edit Niche' : 'Add New Niche'}
        </Text>
        <Card className="bg-white border border-gray-200" radius="md">
          <TextInput
            label="Niche Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
          />
          <TagsInput
            label="Keywords"
            value={keywords}
            onChange={setKeywords}
            className="mb-4"
          />
          <Button 
            onClick={handleSubmit} 
            disabled={!name || keywords.length === 0}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            {editing ? 'Update' : 'Add'} Niche
          </Button>
        </Card>
      </div>

      <Text size="xl" weight={700} className="mb-4 text-gray-900">
        Your Niches
      </Text>
      <Grid>
        {niches.map((niche) => (
          <Grid.Col key={niche.id} span={{ base: 12, sm: 6, md: 4 }}>
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow" radius="md">
              <Text size="lg" weight={500} className="mb-2 text-gray-900">
                {niche.name}
              </Text>
              <div className="flex flex-wrap gap-1 mb-4">
                {niche.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <Button
                  variant="light"
                  onClick={() => navigate(`/videos/${niche.id}`)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900"
                >
                  View Videos
                </Button>
                <div className="flex gap-2">
                  <ActionIcon
                    variant="subtle"
                    onClick={() => {
                      setEditing(niche);
                      setName(niche.name);
                      setKeywords(niche.keywords);
                    }}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Pencil className="w-4 h-4" />
                  </ActionIcon>
                  <ActionIcon
                    variant="subtle"
                    color="red"
                    onClick={() => deleteNiche(niche.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash className="w-4 h-4" />
                  </ActionIcon>
                </div>
              </div>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}