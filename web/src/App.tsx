export default function App() {
  const apiBase = import.meta.env.VITE_API_BASE ?? "https://api.<yourapp>.maxlongton.com";

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Made a change baby - let's see</h1>
      <p>Web is up. API base: {apiBase}</p>
    </div>
  );
}
