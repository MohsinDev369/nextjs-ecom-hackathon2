"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function ToastWithAction({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          // title: "Added To Cart",
          description: "The Product is added to cart",
          action: <ToastAction altText="Remove">Remove</ToastAction>,
        });
      }}
    >
      {children}
    </Button>
  );
}
