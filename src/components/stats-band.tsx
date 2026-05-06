import { stats } from "@/lib/site";

export function StatsBand() {
  return (
    <section className="bg-[#101828] py-10 text-white">
      <div className="container-shell grid gap-4 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="animate-rise rounded-lg border border-white/10 bg-white/[0.06] p-6"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <p className="text-3xl font-black tracking-tight">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-white/65">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
