import axios from "axios";

interface JWTData {
    token: string;
}

export const baseURL = process.env.NEXT_PUBLIC_API_URL;
export const jwt_string:string|undefined = process.env.NEXT_PUBLIC_JWT;

const agent = axios.create({baseURL});

agent.interceptors.request.use(async (config) => {
    let token;
    try {
        const jwt_data: string = JSON.parse(
            localStorage.getItem(process.env.NEXT_PUBLIC_JWT!)!
        )
        // token = jwt_data.token;
        config.headers = {'Authorization': jwt_data}
    } catch (error:any) {
        console.log(error.data);
    }
    return config;
})

export default agent;