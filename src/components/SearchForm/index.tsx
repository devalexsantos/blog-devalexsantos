import { SearchFormContainer } from './style'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div className="header-search">
        <strong>Publicações</strong>
        <span>06 publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
