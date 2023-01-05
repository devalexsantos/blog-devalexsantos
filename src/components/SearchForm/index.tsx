import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div className="header-search">
        <strong>Publicações</strong>
        <span>06 publicações</span>
      </div>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
        <button>
          <MagnifyingGlass size={16} />
          Buscar
        </button>
      </form>
    </SearchFormContainer>
  )
}
