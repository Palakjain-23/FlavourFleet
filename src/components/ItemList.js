import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                    key={item.card.info.id}>
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>- ⟨₹⟩ {item.card.info.price / 100}</span>
                        </div>    
                            <p className="text-xs "> {item.card.info.description}</p>
                     </div>
                        
                        <div className="w-3/12 p-4 ">
                        <div className="absolute">
                             <button className="bg-black text-white p-2 bottom-0 rounded-lg">+ ADD</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full" />   
                    </div>
                    
                </div>
            ))}
        </div>
    );
};
export default ItemList;
