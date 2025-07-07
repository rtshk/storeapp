"use client"
import { createContext, useState, ReactNode } from "react";

type billitemsType = {
  id: string;
  itemName: string;
  quantity: number;
  price: number;
};

type BillitemsContextType = {
  value: billitemsType[] | null;
  setValue: React.Dispatch<React.SetStateAction<billitemsType[] | null>>;
};

export const BillitemsContext = createContext<BillitemsContextType | null>(
  null
);

export function BillitemsProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<billitemsType[] | null>(null);
  return (
    <BillitemsContext.Provider value={{ value, setValue }}>
      {children}
    </BillitemsContext.Provider>
  );
}
