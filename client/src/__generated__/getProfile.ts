/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProfile
// ====================================================

export interface getProfile_me {
  __typename: "User";
  id: string;
  email: string;
}

export interface getProfile {
  me: getProfile_me | null;
}
