// ------------------------
// GRAPH 1 — Average Screen Time
// ------------------------
Plotly.newPlot("chart1", [{
  x: ["Mobile", "Laptop", "TV"],
  y: [4.2, 5.1, 2.3],
  type: "bar"
}], { title: "Average Daily Screen Time (Hours)" });


// ------------------------
// GRAPH 2 — Stress vs Screen Time
// ------------------------
Plotly.newPlot("chart2", [{
  x: [2, 3, 4, 5, 6, 7, 8],
  y: [3, 4, 5, 6, 7, 8, 9],
  mode: "markers",
  type: "scatter"
}], { title: "Stress Level vs Total Screen Time" });


// ------------------------
// GRAPH 3 — Sleep Quality vs Screen Time
// ------------------------
Plotly.newPlot("chart3", [{
  x: [2, 3, 4, 5, 6, 7],
  y: [8, 7, 6, 5, 4, 3],
  mode: "lines+markers",
  type: "scatter"
}], { title: "Sleep Quality Declines as Screen Time Increases" });


// ------------------------
// GRAPH 4 — Correlation Heatmap
// ------------------------
var heat = {
  z: [
    [1, 0.68, -0.55],
    [0.68, 1, -0.62],
    [-0.55, -0.62, 1]
  ],
  x: ["Screen Time", "Stress", "Sleep Quality"],
  y: ["Screen Time", "Stress", "Sleep Quality"],
  type: "heatmap",
  colorscale: "Viridis"
};

Plotly.newPlot("chart4", [heat], {
  title: "Correlation Matrix"
});
