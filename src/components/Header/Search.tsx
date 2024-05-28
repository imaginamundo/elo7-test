import SearchIcon from "@/icons/search.svg";
import Button from "@/components/+Button/Button";
import Input from "@/components/+Input/Input";
import Select from "@/components/+Select/Select";

import styles from "./Search.module.scss";

export default function Search() {
  return (
    <form className={styles.search}>
      <Select name="kind" className={styles.kindSelect}>
        <option>Produtos</option>
        <option>Lojas e marcas</option>
        <option>Materiais</option>
      </Select>
      <Input
        type="search"
        name="q"
        placeholder="Procure por x"
        className={styles.searchInput}
      />
      <Button className={styles.searchButton}>
        <SearchIcon />
      </Button>
    </form>
  );
}
