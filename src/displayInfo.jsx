import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function DisplayInfo({ info }) {
  const haze_img =
    "https://brightpunjabexpress.com/wp-content/uploads/2020/11/foggy-weather.png";
  const sunny_img =
    "https://media.istockphoto.com/id/1240767070/photo/wooden-floor-beside-green-rice-field-in-the-morning-with-sunray.jpg?s=612x612&w=0&k=20&c=8AsYfb-_mxfHZQATu2V0LXxitb_GZjs1NfPMNW1Z-BI=";
  const cloudy_img =
    "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const foggy_img =
    "https://media.istockphoto.com/id/108272810/photo/lonely-drive.jpg?s=612x612&w=0&k=20&c=JPPpNpM-DMoKcbeDXZB0gs1UogmtR2_E0FaH1vxS7zo=";
  const clear_img =
    "https://c0.wallpaperflare.com/preview/183/978/481/india-gobindpur-balurghat.jpg";
  const default_img =
    "https://images.pexels.com/photos/30446740/pexels-photo-30446740.jpeg?cs=srgb&dl=pexels-merictuna-30446740.jpg&fm=jpg";
  const mist_img =
    "https://media.istockphoto.com/id/1055906130/photo/foggy-rural-asphalt-highway-perspective-with-white-line-misty-road-road-with-traffic-and.jpg?s=612x612&w=0&k=20&c=NS_1x0gGJQkJ7RfC1J17bzu5PFj2xJGYoLA6L3BCZzg=";

  const weatherImage =
    info?.weather === "Haze"
      ? haze_img
      : info?.weather === "Sunny"
      ? sunny_img
      : info?.weather === "Clouds"
      ? cloudy_img
      : info?.weather === "Smoke"
      ? foggy_img
      : info?.weather === "Clear"
      ? clear_img
      : info?.weather === "Mist"
      ? mist_img
      : default_img; // Fallback image if no condition matches

  return (
    <div className="info">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={weatherImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div style={{ marginBottom: "8px" }}>
                Temperature: {info.temperature}°C
              </div>
              <div style={{ marginBottom: "8px" }}>
                Humidity: {info.humidity}%
              </div>
              <div style={{ marginBottom: "8px" }}>
                Wind Speed: {info.wind} m/s
              </div>
              <div style={{ marginBottom: "8px" }}>
                Min Temperature: {info.minTemp}°C
              </div>
              <div style={{ marginBottom: "8px" }}>
                Max Temperature: {info.maxTemp}°C
              </div>
              <div style={{ marginBottom: "8px" }}>
                The weather can be described as <i>{info.weather}</i>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default DisplayInfo;
