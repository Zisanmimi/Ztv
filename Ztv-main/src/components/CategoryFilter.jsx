export default function CategoryFilter({channels,onFilter}){

const groups = ["All",...new Set(channels.map(c=>c.group))]

return(

<div className="categories">

{groups.map((g,i)=>(

<button
key={i}
onClick={()=>onFilter(g)}
>

{g}

</button>

))}

</div>

)

}