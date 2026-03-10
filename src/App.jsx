import { useEffect, useState } from "react"
import Player from "./components/Player"
import ChannelList from "./components/ChannelList"
import SearchBar from "./components/SearchBar"
import CategoryFilter from "./components/CategoryFilter"
import { parseM3U } from "./utils/m3uParser.js"

export default function App(){

const [channels,setChannels]=useState([])
const [filtered,setFiltered]=useState([])
const [current,setCurrent]=useState(null)

useEffect(()=>{

fetch("/public/playlist.m3u")
.then(res=>res.text())
.then(data=>{

const parsed = parseM3U(data)

setChannels(parsed)
setFiltered(parsed)
setCurrent(parsed[0])

})

},[])

function search(text){

const f = channels.filter(c =>
c.name.toLowerCase().includes(text.toLowerCase())
)

setFiltered(f)

}

function filterCategory(cat){

if(cat==="All") setFiltered(channels)
else setFiltered(channels.filter(c=>c.group===cat))

}

return(

<div className="app">

<header>

<h1>ZTV v2</h1>

<SearchBar onSearch={search}/>

</header>

<CategoryFilter channels={channels} onFilter={filterCategory}/>

<div className="layout">

<Player channel={current}/>

<ChannelList
channels={filtered}
onSelect={setCurrent}
/>

</div>

</div>

)

}