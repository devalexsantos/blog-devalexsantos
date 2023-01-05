import { PostListing } from '../../components/PostListing'
import { ProfileHeader } from '../../components/ProfileHeader'
import { SearchForm } from '../../components/SearchForm'
import { HomeContainer } from './style'

export function Blog() {
  return (
    <HomeContainer>
      <ProfileHeader />
      <SearchForm />
      <PostListing />
    </HomeContainer>
  )
}
