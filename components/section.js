
import Item from "./Item"

export default function Section(pageProps) {
    return (
    <div className="mb-16 lg:mt-0 font-serif max-w-lg mx-2">
        <h1 className="text-2xl mb-8 font-semibold"> {pageProps.title} </h1>
	    {pageProps.sectionItems.map((sectionItem, index) => (
        	<Item name={sectionItem.name} price={sectionItem.price} desc={sectionItem.desc}/>
	))}
    </div>
    )
}
