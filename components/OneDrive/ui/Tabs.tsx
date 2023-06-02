"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@lib/utils";
import { motion } from "framer-motion";

const farmerMotion = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <div className="flex items-center mt-4">
    <div className="flex-1"></div>
    <div className="flex rounded-md shadow border border-slate-300 bg-white p-2 dark:border-slate-700 dark:bg-slate-900">
      <TabsPrimitive.List
        ref={ref}
        className={cn("flex", className)}
        {...props}
      />
    </div>
  </div>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      "flex items-center justify-center rounded px-2.5 py-1.5 text-sm font-medium text-black transition-all data-[state=active]:bg-slate-800 data-[state=active]:text-slate-100 dark:text-slate-100 dark:data-[state=active]:bg-slate-100 dark:data-[state=active]:text-slate-900",
      className
    )}
    {...props}
    ref={ref}
  >
    <motion.div whileHover="hover" variants={farmerMotion}>
      {props.children}
    </motion.div>
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={cn(
      //"mt-2 rounded-md border border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-slate-900",
      className
    )}
    {...props}
    ref={ref}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
