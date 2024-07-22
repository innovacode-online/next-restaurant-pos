import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import { validateCredentials } from "./modules/auth";

export const authProviders: Provider[] = [
    Credentials({
        name: "creadentials",
        credentials: {
            email: {},
            password: {},
        },
        authorize: async (credentials) => {

            // VALIDATE CREDENTIALS 
            const user = await validateCredentials(credentials.email as string, credentials.password as string);
            return user;
        },
    }),
]; 