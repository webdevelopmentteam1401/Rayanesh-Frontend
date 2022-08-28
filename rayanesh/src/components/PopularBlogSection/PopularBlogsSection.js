import React from 'react';
import './PopularBlogsSection.scss';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBCardFooter,
    MDBRow,
    MDBCol,
    MDBContainer
} from 'mdb-react-ui-kit';


import RelativeDate from "../RelativeDate";


const PopularBlogsSection = ({blogs}) => {
    return (
        <MDBContainer>
            <div className="subject">
                <h1>محبوب‌ترین‌ها</h1>
            </div>
            <MDBRow className='g-5 card-blog' bg="light">
                {
                    blogs.map((blog) => (
                            <MDBCol className='col-12 col-md-4' key={blog.id}>
                                <MDBCard
                                    className='align-items-center border-0 card-style w-90'>
                                    <MDBCardTitle className='mt-3 text-head'>{blog.title}</MDBCardTitle>
                                    <div className='bg-image hover-zoom image'>
                                        <MDBCardImage variant="top"
                                                      src={"https://picsum.photos/1000/1000?random=" + blog.id}
                                                      className="w-100 rounded"/>
                                    </div>
                                    <MDBCardText className='text-normal text-end'>
                                        {blog.description}
                                    </MDBCardText>
                                    <MDBCardFooter className='w-100 text-meta'>
                                        <div className='writer'>{blog.writer}</div>
                                        <div> {RelativeDate(new Date(blog.date))}</div>
                                    </MDBCardFooter>
                                </MDBCard>
                            </MDBCol>
                        )
                    )
                }
            </MDBRow>
        </MDBContainer>
    );
}

export default PopularBlogsSection;