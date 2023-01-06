import { MagnifyingGlass } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { PostsContext } from '../../contexts/PostsContext'
import { SearchFormContainer } from './style'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Labels } from '../Labels'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { totalCount, getSearchPosts } = useContext(PostsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await getSearchPosts(data.query)
  }

  return (
    <SearchFormContainer>
      <div className="header-search">
        <strong>Publicações</strong>
        <span>
          <strong>{totalCount}</strong> post{'(s)'}
        </span>
      </div>
      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={16} />
          Buscar
        </button>
      </form>
      <div>Categorias:</div>
      <Labels />
    </SearchFormContainer>
  )
}
