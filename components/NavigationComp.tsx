'use client';

import * as React from 'react';
import Link from 'next/link';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

// ─── Comp ─────────────────────────────────────────── 🟩 ─

export function NavigationComp({ user }) {
  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex items-center justify-between w-full">
      <NavigationMenu>
        <NavigationMenuList className=" p-2 justify-between w-full">
          {/* home */}
          <NavigationMenuItem>
            <Link
              href="/"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* new post */}
          <NavigationMenuItem>
            <Link
              href="/home/create-post"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                New Post
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/*Feed */}
          <NavigationMenuItem>
            <Link
              href={`/home/${user?.id}`}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Feed
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* logout */}
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        size="sm"
        className="   text-xs "
        variant="destructive"
      >
        <LogoutLink>Log out </LogoutLink>
      </Button>
    </div>
  );
}
