import { StaticImageData } from "next/image";

export interface Project {
    id?: string;
    name: string;
    author: string;
    url: string;
    img?: string | StaticImageData;
    description: string;
    created_at?: string;
    updated_at?: string;
}
