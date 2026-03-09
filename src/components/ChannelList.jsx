export default function ChannelList({channels,onSelect}){

return(

<div className="channels">

{channels.map((c,i)=>(

<div
key={i}
className="channel"
onClick={()=>onSelect(c)}
>

<img src={c.logo} />

<span>{c.name}</span>

</div>

))}

</div>

)

}