export interface LoginResponse {
    accessToken: string;
    // name: string;
    // status: string;
    // message: string;
}

export interface LoginRequest {
    user: string;
    pass: string;
}

export interface UserProfileResponse {
    fullName: string;
    email: string;
    userName: string;
}
