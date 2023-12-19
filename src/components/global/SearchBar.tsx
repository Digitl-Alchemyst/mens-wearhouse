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
    router.push(`/search/${encodeURIComponent(searchInput)}`);
  } catch (error) {
    // If the input is invalid, handle the error (e.g., show an error message)
    console.error(error.errors); // Use 'errors' instead of 'issues'
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center space-x-2 bg-mwblack-200/40 pr-3 rounded-md'
    >
      <Input
        className='h-13 w-62  bg-mwblack-100/30'
        placeholder='What are you looking for?'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type='submit' className=''>
        <SlMagnifier className='h-6 w-6' />
      </button>
    </form>
  );
}

export default SearchBar;
