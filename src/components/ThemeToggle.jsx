'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/button';
import { Monitor, Moon, Sun } from 'lucide-react';

const themes = [
  { id: 1, name: 'Dark', Icon: Moon, value: 'dark' },
  { id: 2, name: 'Light', Icon: Sun, value: 'light' },
  { id: 3, name: 'System', Icon: Monitor, value: 'system' },
];

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {resolvedTheme === 'dark' ? (
            <Moon className="size-4" />
          ) : (
            <Sun className="size-4" />
          )}
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(({ id, name, Icon, value }) => (
          <DropdownMenuItem key={id} onClick={() => setTheme(value)}>
            {name}
            <Icon className="size-4" />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}