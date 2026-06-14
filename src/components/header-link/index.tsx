import {FC, PropsWithChildren} from "react";
import NextLink , {LinkProps} from "next/link";
import {usePathname} from "next/navigation";

export const HeaderLink: FC<PropsWithChildren<LinkProps>> = (
    { children, href, ...props }
) => {
    const active = href === usePathname();
    return <NextLink href={href} {...props} className={active ? 'transition-colors text-amber-500 font-medium' : 'transition-colors text-muted-foreground hover:text-foreground'}>{children}</NextLink>;
}