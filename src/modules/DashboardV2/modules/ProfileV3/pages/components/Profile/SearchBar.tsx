import React from 'react';
import { Search } from 'lucide-react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search for skills, jobs, locations, colleges"
        className={styles.input}
      />
      <Search className={styles.icon} />
    </div>
  );
}
