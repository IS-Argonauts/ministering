"use client";
import * as React from "react";
import { Header } from "./Header";
import { SearchInput } from "./SearchInput";
import { UserList } from "./UserList";
import { KeyboardLayout } from "./KeyboardLayout";

export const DirectorySearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("La");

  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="bg-slate-50 min-h-[screen]">
        <Header />
        <div className="p-4">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
          <UserList />
          <KeyboardLayout />
        </div>
      </div>
    </main>
  );
};

export default DirectorySearch;
