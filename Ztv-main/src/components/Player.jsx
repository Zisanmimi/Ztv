import { useEffect, useRef } from "react"
import videojs from "video.js"

export default function Player({channel}){

const videoRef = useRef(null)
const playerRef = useRef(null)

useEffect(()=>{

 if(!playerRef.current){

 playerRef.current = videojs(videoRef.current,{
  autoplay:true,
  controls:true,
  fluid:true,
  sources:[{
    src:channel?.url,
    type:"application/x-mpegURL"
  }]
 })

 }else{

 const player = playerRef.current
 player.src({
   src:channel?.url,
   type:"application/x-mpegURL"
 })

 }

},[channel])

return(

<div className="player">

{channel && <h2>{channel.name}</h2>}

<video
 ref={videoRef}
 className="video-js vjs-big-play-centered"
/>

</div>

)

}