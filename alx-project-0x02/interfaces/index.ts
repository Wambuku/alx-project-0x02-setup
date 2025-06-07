export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
    label: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    
}

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}


export interface UserProps {
    id:number;
    name:string;
    email: string;
    address: {
        city:string;
    };
}