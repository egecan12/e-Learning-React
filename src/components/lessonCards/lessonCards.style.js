import styled from "@emotion/styled";

const LessonCardsContainer = styled.div`
  .card{
    height: 450px;
  }
// This is ONLY for mobile
  @media only screen and (max-width: 600px) {
    #postsGrid {
      display: block !important;
    }
    .card{
    }

    #lessonCardContainer {
      margin-left: 7%;
    }
  }
`;

export default LessonCardsContainer;
