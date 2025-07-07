"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StockItem } from "./stock-items";

type item = {
  id: string;
  item_name: string;
  quantity: number;
  image_url: string;
  price: number;
  user_id: string;
  created_at: string;
  category_id: string;
};

export default function Category() {
  const params = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [items, setItems] = useState<item[]>([]);

  const [itemName, setItemName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);


  const handleAddItem = async () => {
    const supabase = createClient();
    const userResult = await supabase.auth.getUser();
    const { error } = await supabase.from("items").insert({
      item_name: itemName,
      quantity: Number(quantity),
      price: Number(price),
      category_id: params.category,
      user_id: userResult.data.user?.id,
    });

    if (error) {
      console.error("Insert failed:", error.message);
    } else {
      setItemName("");
      setQuantity("");
      setPrice("");
      setImage(null);
      const itemsResult = await supabase
        .from("items")
        .select()
        .eq("category_id", params.category);
      if (itemsResult.error) {
        throw new Error(itemsResult.error.message);
      }
      setItems(itemsResult?.data);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("category")
        .select("category_name")
        .eq("id", params.category)
        .single();

      if (data) {
        setCategoryName(data.category_name);
      } else {
        console.error("Error fetching category:", error);
      }
      const itemsResult = await supabase
        .from("items")
        .select()
        .eq("category_id", params.category);
      if (itemsResult.error) {
        throw new Error(itemsResult.error.message);
      }
      setItems(itemsResult?.data);
    };

    fetchCategory();
  }, [params.category]);

  return (
    <div>
      <div className="font-bold text-2xl py-3 px-4 mt-3 mb-2">
        {categoryName}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 px-2 pt-2 mb-28">
        {items.map((item) => (
          <StockItem
            key={item.id}
            itemName={item.item_name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
        <form>
          <DialogTrigger asChild>
            <Button variant="outline" className="fixed bottom-18 right-4">
              <Plus className="mr-1" />
              Add
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Item</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="item-name">Item Name</Label>
                <Input
                  id="item-name"
                  name="name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <div className="grid gap-3 w-[50%]">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="grid gap-3 w-[50%]">
                  <Label htmlFor="image-upload">Upload Image</Label>
                </div>
              </div>
              <div className="grid gap-3 w-[50%]">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-18" onClick={()=>{
                handleAddItem();
                setIsDialogOpen(false);
              }}>
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
