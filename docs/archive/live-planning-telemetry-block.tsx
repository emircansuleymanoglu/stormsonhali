// Archived hero telemetry block.
// It is intentionally not rendered on the live site. Keep for a future live planning feature.

export function LivePlanningTelemetryBlockArchive() {
  return (
    <div className="mt-8 max-w-2xl rounded-lg border border-white/15 bg-[#101828]/72 p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase text-white/50">
            Operation control
          </p>
          <p className="mt-1 text-sm font-bold text-white/82">
            Route Schiedam - Benelux distributie
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/8 px-3 py-2">
          <span className="status-pulse size-2.5 rounded-full bg-[#79d0ff]" />
          <span className="text-xs font-black uppercase text-white/68">
            live planning
          </span>
        </div>
      </div>
      <div className="route-telemetry mt-5">
        <span className="route-dot route-dot-start" />
        <span className="route-dot route-dot-mid" />
        <span className="route-dot route-dot-end" />
        <span className="route-sweep" />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["ETA", "14:40"],
          ["OTD", "98.7%"],
          ["Status", "Onderweg"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-md border border-white/10 bg-white/7 px-4 py-3"
          >
            <p className="text-xs font-black uppercase text-white/45">{label}</p>
            <p className="mt-1 text-lg font-black text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
