export function parseM3U(data){

const lines = data.split("\n")

let channels = []
let current = null

for(let line of lines){

line = line.trim()

if(line.startsWith("#EXTINF")){

const name = line.split(",").pop()

const logoMatch = line.match(/tvg-logo="(.*?)"/)
const groupMatch = line.match(/group-title="(.*?)"/)

current = {
name:name || "Unknown",
logo: logoMatch ? logoMatch[1] : "",
group: groupMatch ? groupMatch[1] : "Other",
url:""
}

}

else if(line.startsWith("http") && current){

current.url = line
channels.push(current)
current=null

}

}

return channels

}