// app/(dashboard)/stock/StockCategoryDialog.tsx
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
    DialogClose,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Button } from "@/components/ui/button";
  import { Plus } from "lucide-react";
  import { Skeleton } from "@/components/ui/skeleton";
  
  import { revalidatePath } from "next/cache";
  import { createClient } from "@/lib/supabase/server";
import UploadImage from "./upload-image";
  
  /** ---------- server action ---------- */
  async function addCategory(formData: FormData) {
    "use server";
  
    const title = (formData.get("categoryTitle") as string)?.trim();
    if (!title) return;
  
    const supabase = await createClient();
    const { data: userRes } = await supabase.auth.getUser();
    const userId = userRes.user?.id;
    
    console.log(title);
    console.log(userId);
    const { error } = await supabase.from("category").insert({
      category_name : title,
      user_id: userId,
    });
  
    if (error) {
      console.error("Insert failed:", error.message);
      return;
    }
  
    /* revalidate any page that shows the category list */
    revalidatePath("/stock");
  }
  
  /** ---------- server component ---------- */
  export default function StockCategoryDialog() {
    return (
      <div className="fixed bottom-4 right-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Plus className="mr-1" />
              Add Category
            </Button>
          </DialogTrigger>
  
          <DialogContent className="sm:max-w-[425px]">
            <DialogTitle className="text-xl font-semibold mb-4">
              Add New Category
            </DialogTitle>
  
            {/* the form posts to the server action above */}
            <form action={addCategory}>
              <div className="space-y-4">
                {/* Category title */}
                <div>
                  <Label htmlFor="category-title" className="mb-2">Category Title</Label>
                  <Input
                    id="category-title"
                    name="categoryTitle"
                    placeholder="e.g., Dairy, Fruits"
                    required
                  />
                </div>
  
                {/* Category image (placeholder for now) */}
                <div>
                  <Label htmlFor="category-image">Image (coming soon)</Label>
                  <UploadImage/>
                </div>
              </div>
  
              <DialogFooter className="mt-6">
                <DialogClose asChild>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  