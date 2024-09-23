export type TokenResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
  id_token: string;
};

export type UserProfile = {
  id: string;
  username: string;
};
