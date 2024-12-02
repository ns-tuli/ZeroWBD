'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Menu, Coins, Leaf, Search, Bell, User, ChevronDown, LogIn, LogOut } from "lucide-react"
import { Trash2 } from 'lucide-react';
import { Globe,Scale, Shrub,TreePine,Megaphone,Smile,Sparkle,Star,TreePalm,TrendingUp,ThumbsUp,Recycle} from 'lucide-react';

import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
  } from "@/components/ui/dropdown-menu"

import { Badge } from "@/components/ui/badge"
import { Web3Auth } from "@web3auth/modal"
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base"
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider"

const clientId = process.env.WEB3_AUTH_CLIENT_ID


