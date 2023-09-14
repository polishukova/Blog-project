import { Counter } from "../../Lessons/Counter"
import { PostsList } from "../Post/PostsList"
import { Title } from "../Title/Title"
import { FavoritePosts } from "./FavoritePosts"
import { Tabs } from "./Tabs"

export const AllTabs = () => {
    const tabNames = [{ tabComponent: <PostsList/>, tabName: 'All' }, { tabComponent: <FavoritePosts/>, tabName: 'My Favorites' }, { tabComponent: <Counter/>, tabName: 'Popular' }]
    return <div>
        <Title text='Blog' />
        <Tabs tabs={tabNames}/>
    </div>
}