import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CardCreater({ data, id, deleteStudent }) {
  let navigat = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwaycDNaThYOFeVVSvvk7hOqB66BkZdD3n9JVUPUDiQ&s"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {data.Name}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Position:{data.Position}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Age:{data.Age}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Office:{data.Office}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Starting_Date{data.Startdate}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Salary:${data.Salary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => deleteStudent(id)} size="small">
          Delete
        </Button>
        <Button
          size="small"
          onClick={() => navigat(`/User/Edit/${data.id}`)}
          color="primary"
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardCreater;
