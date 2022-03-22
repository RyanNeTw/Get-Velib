// window.addEventListener("DOMContentLoaded" , function(){
//     let img = document.querySelector(".img")
//     let gender = document.querySelector(".gender")
//     let first = document.querySelector(".first")
//     let last = document.querySelector(".last")
//     let date = document.querySelector(".date")
//     let button = document.querySelector(".button")
//     button.addEventListener("click" ,function(){
//         fetch("https://randomuser.me/api/").then(function(response){
      
//         response.json().then(function(json){

//                 gender.innerText = json["results"][0]["gender"]
//                 first.innerText = json["results"][0]["name"]["first"]
//                 last.innerText =  json["results"][0]["name"]["last"]
//                 date.innerText =  json["results"][0]["dob"]["date"]
//                 img.src = json["results"][0]["picture"]["large"]
//             })
//         })
//     })
//     fetch("https://randomuser.me/api/").then(function(response){
//         let img = document.querySelector(".img")
//         let gender = document.querySelector(".gender")
//         let first = document.querySelector(".first")
//         let last = document.querySelector(".last")
//         let date = document.querySelector(".date")
//       response.json().then(function(json){
//           console.log(json["results"][0])
//           console.log(json["results"][0]["gender"])
//           console.log(json["results"][0]["name"]["first"])
//           console.log(json["results"][0]["name"]["last"])
//           console.log(json["results"][0]["dob"]["date"])
//           console.log(json["results"][0]["picture"]["large"])

//               gender.innerText = json["results"][0]["gender"]
//               first.innerText = json["results"][0]["name"]["first"]
//               last.innerText =  json["results"][0]["name"]["last"]
//               date.innerText =  json["results"][0]["dob"]["date"]
//               img.src = json["results"][0]["picture"]["large"]

             
          
//       })
//     })
// })


window.addEventListener("DOMContentLoaded",function(){
    let body = document.querySelector(".body")
    let nameStation = document.querySelector(".name")
    let velib = document.querySelector(".velib")
    let VelibPlace = document.querySelector(".VelibPlace")
    let VelibE = document.querySelector(".VelibE")
    let VelibMecha = document.querySelector(".VelibMecha")
    let bar = document.querySelector(".bar")
    fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=stationcode=11105&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation").then(function(response){
        response.json().then(function(json){
            // console.log(json["records"][0]["fields"]["ebike"])
            velib.innerText = json["records"][0]["fields"]["numbikesavailable"]
            velibNum = json["records"][0]["fields"]["numbikesavailable"]
            nameStation.innerText = json["records"][0]["fields"]["name"]
            VelibPlace.innerText = json["records"][0]["fields"]["numdocksavailable"]
            VelibENum = json["records"][0]["fields"]["ebike"]
            velibCapacity = json["records"][0]["fields"]["capacity"]
            velibNum = json["records"][0]["fields"]["numbikesavailable"]
            VelibMechaNum =  json["records"][0]["fields"]["mechanical"]
            altitude = json["records"][0]["fields"]["coordonnees_geo"][0]
            longitude = json["records"][0]["fields"]["coordonnees_geo"][1]
            if(parseInt(velibNum) < parseInt(velibCapacity)*0.3){
                velib.style.color = "red"
            }else{
                velib.style.color = "green"
            }
            if(velibNum == 0){
                VelibE.innerText=0 
            }else if(velibNum > 0) {
                VelibEPercent = (parseInt(VelibENum)*100) / parseInt(velibNum)
                VelibE.innerText = VelibEPercent
            }
            if(velibNum == 0){
                VelibMecha.innerText = 0
            }else if( velibNum > 0){
                VelibMechaPercent = (parseInt(VelibMechaNum)*100) / parseInt(velibNum)
                VelibMecha.innerText = VelibMechaPercent
            }
            console.log(json["records"][0]["fields"])
            barPercent = (parseInt(velibNum)*100) / parseInt(velibCapacity)
            bar.value = barPercent




            // function init(){
            //     console.log('inside init')
            //     const parmentier{
            //         alt : parseInt(altitude)
            //         long : parseInt(longitude)
            //     }
            //     const zoomLevel = 7
            //     const map = L.map('mapid').setview([parmentier.alt, parmentier.long], zoomLevel)
            //     const miniLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            //         maxZoom: 18,
            //         id: 'mapbox/streets-v11',
            //         tileSize: 512,
            //         zoomOffset: -1,
            //         accessToken: 'pk.eyJ1IjoibmV0cm96IiwiYSI6ImNreXluaDltYTBvMGkybnF2bXVwb2tjNTQifQ.rYm6X4PMV4Qt-6wCkMXj7g'
            //     });
            //     mainLayer.AddTo(map)
            // }


        })
    })
})