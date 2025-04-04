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

export interface expProps{
    place: string,
    position: string,
    type?: string,
    startDate: string,
    endDate?: string,
    desc: string[],
}

export interface projProps{
    name: string,
    imgUrl: string,
    subtitle?: string,
    applink?: string,
    github?: string,
    technologies?: string[],
    // desc?: string[],
}

export interface skillProps{
    name: string,
}

