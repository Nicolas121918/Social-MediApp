import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./home.css"


interface Post {
  id: number;
  title: string;
  createdby: number;
  createdAt: string;
  image_url: string;
}

interface MediaProps {
  loading?: boolean;
}



export default function Home(props: MediaProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
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
    getposts();
  }, []);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {<MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {<InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent">
        {DrawerList}
      </Drawer>
      <div className='contain' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', flex: 1, padding: '20px' }}>
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
              title={post.title  || "Sin Titulo"}
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
