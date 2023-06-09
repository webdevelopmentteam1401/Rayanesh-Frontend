import {
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Card,
    Container, CardActionArea, Divider,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import React from "react";
import {useInView} from "react-intersection-observer";
import BlogMeta from "./general/BlogMeta";
import SkeletonBlog from "./SkeletonBlog";
import {useNavigate} from "react-router-dom";
import {styled} from "@mui/material/styles";
import Image from "./general/Image";


const BlogCard = styled(Card)(({theme}) => ({
    boxShadow: 'none',
    marginBottom: 3,
    marginTop: 3,
    maxWidth: '75%',
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
    }
}));

const BlogMedia = styled(CardMedia)(({}) => ({
    borderRadius: 2,
}))

const MediaGrid = styled(Grid)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    direction: 'initial',
}))

const BlogContainer = styled(Container)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const mediaStyle = {
    borderRadius: 4,
    marginBottom: 1,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'auto'

    // set height and width in large screens


};

const BlogsViewer = ({
                         blogs,
                         fetchNextPage,
                         hasNextPage,
                         isFetching,
                         isFetchingNextPage,
                         setPage,
                         page,
                     }) => {
    const {ref, inView} = useInView();
    React.useEffect(() => {
        if (inView) {
            console.log('something here')
            setPage((prev) => prev + 1);
            fetchNextPage();
        }
    }, [inView]);
    const navigate = useNavigate();
    return (
        <div>

            <BlogContainer>
                {blogs?.map((blog) => (
                    <BlogCard
                        onClick={() => navigate(`/blogs/${blog.id}`)}
                        key={blog.id}
                    >
                        <CardActionArea>
                            <Grid dir={"rtl"} container>
                                <Grid item sm={9} xs={7}>
                                    <CardContent dir={"rtl"}>
                                        <Typography variant={"h6"} fontWeight={"bold"} gutterBottom>
                                            {blog.title}
                                        </Typography>
                                        <Typography
                                            variant={"body2"}
                                            color={"textSecondary"}
                                            gutterBottom
                                        >
                                            {blog.description}
                                        </Typography>
                                        <BlogMeta blog={blog}/>
                                    </CardContent>
                                </Grid>
                                <MediaGrid item sm={3} xs={5}>
                                    <BlogMedia
                                        sx={mediaStyle}
                                    >
                                        <Image
                                            width='100%'
                                            height='100%'
                                            path={"https://picsum.photos/1000/1000?random=" + (blog.id + 3)}
                                            name={blog.title}
                                            imageStyle={mediaStyle}
                                        />
                                    </BlogMedia>
                                </MediaGrid>
                            </Grid>
                        </CardActionArea>
                        <Divider/>
                    </BlogCard>
                ))}
                    {
                        <SkeletonBlog/>
                    }
                    <Grid container justifyContent={'center'}>
                        <LoadingButton
                            loading
                            ref={ref}
                            onClick={() => {
                                return fetchNextPage();
                            }}
                            disabled={!hasNextPage || isFetchingNextPage}
                        >
                            {isFetchingNextPage
                                ? "Loading more..."
                                : hasNextPage
                                    ? "Load Newer"
                                    : "Nothing more to load"}
                        </LoadingButton>
                    </Grid>
                <div>
                    {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
                </div>
            </BlogContainer>
        </div>
    );
};

export default BlogsViewer;
