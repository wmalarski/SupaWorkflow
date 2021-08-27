import {
  BreadcrumbLink as ChakraLink,
  BreadcrumbLinkProps as ChakraLinkProps
} from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";
import { UrlObject } from "url";

const BreadcrumbLink = (
  {
    href,
    nextProps,
    ...props
  }: Omit<ChakraLinkProps, "href"> & {
    href: string | UrlObject;
    nextProps?: Omit<NextLinkProps, "href">;
  },
  ref?: React.LegacyRef<HTMLAnchorElement>
): JSX.Element => (
  <NextLink href={href} passHref {...nextProps}>
    <ChakraLink {...props} ref={ref} />
  </NextLink>
);

export default React.forwardRef(BreadcrumbLink);
