import React, { useState } from "react";

export default function SearchForm({ handleChange }) {
  // filter by name
  return (
    <section className="SearchForm">
      <form>
        <input
          type="text"
          name="name"
          placeholder="filter name"
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
