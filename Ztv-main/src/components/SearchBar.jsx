export default function SearchBar({onSearch}){

return(

<input
placeholder="Search channel..."
onChange={(e)=>onSearch(e.target.value)}
/>

)

}