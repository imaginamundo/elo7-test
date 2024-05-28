import SearchIcon from "@/icons/search.svg";
import Button from "@/components/+Button/Button";
import Input from "@/components/+Input/Input";

import styles from "./Search.module.scss";

export default function Search() {
  return (
    <form className={styles.search}>
      <select name="kind">
        <option>Produtos</option>
        <option>Lojas e marcas</option>
        <option>Materiais</option>
      </select>
      <Input
        type="search"
        name="q"
        placeholder="Procure por x"
        className={styles.searchInput}
      />
      <Button>
        <SearchIcon />
      </Button>
    </form>
  );
}
