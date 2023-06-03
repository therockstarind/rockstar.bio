import clsx from 'clsx';
import * as React from 'react';
import { Tooltip as TippyTooltip, TooltipProps } from 'react-tippy';
import { motion } from 'framer-motion';

type TooltipTextProps = {
  tipChildren?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  spanClassName?: string;
  withUnderline?: boolean;
} & TooltipProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

const tooltipVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Tooltip({
  tipChildren,
  children,
  className,
  spanClassName,
  withUnderline = false,
  ...rest
}: TooltipTextProps) {
  return (
    <TippyTooltip
      trigger='mouseenter'
      interactive
      html={
        <motion.div
          className={clsx(
            className,
            'rounded-md bg-white dark:bg-black p-2 text-black shadow-md dark:bg-dark dark:text-white hidden md:block',
            'border dark:border-gray-600 my-4'
          )}
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
        >
          {tipChildren}
        </motion.div>
      }
      {...rest}
    >
      {withUnderline ? (
        <span
          className={clsx(spanClassName, 'underline')}
          style={{ textDecorationStyle: 'dotted' }}
        >
          {children}
        </span>
      ) : (
        <>{children}</>
      )}
    </TippyTooltip>
  );
}