import { ReactNode } from "react";

export interface inputProps{
    name: string;
    type: string;
    placeholder?: string;
    value?: string
    className?: string
}

export interface eduProps{
    schoolname: string;
    degree: string;
    location: string;
    startDate: string;
    endDate: string;
    imgUrl: string;
    achievements: string[];
}