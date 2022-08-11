import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_REVIEWS } from "../../utils/queries"

import { Box, Heading, FormControl, Textarea, Button, Spinner } from "@chakra-ui/react";

const specialStyle = {
    special: {
        width: '40vw',
    }
}

function Reviews() {
    const { loading, data } = useQuery(QUERY_ALL_REVIEWS);

    const reviews = data ?? []

    return (
        <Box>
            <Box 
                mb="10px" 
                backgroundColor="blue.200" 
                style={specialStyle.special}
            >                
                <Heading pl="10px">Seller Reviews</Heading>
            </Box>

            <FormControl>
                <Textarea
                    isDisabled 
                    placeholder="Leave your review here"
                    style={specialStyle.special}
                />
                <Box >
                    <Button>
                        Submit
                    </Button>
                </Box>
            </FormControl>

            { reviews.length ? (
                <Box>
                    {reviews.map((review) => (
                        <Box key={review._id}>
                            {review.reviewAuthor}
                            {review.reviewText}
                        </Box>
                    ))}
                </Box>
            ) : (
                <p>No reviews for this seller yet.. be the first?</p>
            )}

            { loading ? <Spinner /> : null}
        </Box>
    )
}

export default Reviews;