
import React from 'react'

import { Container, Box, Paper, Typography, Grid, ListItem, List, ListItemButton, ListItemText } from '@mui/material';
import { ChatModal } from '../components/chat-modal/ChatModal';


export const Home = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <React.Fragment>
            <Container maxWidth="lg">
        
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: '#fff',
                    margin: '2rem',
                    borderRadius: '.5rem',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: '80%',
                    height: 'auto',
                    padding: '2rem 1rem'
                }, }}>
                    <Grid>
                        <Typography variant="h2"  sx={{textAlign: 'center'}}> Serviços para você</Typography>   
                    </Grid>
                    <Grid sx={{
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                        
                    }}>
                        <Paper  sx={{
                             margin: '2rem'
                        }}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleOpen}>
                                    <ListItemText primary="Abrir o MEI" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                    <ListItemText primary="Checar a situação do meu MEI" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                    <ListItemText primary="Levar o meu MEI para próximo nível empresarial" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleOpen}>
                                    <ListItemText primary="Criar sua conta gov.br" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemText primary="Não sei o que eu quero, preciso de ajudar" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Paper>    
                        <Paper sx={{
                             margin: '2rem'
                        }}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleOpen}>
                                    <ListItemText primary="Abrir o MEI" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                    <ListItemText primary="Checar a situação do meu MEI" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                    <ListItemText primary="Levar o meu MEI para próximo nível empresarial" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleOpen}>
                                    <ListItemText primary="Criar sua conta gov.br" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemText primary="Não sei o que eu quero, preciso de ajudar" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Paper>    
                        <Paper sx={{
                             margin: '2rem'
                        }}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleOpen}>
                                    <ListItemText primary="Abrir o MEI" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                    <ListItemText primary="Checar a situação do meu MEI" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                    <ListItemText primary="Levar o meu MEI para próximo nível empresarial" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleOpen}>
                                    <ListItemText primary="Criar sua conta gov.br" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemText primary="Não sei o que eu quero, preciso de ajudar" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Paper>    
                    </Grid>
                </Box>
                <ChatModal open={open} handleClose={handleClose} />
            </Container>
        </React.Fragment>
    )
}