import styled from "styled-components";

// Styled component named StyledRecipeCard
const StyledRecipeCard = styled.div`
    border: 2px solid #d0d4d7;
    border-radius: 5px;
    color: #686e74;
    font-family: 'Trebuchet MS', sans-serif;
    padding: 1rem;
    margin: 1rem 1.5rem;
    @media (min-width: 992px) {
        max-width: 420px;
    }
    img {
        max-width: 100%;
        height: auto;
        display: inline-block;
        vertical-align: middle;
    }
`;

export default StyledRecipeCard;