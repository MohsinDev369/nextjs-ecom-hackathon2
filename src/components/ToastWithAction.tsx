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
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Remove</ToastAction>,
        });
      }}
    >
      {children}
    </Button>
  );
}
