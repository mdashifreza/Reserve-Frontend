import Items from "./Items";
import { reserve, about, usefulLink, followUs } from "./Data";
const ItemsContainer = () => {
return (
    <div className="bg-gray-300 h-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:px-8 py-8">
        <Items data={reserve} title="Reserve"/>
        <Items data={about} title="About"/>
        <Items data={usefulLink} title="Useful Link"/>
        <Items data={followUs} title="Follow us"/>
        </div>
    </div> 
)
}

export default ItemsContainer;