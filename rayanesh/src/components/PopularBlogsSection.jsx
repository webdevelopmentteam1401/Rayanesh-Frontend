import React from "react";
import {Container} from "@mui/system";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent
} from "@mui/material";
import BlogMeta from "./general/BlogMeta";
import Image from "./general/Image";


const PopularBlogsSection = ({blogs}) => {
    return (
        <Container>
            <Typography variant={"h4"} dir={"rtl"} m={2}>
                محبوب‌ترین‌ها
            </Typography>
            <Grid container justifyContent={'center'} spacing={2} columns={{sm: 12, md: 3}}>
                {blogs.map((blog) => (
                    <Grid item sm={12} md={1} key={blog.id}>
                        <Card
                            sx={{
                                ':hover': {
                                    boxShadow: 20,
                                }
                            }}
                        >
                            <CardActionArea>
                                <CardMedia sx={{height:275, width:'100%'}}>
                                    <Image
                                        width='100%'
                                        height='100%'
                                        path={"https://picsum.photos/1000/1000?random=" + (blog.id + 3)}
                                        name={blog.title}/>
                                </CardMedia>
                                <CardContent dir='rtl'>
                                    <Typography variant="h5">
                                        {blog.title}
                                    </Typography>
                                    <Typography paragraph variant="body2">
                                        {blog.description}
                                    </Typography>
                                    <BlogMeta blog={blog}/>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PopularBlogsSection;