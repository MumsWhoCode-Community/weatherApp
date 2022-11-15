

# Weather App

This is a weather application built with javascript.
it displays the weather of the location inputed.


## API Reference

#### This was built using OPEN WEATHER API
```
https://openweathermap.org/current#one
```

```
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `lat`     | `string` | **Required**. Latitude |
| `lon`     | `string` | **Required**. Longitude |
| `api`     | `string` | **Required**. Your API key |

#### Get item

```
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}
```

| Parameter   | Type     | Description                       |
| :--------   | :------- | :-------------------------------- |
| `city`      | `string` | **Required**. The city you want to fetch it's weather |
| `api`       | `string` | **Required**. Your API key |



