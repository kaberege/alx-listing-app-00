import { ReactNode } from "react";

export interface CardProps {
  title: string;
  image: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export type MyProps = {
  children: ReactNode;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  },
  rating: number;
  category: string[],
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  },
  image: string;
  discount: string;
}