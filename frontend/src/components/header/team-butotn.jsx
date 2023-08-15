"use client"

import { useUserQuery } from "@/hooks/queries/user-query"
import Link from "next/link"

export const TeamButton = () => {
    const userQuery = useUserQuery()
    if (!userQuery.data) return null
    return <Link href={'/jointeam'}
        className="h-full bg-main px-6 py-2 grid place-content-center  text-black  font-heading text-sm md:text-base"
    >
        Team
    </Link>
}
