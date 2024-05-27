import SearchIcon from "@/icons/search.svg";
import Button from "@/components/+Button/Button";
import Input from "@/components/+Input/Input";

export default function Search() {
  return (
    <form>
      <select name="kind">
        <option>Produtos</option>
        <option>Lojas e marcas</option>
        <option>Materiais</option>
      </select>
      <Input type="search" placeholder="Procure por x" />
      <Button>
        <SearchIcon />
      </Button>
    </form>
  );
}
