"use client";

import SearchIcon from "@/icons/search.svg";
import Button from "@/components/+Button/Button";
import Input from "@/components/+Input/Input";
import Select from "@/components/+Select/Select";

import styles from "./Search.module.scss";
import { useState } from "react";

export default function Search() {
  const [kind, setKind] = useState("produtos");
  return (
    <form className={styles.search}>
      <Select
        name="kind"
        className={styles.kindSelect}
        value={kind}
        onChange={(e) => setKind(e.target.value)}
      >
        <option value="produtos">Produtos</option>
        <option value="lojas e marcas">Lojas e marcas</option>
        <option value="materiais">Materiais</option>
      </Select>
      <Input
        type="search"
        name="q"
        placeholder={`Procure por ${kind}`}
        className={styles.searchInput}
      />
      <Button className={styles.searchButton} variant="subtle">
        <SearchIcon />
      </Button>
    </form>
  );
}
