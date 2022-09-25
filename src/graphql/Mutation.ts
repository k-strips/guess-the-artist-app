import { gql } from "@apollo/client";

export const CREATE_SCORE = gql`
  mutation AddScore($playerName: String!, $score: Int!) {
    addScore(playerName: $playerName, score: $score) {
      id
      playerName
      score
    }
  }
`;
