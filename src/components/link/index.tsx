import {FC, ReactNode} from "react";
import NextLink , {LinkProps} from "next/link";

export const Link: FC<LinkProps & { active?: boolean, children: ReactNode}> = ({ active, children, ...props }) => <NextLink {...props} className={active ? 'transition-colors text-amber-500 font-medium' : 'transition-colors text-muted-foreground hover:text-foreground'}>{children}</NextLink>