import Items from "./Items";
import { Reserve, about, UsefulLink, FollowUs } from "./Data";
const ItemsContainer = () => {
return (
    <div className="bg-gray-300 h-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:px-8 py-8">
        <Items Links={Reserve} title="Reserve"/>
        <Items Links={about} title="About"/>
        <Items Links={UsefulLink} title="Useful Link"/>
        <Items Links={FollowUs} title="Follow us"/>
        </div>
    </div> 
)
}

export default ItemsContainer