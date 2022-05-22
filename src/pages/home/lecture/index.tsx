import { Box } from '@mui/material';
import LectureDetails from 'components/lecture/LectureDetails';
import { Course } from 'datatypes/coursetypes';
import LectureLayout from 'layouts/lecture';
import { GetStaticProps } from 'next';
import React from 'react';

const index = () => {
    return (
        <div>
            <Box>
                <LectureDetails />
            </Box>
        </div>
    );
};

index.PageLayout = LectureLayout;

export default index;

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch("https://jsonkeeper.com/b/M6QQ");
    const courses: Course = await res.json();
    return {
        props: {
            courses,
        },
    };
};
