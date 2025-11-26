import {
  AlertCircleIcon,
  ArrowDown01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUp01Icon,
  Calendar01Icon,
  Cancel01Icon,
  CheckmarkCircle01Icon,
  Clock01Icon,
  Copy01Icon,
  CreditCardIcon,
  Delete01Icon,
  Download01Icon,
  Edit01Icon,
  EyeIcon,
  FavouriteIcon,
  File01Icon,
  FilterIcon,
  GithubIcon,
  Globe02Icon,
  GridIcon,
  HelpCircleIcon,
  Home01Icon,
  Image01Icon,
  InformationCircleIcon,
  LaptopIcon,
  Layers01Icon,
  Link01Icon,
  Loading01Icon,
  LockPasswordIcon,
  Logout01Icon,
  Mail01Icon,
  Menu01Icon,
  MessageEdit01Icon,
  MinusSignIcon,
  Moon01Icon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  Notification01Icon,
  PackageIcon,
  PencilEdit01Icon,
  PlusSignIcon,
  Search01Icon,
  Settings01Icon,
  Share01Icon,
  Shield01Icon,
  ShoppingCart01Icon,
  StarIcon,
  Sun01Icon,
  Tick01Icon,
  Upload01Icon,
  UserIcon,
  UserGroupIcon,
  ViewOffIcon,
  FlashIcon,
  CircleIcon,
  SidebarLeft01Icon,
  ListViewIcon,
  Login01Icon,
} from "hugeicons-react";
import type { FC, SVGProps } from "react";

// Type definition for Hugeicons
export type HugeIcon = FC<SVGProps<SVGSVGElement> & { size?: number; color?: string; strokeWidth?: number }>;

export const Icons = {
  // Alerts & Status
  alertCircle: AlertCircleIcon,
  alertTriangle: AlertCircleIcon,
  checkCircle: CheckmarkCircle01Icon,
  info: InformationCircleIcon,
  helpCircle: HelpCircleIcon,
  
  // Arrows & Navigation (using arrows for chevrons)
  arrowDown: ArrowDown01Icon,
  arrowLeft: ArrowLeft01Icon,
  arrowRight: ArrowRight01Icon,
  arrowUp: ArrowUp01Icon,
  chevronDown: ArrowDown01Icon,
  chevronLeft: ArrowLeft01Icon,
  chevronRight: ArrowRight01Icon,
  chevronUp: ArrowUp01Icon,
  
  // Actions
  check: Tick01Icon,
  copy: Copy01Icon,
  download: Download01Icon,
  edit: Edit01Icon,
  pencil: PencilEdit01Icon,
  plus: PlusSignIcon,
  minus: MinusSignIcon,
  search: Search01Icon,
  share: Share01Icon,
  trash: Delete01Icon,
  upload: Upload01Icon,
  x: Cancel01Icon,
  close: Cancel01Icon,
  
  // Communication
  bell: Notification01Icon,
  mail: Mail01Icon,
  messageCircle: MessageEdit01Icon,
  
  // Calendar & Time
  calendar: Calendar01Icon,
  clock: Clock01Icon,
  
  // Files & Documents
  file: File01Icon,
  image: Image01Icon,
  
  // Interface
  circle: CircleIcon,
  eye: EyeIcon,
  eyeOff: ViewOffIcon,
  filter: FilterIcon,
  grid: GridIcon,
  layers: Layers01Icon,
  list: ListViewIcon,
  menu: Menu01Icon,
  moreHorizontal: MoreHorizontalIcon,
  moreVertical: MoreVerticalIcon,
  panelLeft: SidebarLeft01Icon,
  
  // User & Account
  creditCard: CreditCardIcon,
  lock: LockPasswordIcon,
  logIn: Login01Icon,
  logOut: Logout01Icon,
  settings: Settings01Icon,
  shield: Shield01Icon,
  user: UserIcon,
  users: UserGroupIcon,
  
  // Social & Links
  externalLink: Link01Icon,
  gitHub: GithubIcon,
  globe: Globe02Icon,
  heart: FavouriteIcon,
  star: StarIcon,
  
  // E-commerce
  package: PackageIcon,
  shoppingCart: ShoppingCart01Icon,
  
  // Devices & Tech
  laptop: LaptopIcon,
  zap: FlashIcon,
  
  // Theme
  moon: Moon01Icon,
  sun: Sun01Icon,
  
  // Loading States
  loader: Loading01Icon,
  spinner: Loading01Icon,
} as const;
