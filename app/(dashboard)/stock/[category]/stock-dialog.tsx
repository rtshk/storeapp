import { revalidatePath } from "next/cache";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { Skeleton } from "@/components/ui/skeleton";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";

async function addItem(formData: FormData) {
  "use server";
  const supabase = await createClient();

  const itemName = formData.get("itemName") as string;
  const quantity = Number(formData.get("quantity"));
  const price = Number(formData.get("price"));
  const categoryId = String(formData.get("categoryId"));

  const userResult = await supabase.auth.getUser();
  const userId = userResult.data.user?.id;

  const { error } = await supabase.from("items").insert({
    item_name: itemName,
    quantity,
    price,
    category_id: categoryId,
    user_id: userId,
  });

  if (error) {
    console.error("Insert failed:", error.message);
  }
  revalidatePath("/stock");
}

export async function StockDialog({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  console.log(category);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="fixed bottom-18 right-4">
          <Plus className="mr-1" />
          Add
        </Button>
      </DialogTrigger>
      <DialogTitle></DialogTitle>
      <DialogContent className="sm:max-w-[425px] md:h-[600px]">
        <form action={addItem}>
          <Input
            id="categoryId"
            name="categoryId"
            className="hidden"
            defaultValue={category}
            required
          />
          <div className="pt-2">
            <div className="">
              <Label htmlFor="item-name">Item Name</Label>
              <Input id="item-name" name="itemName" className="mt-2" required />
            </div>

            <div className="flex mt-4">
              <div className="pr-2">
                <div>
                  <Label htmlFor="quantity" className="pb-2">
                    Quantity
                  </Label>
                  <Input id="quantity" name="quantity" type="number" required />
                </div>
                <div className="mt-2 ">
                  <Label htmlFor="price" className="pb-2">
                    Price
                  </Label>
                  <Input id="price" name="price" required />
                </div>
              </div>
              <div>
                <Label htmlFor="image-upload" className="mb-2">
                  Image
                </Label>
                <Skeleton className="w-24 h-24" />
              </div>
            </div>
          </div>

          <DialogFooter>
            <DialogClose>
              <Button type="submit" className="w-18 md:fixed bottom-4 right-4">
                Submit
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
