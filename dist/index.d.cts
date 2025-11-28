import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import { VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | "success" | "warning" | "info" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TextButton: React$1.ForwardRefExoticComponent<React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
} & React$1.RefAttributes<HTMLButtonElement>>;
declare const IconButton: React$1.ForwardRefExoticComponent<React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "ghost" | "outline";
    size?: "sm" | "default" | "lg";
} & React$1.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    icon?: React$1.ReactNode;
    iconPosition?: "left" | "right";
    heading?: string;
    description?: string;
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;
interface SearchBarProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type"> {
    onSearch?: (value: string) => void;
    icon?: React$1.ReactNode;
}
declare const SearchBar: React$1.ForwardRefExoticComponent<SearchBarProps & React$1.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends React$1.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
    heading?: string;
    description?: string;
}
declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const Label: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_types.ClassProp | undefined) => string> & {
    required?: boolean;
} & React$1.RefAttributes<HTMLLabelElement>>;

interface CheckboxProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    indeterminate?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
    defaultChecked?: boolean;
}
declare const Checkbox: React$1.ForwardRefExoticComponent<CheckboxProps & React$1.RefAttributes<HTMLInputElement>>;

interface RadioGroupProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "onChange"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    name?: string;
    orientation?: "horizontal" | "vertical";
}
declare const RadioGroup: React$1.ForwardRefExoticComponent<RadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
interface RadioGroupItemProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
    value: string;
}
declare const RadioGroupItem: React$1.ForwardRefExoticComponent<RadioGroupItemProps & React$1.RefAttributes<HTMLInputElement>>;

declare const Switch: React$1.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & {
    size?: "sm" | "default" | "lg";
} & React$1.RefAttributes<HTMLButtonElement>>;

interface SliderProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
    showValue?: boolean;
    variant?: "default" | "primary" | "success";
    onValueChange?: (value: number) => void;
}
declare const Slider: React$1.ForwardRefExoticComponent<SliderProps & React$1.RefAttributes<HTMLInputElement>>;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & {
    error?: boolean;
} & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Card: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & {
    hover?: boolean;
    gradient?: boolean;
    variant?: "default" | "outline" | "filled";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const Separator: React$1.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    label?: string;
} & React$1.RefAttributes<HTMLDivElement>>;

declare const Tabs: React$1.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: "default" | "pills" | "underline";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & {
    variant?: "default" | "pills" | "underline";
} & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface SidebarContextValue {
    expanded: boolean;
    setExpanded: React$1.Dispatch<React$1.SetStateAction<boolean>>;
    isMobile: boolean;
}
declare function useSidebar(): SidebarContextValue;
declare const sidebarVariants: (props?: ({
    variant?: "default" | "inset" | "floating" | null | undefined;
    side?: "left" | "right" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SidebarProviderProps {
    children: React$1.ReactNode;
    defaultExpanded?: boolean;
}
declare function SidebarProvider({ children, defaultExpanded, }: SidebarProviderProps): React$1.JSX.Element;
interface SidebarProps extends React$1.HTMLAttributes<HTMLElement>, VariantProps<typeof sidebarVariants> {
    collapsible?: boolean;
}
declare const Sidebar: React$1.ForwardRefExoticComponent<SidebarProps & React$1.RefAttributes<HTMLElement>>;
declare const SidebarHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
interface SidebarGroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    label?: string;
}
declare const SidebarGroup: React$1.ForwardRefExoticComponent<SidebarGroupProps & React$1.RefAttributes<HTMLDivElement>>;
interface SidebarItemProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React$1.ReactNode;
    active?: boolean;
    badge?: React$1.ReactNode;
}
declare const SidebarItem: React$1.ForwardRefExoticComponent<SidebarItemProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarTrigger: React$1.ForwardRefExoticComponent<React$1.ButtonHTMLAttributes<HTMLButtonElement> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarSeparator: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarInset: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info" | "muted" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, size, ...props }: BadgeProps): React$1.JSX.Element;
interface RedDotProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    pulse?: boolean;
    count?: number;
}
declare function RedDot({ className, pulse, count, ...props }: RedDotProps): React$1.JSX.Element;

declare const Avatar: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & {
    size?: "xs" | "sm" | "default" | "lg" | "xl" | "2xl";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const AvatarImage: React$1.ForwardRefExoticComponent<React$1.ImgHTMLAttributes<HTMLImageElement> & React$1.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
interface AvatarGroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    max?: number;
    children: React$1.ReactNode;
}
declare const AvatarGroup: React$1.ForwardRefExoticComponent<AvatarGroupProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Table: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableElement> & React$1.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableRowElement> & React$1.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React$1.ForwardRefExoticComponent<React$1.ThHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React$1.ForwardRefExoticComponent<React$1.TdHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableCaptionElement> & React$1.RefAttributes<HTMLTableCaptionElement>>;

declare const Alert: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

interface ProgressProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value?: number;
    max?: number;
    variant?: "default" | "success" | "warning" | "destructive" | "info";
    showLabel?: boolean;
    size?: "sm" | "default" | "lg";
    animated?: boolean;
}
declare const Progress: React$1.ForwardRefExoticComponent<ProgressProps & React$1.RefAttributes<HTMLDivElement>>;
interface LoadingProps extends React$1.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "default" | "lg";
    variant?: "default" | "primary" | "secondary";
}
declare const Loading: React$1.ForwardRefExoticComponent<LoadingProps & React$1.RefAttributes<HTMLDivElement>>;

declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
declare function SkeletonText({ className, lines, ...props }: React.HTMLAttributes<HTMLDivElement> & {
    lines?: number;
}): React$1.JSX.Element;
declare function SkeletonAvatar({ className, size, ...props }: React.HTMLAttributes<HTMLDivElement> & {
    size?: "sm" | "default" | "lg";
}): React$1.JSX.Element;
declare function SkeletonCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;

declare const ToastProvider: React$1.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React$1.RefAttributes<HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const Toast$1: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React$1.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type ToastProps = React$1.ComponentPropsWithoutRef<typeof Toast$1>;
type ToastActionElement = React$1.ReactElement<typeof ToastAction>;

declare function Toaster(): React$1.JSX.Element;

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const Sheet: React$1.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const SheetOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "left" | "right" | "bottom" | "top" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetVariants> {
    showHandle?: boolean;
}
declare const SheetContent: React$1.ForwardRefExoticComponent<SheetContentProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): React$1.JSX.Element;
    displayName: string;
};

declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface PopoverProps {
    children: React$1.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
declare const Popover: ({ children, defaultOpen, open: controlledOpen, onOpenChange }: PopoverProps) => React$1.JSX.Element;
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
} & React$1.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & {
    align?: "start" | "center" | "end";
    side?: "top" | "bottom";
    sideOffset?: number;
} & React$1.RefAttributes<HTMLDivElement>>;

interface AccordionProps extends React$1.HTMLAttributes<HTMLDivElement> {
    type?: "single" | "multiple";
    defaultValue?: string | string[];
    collapsible?: boolean;
}
declare const Accordion: React$1.ForwardRefExoticComponent<AccordionProps & React$1.RefAttributes<HTMLDivElement>>;
interface AccordionItemProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value: string;
}
declare const AccordionItem: React$1.ForwardRefExoticComponent<AccordionItemProps & React$1.RefAttributes<HTMLDivElement>>;
interface AccordionTriggerProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    value?: string;
}
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
interface AccordionContentProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value?: string;
}
declare const AccordionContent: React$1.ForwardRefExoticComponent<AccordionContentProps & React$1.RefAttributes<HTMLDivElement>>;

interface CollapsibleProps extends React$1.HTMLAttributes<HTMLDivElement> {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
declare const Collapsible: React$1.ForwardRefExoticComponent<CollapsibleProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React$1.ForwardRefExoticComponent<React$1.ButtonHTMLAttributes<HTMLButtonElement> & React$1.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const ScrollArea: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & {
    orientation?: "vertical" | "horizontal" | "both";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & {
    orientation?: "vertical" | "horizontal";
} & React$1.RefAttributes<HTMLDivElement>>;

interface AspectRatioProps extends React$1.HTMLAttributes<HTMLDivElement> {
    ratio?: number;
}
declare const AspectRatio: React$1.ForwardRefExoticComponent<AspectRatioProps & React$1.RefAttributes<HTMLDivElement>>;

type ToasterToast = ToastProps & {
    id: string;
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    action?: ToastActionElement;
};
type Toast = Omit<ToasterToast, "id">;
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};

declare function useDebounce<T>(value: T, delay: number): T;
declare function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(callback: T, delay: number): (...args: Parameters<T>) => void;

declare function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void];

declare function useMediaQuery(query: string): boolean;
declare function useIsMobile(): boolean;
declare function useIsTablet(): boolean;
declare function useIsDesktop(): boolean;

/**
 * Merge class names with Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
declare function cn(...inputs: ClassValue[]): string;
/**
 * Format a number as currency
 */
declare function formatCurrency(amount: number, currency?: string, locale?: string): string;
/**
 * Format a date
 */
declare function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions, locale?: string): string;
/**
 * Truncate text to a specified length
 */
declare function truncate(str: string, length: number): string;
/**
 * Generate a random ID
 */
declare function generateId(prefix?: string): string;
/**
 * Debounce a function
 */
declare function debounce<T extends (...args: unknown[]) => unknown>(fn: T, delay: number): (...args: Parameters<T>) => void;
/**
 * Throttle a function
 */
declare function throttle<T extends (...args: unknown[]) => unknown>(fn: T, limit: number): (...args: Parameters<T>) => void;
/**
 * Check if we're running on the client side
 */
declare const isClient: boolean;
/**
 * Check if we're running on the server side
 */
declare const isServer: boolean;
/**
 * Sleep for a specified duration
 */
declare function sleep(ms: number): Promise<void>;
/**
 * Capitalize the first letter of a string
 */
declare function capitalize(str: string): string;
/**
 * Convert a string to kebab-case
 */
declare function toKebabCase(str: string): string;
/**
 * Convert a string to camelCase
 */
declare function toCamelCase(str: string): string;

type Theme = "dark" | "light" | "system";
interface ThemeProviderProps {
    children: React$1.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    attribute?: string;
    enableSystem?: boolean;
}
interface ThemeProviderState {
    theme: Theme;
    resolvedTheme: "dark" | "light";
    setTheme: (theme: Theme) => void;
}
declare function ThemeProvider({ children, defaultTheme, storageKey, attribute, enableSystem, ...props }: ThemeProviderProps): React$1.JSX.Element;
declare function useTheme(): ThemeProviderState;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarGroup, AvatarImage, Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, IconButton, Input, Label, Loading, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, RedDot, ScrollArea, ScrollBar, SearchBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset, SidebarItem, SidebarProvider, SidebarSeparator, SidebarTrigger, Skeleton, SkeletonAvatar, SkeletonCard, SkeletonText, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, TextButton, Textarea, ThemeProvider, Toast$1 as Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, capitalize, cn, debounce, formatCurrency, formatDate, generateId, isClient, isServer, sleep, throttle, toCamelCase, toKebabCase, toast, truncate, useDebounce, useDebouncedCallback, useIsDesktop, useIsMobile, useIsTablet, useLocalStorage, useMediaQuery, useSidebar, useTheme, useToast };
