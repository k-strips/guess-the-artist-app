import { gql } from "@apollo/client";

export const GET_SCORES = gql`
  query scores {
    id
    playerName
    score
  }
`;
