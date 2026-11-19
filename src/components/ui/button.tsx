import Link from "next/link";
import {cva,type VariantProps} from "class-variance-authority";
import type{LucideIcon} from "lucide-react";
import {cn} from "@/lib/utils";

const buttonVariants=cva(
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-strong text-ink hover:bg-[#ef7f2a]",
        secondary: "border border-line bg-surface text-ink hover:bg-subtle",
        soft: "bg-primary-soft text-primary hover:bg-[#cfdcee]",
        ghost: "text-ink-2 hover:bg-subtle hover:text-ink",
        danger: "bg-danger text-white hover:bg-[#a83226]",
        link: "px-0 text-primary hover:underline",
      },
      size: {
        md: "h-10 rounded-control px-4 text-sm",
        sm: "h-8 rounded-[8px] px-3 text-[13px]",
        lg: "h-[46px] rounded-control px-4 text-sm",
        icon: "size-10 rounded-control",
      },
    },
    defaultVariants: { variant: "secondary", size: "md" },
  },
);

type ButtonBaseProps =VariantProps<typeof buttonVariants> &{
    icon?:LucideIcon;
    iconRight?:LucideIcon;
    className?:string;
    children?:React.ReactNode;
};

type ButtonProps =ButtonBaseProps &
(
    | ({href: string}& Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">)
    | ({href: undefined} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>,"className" | "children">)
);

export function Button({variant, size, icon: Icon, iconRight: IconRight, className, children, ...props }:ButtonProps){
    const iconColor = variant ==="secondary" || variant ===undefined || variant === null ? "text-primary" : "";
    const content = (
        <>
        { Icon && <Icon className={cn("size-4",iconColor)}strokeWidth={1.9}/>}
        {children}
        {IconRight && <IconRight className="size-4 text-muted" strokeWidth={1.9}/>}
        </>
    );

    const classes =cn(buttonVariants({variant,size}),className);
    if("href" in props && props.href !==undefined){
        const {href,...rest}=props;
        return(
            <Link href={href} className={classes}{...rest}>
                {content}
                </Link>
        );
    }

    return(
        <button type="button" className={classes}{...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
            {content}
            </button>
    );
}

export {buttonVarients};