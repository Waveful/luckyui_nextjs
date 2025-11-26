"use client";

import * as React from "react";
import Image from "next/image";
import {
  Notification01Icon,
  Tick01Icon,
  ArrowDown01Icon,
  Copy01Icon,
  CreditCardIcon,
  GithubIcon,
  Mail01Icon,
  MoreVerticalIcon,
  PlusSignIcon,
  Settings01Icon,
  Sun01Icon,
  Moon01Icon,
  UserIcon,
  Home01Icon,
  Search01Icon,
  FavouriteIcon,
  Share01Icon,
} from "hugeicons-react";
import { useTheme } from "@/components/theme-provider";
import { Button, TextButton, IconButton } from "@/components/ui/button";
import { Input, SearchBar } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge, RedDot } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage, AvatarGroup } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress, Loading } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [progress, setProgress] = React.useState(45);
  const { toast } = useToast();
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        {/* LuckyUI App Bar Style Header */}
        <header className="border-b border-border/50 lucky-glass sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="LuckyUI Logo" 
                width={44} 
                height={44}
                className="rounded-2xl"
              />
              <div>
                <span className="text-xl font-bold tracking-tight">LuckyUI</span>
                <p className="text-xs text-muted-foreground">Design System</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-2">
              <TextButton 
                className="text-muted-foreground"
                onClick={() => document.getElementById("components")?.scrollIntoView({ behavior: "smooth" })}
              >
                Components
              </TextButton>
              <IconButton 
                variant="ghost"
                onClick={() => window.open("https://github.com/Waveful/luckyui_nextjs", "_blank")}
              >
                <GithubIcon className="h-5 w-5" />
              </IconButton>
            </nav>
            <div className="flex items-center gap-2">
              <IconButton 
                variant="ghost"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              >
                {resolvedTheme === "dark" ? (
                  <Sun01Icon className="h-5 w-5" />
                ) : (
                  <Moon01Icon className="h-5 w-5" />
                )}
              </IconButton>
              <Button 
                className="rounded-full"
                onClick={() => window.open("https://www.npmjs.com/package/luckyui", "_blank")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section - Mobile-first design */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <Image 
            src="/logo.png" 
            alt="LuckyUI Logo" 
            width={120} 
            height={120}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
            Beautiful Components
            <br />
            Built for Scalability
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A comprehensive React design system package created by Waveful, providing scalable 
            and consistent UI components for modern React applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-full"
              onClick={() => document.getElementById("components")?.scrollIntoView({ behavior: "smooth" })}
            >
              Browse Components
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 w-full sm:w-auto rounded-full"
              onClick={() => window.open("https://github.com/Waveful/luckyui_nextjs", "_blank")}
            >
              <GithubIcon className="h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          {/* Quick Install Card */}
          <div className="mt-12 max-w-md mx-auto">
            <Card variant="filled" className="p-4">
              <div className="flex items-center gap-2">
                <code className="flex-1 text-sm text-muted-foreground text-left font-mono">
                  npx create-luckyui@latest
                </code>
                <IconButton 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText("npx create-luckyui@latest");
                    toast({ title: "Copied to clipboard!", variant: "success" });
                  }}
                >
                  <Copy01Icon className="h-5 w-5" />
                </IconButton>
              </div>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 pb-20" id="components">
          <h2 className="text-2xl font-bold mb-8 text-center">Component Showcase</h2>

          {/* Buttons Section */}
          <section className="mb-12">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Buttons
            </h3>
            <Card>
              <CardContent className="pt-5">
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="info">Info</Button>
                </div>
                <Separator className="my-5" />
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <IconButton>
                    <PlusSignIcon className="h-5 w-5" />
                  </IconButton>
                  <Button loading>Loading</Button>
                </div>
                <Separator className="my-5" />
                <div className="flex flex-wrap items-center gap-3">
                  <TextButton>Text Button</TextButton>
                  <IconButton variant="default">
                    <FavouriteIcon />
                  </IconButton>
                  <IconButton variant="outline">
                    <Share01Icon />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Form Controls Section */}
          <section className="mb-12">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Form Controls
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <Card>
                <CardHeader>
                  <CardTitle>Input Fields</CardTitle>
                  <CardDescription>LuckyUI TextField styles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input 
                    heading="Username"
                    description="Enter your username"
                    placeholder="@username" 
                  />
                  <SearchBar placeholder="Search anything..." />
                  <Input
                    placeholder="With icon"
                    icon={<Mail01Icon className="h-5 w-5" />}
                  />
                  <Input 
                    heading="Error State"
                    placeholder="Invalid input" 
                    error 
                    description="This field is required"
                  />
                  <Textarea 
                    heading="Message"
                    placeholder="Write your message here..." 
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selection Controls</CardTitle>
                  <CardDescription>Checkboxes, radios, and switches</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-3">
                    <Label>Select</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch id="switch-lg" size="lg" defaultChecked />
                    <Label htmlFor="switch-lg">Large switch</Label>
                  </div>
                  <div className="space-y-3">
                    <Label>Radio Group</Label>
                    <RadioGroup defaultValue="option1">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="option1" id="r1" />
                        <Label htmlFor="r1">Option 1</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="option2" id="r2" />
                        <Label htmlFor="r2">Option 2</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-3">
                    <Label>Slider</Label>
                    <Slider defaultValue={50} showValue />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Cards & Badges */}
          <section className="mb-12">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Cards & Badges
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Card hover>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Pro Plan</CardTitle>
                    <Badge variant="info">Popular</Badge>
                  </div>
                  <CardDescription>Perfect for growing teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">
                    $29<span className="text-sm font-normal text-muted-foreground">/mo</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Tick01Icon className="h-5 w-5 text-success" />
                      Unlimited projects
                    </li>
                    <li className="flex items-center gap-2">
                      <Tick01Icon className="h-5 w-5 text-success" />
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <Tick01Icon className="h-5 w-5 text-success" />
                      Custom integrations
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Badge Variants</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="muted">Muted</Badge>
                </CardContent>
                <Separator className="my-4" />
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Red Dot Notifications</p>
                  <div className="flex gap-4">
                    <div className="relative">
                      <IconButton variant="outline">
                        <Notification01Icon />
                      </IconButton>
                      <RedDot />
                    </div>
                    <div className="relative">
                      <IconButton variant="outline">
                        <Mail01Icon />
                      </IconButton>
                      <RedDot count={5} />
                    </div>
                    <div className="relative">
                      <IconButton variant="outline">
                        <FavouriteIcon />
                      </IconButton>
                      <RedDot count={128} pulse />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Avatars</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar size="xs">
                      <AvatarFallback>XS</AvatarFallback>
                    </Avatar>
                    <Avatar size="sm">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                    <Avatar size="xl">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        XL
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Avatar Group</p>
                  <AvatarGroup max={4}>
                    <Avatar>
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>B</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>E</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>F</AvatarFallback>
                    </Avatar>
                  </AvatarGroup>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Feedback & Progress */}
          <section className="mb-12">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Feedback & Progress
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <Card>
                <CardHeader>
                  <CardTitle>Alerts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <Notification01Icon className="h-5 w-5" />
                    <AlertTitle>Default Alert</AlertTitle>
                    <AlertDescription>
                      This is a default alert message.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="success">
                    <Tick01Icon className="h-5 w-5" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                      Your changes have been saved.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="warning">
                    <Notification01Icon className="h-5 w-5" />
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>
                      Please review your settings.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <Notification01Icon className="h-5 w-5" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please try again.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="info">
                    <Notification01Icon className="h-5 w-5" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      Here is some helpful information.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress & Loading</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <Progress value={progress} showLabel />
                  <div className="space-y-2">
                    <Label>Success Progress</Label>
                    <Progress value={75} variant="success" />
                  </div>
                  <div className="space-y-2">
                    <Label>Warning Progress</Label>
                    <Progress value={50} variant="warning" />
                  </div>
                  <div className="space-y-2">
                    <Label>Info Progress</Label>
                    <Progress value={30} variant="info" size="lg" />
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Label>Loading Indicators</Label>
                    <div className="flex items-center gap-4">
                      <Loading size="sm" />
                      <Loading />
                      <Loading size="lg" variant="primary" />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Label>Skeleton Loading</Label>
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tabs & Tables */}
          <section className="mb-12">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Tabs & Tables
            </h3>
            <Card>
              <CardContent className="pt-5">
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-5">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { name: "Alice Johnson", status: "Active", role: "Admin" },
                          { name: "Bob Smith", status: "Pending", role: "User" },
                          { name: "Carol White", status: "Active", role: "Editor" },
                        ].map((user, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-3">
                                <Avatar size="sm">
                                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                {user.name}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={user.status === "Active" ? "success" : "warning"}>
                                {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <IconButton variant="ghost" size="sm">
                                    <MoreVerticalIcon className="h-5 w-5" />
                                  </IconButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <UserIcon className="mr-2 h-5 w-5" />
                                    View Profile
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Settings01Icon className="mr-2 h-5 w-5" />
                                    Settings
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-destructive">
                                    Remove
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TabsContent>
                  <TabsContent value="analytics" className="mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { label: "Total Views", value: "24.5K", change: "+12%" },
                        { label: "Bounce Rate", value: "32%", change: "-4%" },
                        { label: "Avg. Session", value: "3m 42s", change: "+8%" },
                      ].map((stat, i) => (
                        <Card key={i} variant="filled">
                          <CardContent className="pt-4">
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <Badge variant={stat.change.startsWith("+") ? "success" : "destructive"} size="sm">
                              {stat.change}
                            </Badge>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="reports" className="mt-5">
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Reports content coming soon...</p>
                    </div>
                  </TabsContent>
                </Tabs>

                <Separator className="my-6" label="Tab Variants" />

                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Pills Style</p>
                  <Tabs defaultValue="home">
                    <TabsList variant="pills">
                      <TabsTrigger value="home" variant="pills">
                        <Home01Icon className="h-4 w-4 mr-2" />
                        Home
                      </TabsTrigger>
                      <TabsTrigger value="search" variant="pills">
                        <Search01Icon className="h-4 w-4 mr-2" />
                        Search
                      </TabsTrigger>
                      <TabsTrigger value="profile" variant="pills">
                        <UserIcon className="h-4 w-4 mr-2" />
                        Profile
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <p className="text-sm text-muted-foreground mt-4">Underline Style</p>
                  <Tabs defaultValue="all">
                    <TabsList variant="underline">
                      <TabsTrigger value="all" variant="underline">All</TabsTrigger>
                      <TabsTrigger value="unread" variant="underline">Unread</TabsTrigger>
                      <TabsTrigger value="archived" variant="underline">Archived</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dialog & Tooltips */}
          <section className="mb-12">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Overlays & Interactions
            </h3>
            <Card>
              <CardContent className="pt-5">
                <div className="flex flex-wrap gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Open Modal</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <Input heading="Name" id="name" defaultValue="John Doe" />
                        <Input heading="Email" id="email" defaultValue="john@example.com" />
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover for Tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip!</p>
                    </TooltipContent>
                  </Tooltip>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        Dropdown Menu
                        <ArrowDown01Icon className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <UserIcon className="mr-2 h-5 w-5" />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCardIcon className="mr-2 h-5 w-5" />
                        Billing
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings01Icon className="mr-2 h-5 w-5" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="secondary"
                    onClick={() => {
                      toast({
                        title: "Success!",
                        description: "This is a toast notification!",
                        variant: "success",
                      });
                    }}
                  >
                    Success Toast
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => {
                      toast({
                        title: "Warning",
                        description: "Please check your settings.",
                        variant: "warning",
                      });
                    }}
                  >
                    Warning Toast
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* LuckyUI Style Footer */}
        <footer className="border-t bg-secondary/30">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image 
                  src="/logo.png" 
                  alt="LuckyUI Logo" 
                  width={40} 
                  height={40}
                  className="rounded-2xl"
                />
                <div>
                  <span className="font-semibold">LuckyUI</span>
                  <p className="text-xs text-muted-foreground">Design System for React</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground text-center">
                <p>Built with Next.js, TypeScript, Tailwind CSS, and Hugeicons.</p>
                <p>
                  Made with 💙 by{" "}
                  <a 
                    href="https://waveful.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground transition-colors"
                  >
                    waveful.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IconButton 
                  variant="ghost"
                  onClick={() => window.open("https://github.com/Waveful/luckyui_nextjs", "_blank")}
                >
                  <GithubIcon className="h-5 w-5" />
                </IconButton>
              </div>
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </TooltipProvider>
  );
}
