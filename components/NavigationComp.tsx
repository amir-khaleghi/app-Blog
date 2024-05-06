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

export function NavigationComp() {
  // ─── Return ──────────────────────────────────────────────

  return (
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
        {/* newsletter */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Newsletter</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Keep in touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Email</Label>
                      <Input
                        type="email"
                        id="name"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <CardFooter className="flex justify-between  p-0 mt-2">
                    <Button
                      className="w-full "
                      variant="ghost"
                    >
                      Subscribe
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* logout */}
        <Button
          size="sm"
          className="   text-xs "
          variant="destructive"
        >
          <LogoutLink>Log out </LogoutLink>
        </Button>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
