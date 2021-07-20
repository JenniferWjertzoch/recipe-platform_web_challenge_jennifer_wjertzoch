import styled from "styled-components";

// Styled component named StyledRecipeDetailCard
const StyledRecipeDetailCard = styled.div`
    border: 2px solid #d0d4d7;
    border-radius: 5px;
    color: #686e74;
    font-family: 'Trebuchet MS', sans-serif;
    margin: 0 1.25rem;
    @media (min-width: 992px) {
        width: 50%;
    }
    img {
        max-width: 100%;
        height: auto;
        display: inline-block;
        vertical-align: middle;
    }
    .recipe-detail-card_content {
        margin: 1.25rem;
    }
    .recipe-detail-card_content-chef,
    .recipe-detail-card_content-tags {
        color: #47d7ab;
    }
`;

export default StyledRecipeDetailCard