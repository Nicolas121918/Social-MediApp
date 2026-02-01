import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';
import ReportIcon from '@mui/icons-material/Report'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import "./home.css"

interface Post {
  id: number;
  title: string;
  createdby: string;
  createdAt: string;
  image_url: string;
}

/* interface MediaProps {
  loading?: boolean;
}
 */


export default function Home() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [title, settitle] = useState("")
  const [url, seturl] = useState("")
  const [name, setname] = useState("")
  const reset = () => {
    settitle("");
    seturl("");
  }

  useEffect(() => {
    searchById();
    getposts();
  }, [])

  const getposts = () => {
    fetch("http://localhost:3000/auth/publications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };


  const searchById = async () => {
    const userId = localStorage.getItem("userId")
    if (!userId) return;
    try {
      const response = await fetch(`http://localhost:3000/auth/search/${userId}`);
      const data = await response.json();
      if (data.username && data.username !== name) {
        setname(data.username);
      }
    } catch (error) {
      console.log(error)
    }

  };
  const createnewpost = async () => {
    await fetch("http://localhost:3000/auth/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        image_url: url,
        createdby: name
      })
    })
    reset();
    getposts();
  }

  const DrawerList = (
    <Box sx={{ width: 250, bgcolor: '#8f8f8ffa', height: '100%', color: 'white' }} role="presentation">
      <List>
        {[
          { text: 'Home', icon: <HomeIcon /> },
          { text: 'Favoritos', icon: <FavoriteIcon /> },
          { text: 'Mensajes', icon: <MailIcon /> },
          { text: 'Notificaciones', icon: <NotificationsIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: 'Reportes', icon: <MailIcon /> },
          { text: 'Papelera', icon: <DeleteIcon /> },
          { text: 'Spam', icon: <ReportIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box >
      <Drawer variant="permanent">
        {DrawerList}
      </Drawer>

      <div className='contain'>

        <Card sx={{ width: '40%', m: 2, p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h6">Crear Nueva Publicación</Typography>
          <TextField
            label="¿Qué estás pensando?"
            multiline
            rows={3}
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />
          <TextField
            label="URL de imagen (opcional)"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => seturl(e.target.value)}
            required
          />
          <Button onClick={createnewpost} variant="contained" color="primary">Publicar</Button>
        </Card>


        {posts.map((post) => (
          <Card key={post.id} sx={{ width: '40%', m: 2 }}>
            <CardHeader
              avatar={
                <Avatar
                  alt={post.title}
                  src="https://www.flaticon.es/icono-gratis/telefono_10219380?term=personas&page=1&position=39&origin=tag&related_id=10219380"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.createdby}
              subheader={new Date(post.createdAt).toLocaleDateString()}
            />
            {post.image_url && (
              <CardMedia
                component="img"
                height="140"
                image={post.image_url || "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_hybrid&w=740&q=80"}
                alt={post.title}
              />
            )}
            <CardContent>
              <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
                {post.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

    </Box>
  );
}
