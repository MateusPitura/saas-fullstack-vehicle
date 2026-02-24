import {
  PopoverContent,
  Popover as PopoverShadcn,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Childrenable } from "@/domains/global/types";
import { Arrow as PopoverArrow } from "@radix-ui/react-popover";
import classNames from "classnames";
import type { ReactElement } from "react";

interface ContainerProps extends Childrenable {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function Container({
  children,
  onOpenChange,
  open,
}: ContainerProps): ReactElement {
  return (
    <PopoverShadcn open={open} onOpenChange={onOpenChange}>
      {children}
    </PopoverShadcn>
  );
}

interface ContentProps extends Childrenable {
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  className?: string;
}

function Content({
  children,
  className,
  ...props
}: ContentProps): ReactElement {
  return (
    <PopoverContent
      className={classNames("bg-white shadow-none", className)}
      {...props}
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      {children}
    </PopoverContent>
  );
}

interface TriggerProps extends Childrenable {
  asChild?: boolean;
}

function Trigger({ children, asChild }: TriggerProps): ReactElement {
  return <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>;
}

interface ArrowProps {
  arrowOffset?: number;
}

function Arrow({ arrowOffset }: ArrowProps): ReactElement {
  return (
    <PopoverArrow asChild>
      <svg
        width="12"
        height="6"
        viewBox="0 0 12 6"
        style={{
          transform: `translateY(-1px) translateX(${arrowOffset ?? 0}px)`,
        }}
      >
        <polygon points="0,0 6,6 12,0" className="fill-white" />
        <path
          d="M0 0 L6 6 L12 0"
          className="stroke-neutral-200 stroke-1 fill-none"
        />
      </svg>
    </PopoverArrow>
  );
}

const Popover = Object.assign(Container, { Content, Trigger, Arrow });

export { Popover };
