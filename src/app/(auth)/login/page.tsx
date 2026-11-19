"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {Eye,EyeOff,Lock,Mail,ShieldCheck} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Checkbox,Field,Input} from "@/components/ui/form";
import { currentUser } from "@/lib/mock/common";

export default function Loginpage(){
    const router = useRouter();
    const [show,setShow] = useState(false);
    const [remember,setRemember]=useState(true);


    return(
        <form
        className="flex flex-col gap-5"
        onSubmit={(e)=>{
            e.preventDefault();
            router.push("/dashboard");
        }}
        >
            <div className="flex flex-col gap-2">
                <h2 className="text-[30px] leading-[38px] font-bold text-ink">Welcome back</h2>
                <p className="text-sm text-ink-2">Sign in with your Liveroom Technologies account to continue.</p>
            </div>
            <Field label="Work email">
                <Input icon={Mail} type="email" defaultValue={currentUser.email} required />
            </Field>
            <Field
            label ="Password"
            aside={
                <Link href="/forgot-password" className="text-[13px] font-semibold text-primary hover:underline">
                Forgot password ?
                </Link>
            }
        >
        <Input
            icon={Lock}
            type={show ? "text" : "password"}
            defaultValue="liveroom-demo"
            required
            trailing={
                <button type="button" onClick={()=> setShow((v)=>!v)} aria-label="Toggle password">
                    {show ? <EyeOff className="size-4"/>:<Eye className="size-4"/>}
                    </button>
            }
            />
        </Field>
        <Checkbox checked={remember} onChange={setRemember} label ="Keep me signed in for 7 days" />
        <Button type="submit" variant="primary" size="lg" className="w-full">
            Sign In
        </Button>
        <div className="flex items-center gap-2.5 rounded-control bg-primary-softer px-3.5 py-3 text-xs leading-[17px] text-ink-2">
            <ShieldCheck className="size-4 shrink-0 text-primary" strokeWidth={1.9}/>
            Protected by NextAuth.js with role-based access control and a full audit trail.
            </div>
            <p className="text-[13px] text-muted">
                Need access? <span className="font-semibold text-primary">Contact your system administrator</span>
                </p>
            </form>

    );

}