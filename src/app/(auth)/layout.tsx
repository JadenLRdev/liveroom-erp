import {BarChart3,Package,SquareKanban,Users,Wallet} from "lucide-react";
import {Logo} from "@/components/layout/logo";

const modules=[
    {icon:Wallet,title:"Finance & Accounting",sub:"Invoices,budgets,payments"},
    { icon: Users, title: "CRM & Sales", sub: "Leads, deals, contracts" },
    { icon: SquareKanban, title: "Projects & Resources", sub: "Tasks, timesheets, milestones" },
    { icon: Package, title: "Inventory & Assets", sub: "Assets, licenses & POs" },
];

export default function AuthLayout({children}:{children:React.ReactNode}){
    return(
        <div className="flex min-h-screen bg-surface">
            <section className="relative hidden w-[640px] shrink-0 flex-col justify-between overflow-hidden bg-[linear-gradient(135deg,#040515_0%,#252b36_45%,#f68e3f_100%)] p-14 lg:flex">
                <Logo size={42}/>
                <div className="flex max-w-[528px] flex-col gap-5">
                <h1 className="text-[40px] leading-[48px] font-bold text-white">Run finance, sales, projects and assets from one connected platform.</h1>
                <div className="mt-1 grid grid-cols-2 gap-3">
            {modules.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#252b36]/80 p-3.5 backdrop-blur">
                <span className="flex size-9 items-center justify-center rounded-[10px] bg-primary-strong text-ink">
                  <Icon className="size-[18px]" strokeWidth={1.9} />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-white">{title}</span>
                  <span className="text-xs text-white/70">{sub}</span>
                </span>
              </div>
            ))}
             <div className="col-span-2 flex items-center gap-3 rounded-xl border border-white/20 bg-[#040515]/45 p-3.5 backdrop-blur">
              <span className="flex size-9 items-center justify-center rounded-[10px] bg-white text-ink">
                <BarChart3 className="size-[18px]" strokeWidth={1.9} />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-white">Admin, Reporting &amp; Analytics</span>
                <span className="text-xs text-white/80">Central dashboard, audit trail and AI-written monthly reports</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-[400px]">{children}</div>
      </section>
    </div>
    );
}