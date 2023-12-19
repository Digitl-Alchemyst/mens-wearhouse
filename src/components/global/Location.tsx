'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { SlMagnifier } from 'react-icons/sl';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

// Define the Zod schema for validating the input
const searchSchema = z.string();

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate the input using Zod
    try {
      searchSchema.parse(searchInput);

      // If the input is valid, redirect the user to the search page
      router.push(`/store-locator/${encodeURIComponent(searchInput)}`);
    } catch (error) {
      // If the input is invalid, handle the error (e.g., show an error message)
      console.error(error.errors); // Use 'errors' instead of 'issues'
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-2'>
      <Input
        className='rounded-sm'
        placeholder='Enter zip code or city, state'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type='submit' className='w-full rounded-sm bg-mwnavy-600 px-4 py-2 text-mwblack-100'>
        FIND A STORE
      </button>
    </form>
  );
}

export default SearchBar;
