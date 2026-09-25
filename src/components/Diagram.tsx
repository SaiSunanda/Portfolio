import { Fragment } from "react";
import type { Layer } from "@/content/caseStudies";

// Renders a top-down architecture diagram. A layer is either a single node or
// a row of parallel nodes joined by a bus line.
export function LayerDiagram({ layers, label }: { layers: Layer[]; label: string }) {
  return (
    <figure className="diagram" role="img" aria-label={label} style={{ margin: 0 }}>
      {layers.map((layer, i) => {
        const isLast = i === layers.length - 1;
        const node = Array.isArray(layer) ? (
          <div className={`d-row${isLast ? " is-last" : ""}`} style={{ ["--n" as string]: layer.length }}>
            {layer.map((n) => (
              <div key={n} className="d-node">{n}</div>
            ))}
          </div>
        ) : (
          <div className="d-single">
            <div className="d-node">{layer}</div>
          </div>
        );
        // Rows draw their own bus lines; a link joins each layer's centre to the next.
        const showLink = !isLast;
        return (
          <Fragment key={i}>
            {node}
            {showLink && <div className="d-link" aria-hidden />}
          </Fragment>
        );
      })}
    </figure>
  );
}

export function Flow({ steps, label }: { steps: string[]; label: string }) {
  return (
    <ol className="flow" aria-label={label}>
      {steps.map((s) => (
        <li key={s}><span>{s}</span></li>
      ))}
    </ol>
  );
}
