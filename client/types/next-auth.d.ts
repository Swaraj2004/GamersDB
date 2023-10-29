import nextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            _id: string;
            username: string;
            email: string;
            profileImg: string;
        };
    }
}
