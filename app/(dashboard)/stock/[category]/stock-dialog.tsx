"use client"
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
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useParams } from "next/navigation";


export function StockDialog (){
  const params = useParams();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [itemName, setItemName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");



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
    }
  };
    return(
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
    )
}