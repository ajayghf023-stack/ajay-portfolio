import { useEffect, useState } from "react";
import { Activity, Antenna, ArrowRight, Radio, Satellite, ShieldCheck } from "lucide-react";

const diagnosticLogs = [
  "Uplink handshake established",
  "Navigation array responding",
  "Telemetry channels nominal",
  "Mission systems check complete",
];

function MissionConsole() {
  const [running, setRunning] = useState(false);
  const [visibleLogs, setVisibleLogs] = useState(0);
  const complete = visibleLogs === diagnosticLogs.length;

  useEffect(() => {
    if (!running || complete) return undefined;

    const timeout = window.setTimeout(() => {
      setVisibleLogs((current) => Math.min(current + 1, diagnosticLogs.length));
    }, 650);

    return () => window.clearTimeout(timeout);
  }, [running, visibleLogs, complete]);

  const startDiagnostics = () => {
    if (complete) {
      setVisibleLogs(0);
      setRunning(false);
      return;
    }

    setVisibleLogs(0);
    setRunning(true);
  };

  return (
    <section className="section mission section-shell" id="mission">
      <div className="section-heading">
        <span className="eyebrow"><span>05</span> / INTERACTIVE EXPERIENCE</span>
        <h2>Mission <span className="accent">Control.</span></h2>
        <p>A small simulated systems check, inspired by mission operations.</p>
      </div>

      <div className="mission-console glass-panel">
        <div className="mission-topbar">
          <div className="mission-console-title">
            <span className="console-icon"><Satellite size={17} /></span>
            <div>
              <strong>AJ-01 · FLIGHT SYSTEMS</strong>
              <span>MISSION CONTROL INTERFACE</span>
            </div>
          </div>
          <span className={`mission-state${complete ? " complete" : ""}`}>
            <span />{complete ? "CHECK COMPLETE" : running ? "DIAGNOSTICS RUNNING" : "STANDBY"}
          </span>
        </div>

        <div className="mission-grid">
          <div className="mission-visual">
            <div className="radar">
              <span className="radar-ring radar-ring-one" />
              <span className="radar-ring radar-ring-two" />
              <span className="radar-ring radar-ring-three" />
              <span className="radar-sweep" />
              <span className="radar-center"><Satellite size={32} /></span>
              <span className="radar-target radar-target-one" />
              <span className="radar-target radar-target-two" />
            </div>
            <span className="visual-caption">ORBITAL LINK · SIMULATED</span>
            <div className="mission-coordinates">
              <span>ALTITUDE <b>408 KM</b></span>
              <span>ORBIT <b>92.7 MIN</b></span>
            </div>
          </div>

          <div className="mission-readout">
            <div className="readout-heading">
              <span><Activity size={15} /> SYSTEM READOUT</span>
              <span>SIMULATION</span>
            </div>
            <div className="system-list">
              <div className="system-row">
                <Antenna size={16} />
                <span>Communication</span>
                <strong className={visibleLogs > 0 ? "system-online" : ""}>
                  {visibleLogs > 0 ? "ONLINE" : "STANDBY"}
                </strong>
              </div>
              <div className="system-row">
                <OrbitIcon />
                <span>Navigation</span>
                <strong className={visibleLogs > 1 ? "system-online" : ""}>
                  {visibleLogs > 1 ? "READY" : "STANDBY"}
                </strong>
              </div>
              <div className="system-row">
                <Radio size={16} />
                <span>Telemetry</span>
                <strong className={visibleLogs > 2 ? "system-online" : ""}>
                  {visibleLogs > 2 ? "ACTIVE" : "STANDBY"}
                </strong>
              </div>
              <div className="system-row">
                <ShieldCheck size={16} />
                <span>Flight systems</span>
                <strong className={complete ? "system-online" : ""}>
                  {complete ? "NOMINAL" : "PENDING"}
                </strong>
              </div>
            </div>

            <div className="system-log" aria-live="polite" aria-label="Simulated diagnostic log">
              <span className="log-title">SYSTEM LOG</span>
              {visibleLogs === 0 ? (
                <p className="log-placeholder">&gt; Awaiting operator input...</p>
              ) : (
                diagnosticLogs.slice(0, visibleLogs).map((log, index) => (
                  <p key={log}><span>0{index + 1}</span> &gt; {log}</p>
                ))
              )}
            </div>

            <button
              type="button"
              className="console-button"
              onClick={startDiagnostics}
              disabled={running && !complete}
            >
              {complete ? "Reset simulation" : running ? "Running checks..." : "Run diagnostics"}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="mission-disclaimer">
          <span className="disclaimer-pulse" />
          SIMULATED INTERFACE · NOT REAL SPACECRAFT TELEMETRY
        </div>
      </div>
    </section>
  );
}

function OrbitIcon() {
  return <span className="orbit-icon" aria-hidden="true">◉</span>;
}

export default MissionConsole;
