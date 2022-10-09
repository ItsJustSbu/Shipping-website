 let weather = {
    apikey: "77163287a33a5e62fe9515f1e31a169d",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city+"&units=metric&appid="+this.apikey
        ).then((response) => response.json())
        .then((data) =>this.displayWeather(data))
    },
    displayWeather:function(data){
        const {name} = data;
        const{icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const{speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp+"\u00b0 C";
        document.querySelector(".humidity").innerText = "humidity : " +humidity+"%";
        document.querySelector(".wind").innerText ="wind speed :"+ speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
    
 };
 document.querySelector(".button").addEventListener("click",function(){
    weather.search();
 });

 weather.fetchWeather("Centurion")

 